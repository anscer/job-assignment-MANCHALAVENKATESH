import mongoose, { Document, Schema } from 'mongoose';

export interface IState extends Document {
    name: string;
    description: string;
    status: string;
    createdAt: Date;
    updatedAt: Date;
    createdBy: string;
    summarizeStates: () => Promise<any>;
}

const StateSchema: Schema<IState> = new Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    status: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
    createdBy: { type: String, required: true },
});

StateSchema.index({ createdAt: 1, updatedAt: 1 });

StateSchema.methods.summarizeStates = async function() {
    const result = await this.model('State').aggregate([
        {
            $group: {
                _id: {
                    year: { $year: "$createdAt" },
                    month: { $month: "$createdAt" },
                    day: { $dayOfMonth: "$createdAt" },
                    hour: { $hour: "$createdAt" }
                },
                count: { $sum: 1 },
                statuses: { $addToSet: "$status" }
            }
        },
        {
            $sort: { "_id.year": 1, "_id.month": 1, "_id.day": 1, "_id.hour": 1 }
        }
    ]);
    return result;
};

export default mongoose.model<IState>('State', StateSchema);
