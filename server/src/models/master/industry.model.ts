import mongoose, { Document, Schema, Types } from 'mongoose';

export interface IIndustry extends Document {
  label: string;
  description?: string;
  value?: Types.ObjectId;
  isActive: boolean;
  createdBy: Types.ObjectId;
  updatedBy?: Types.ObjectId;
}

const industrySchema = new Schema<IIndustry>(
  {
    label: { 
      type: String,
      required: [true, 'label is required'],
      unique: true
    },
    description: {
      type: String
    },
    value: { 
      type: Schema.Types.ObjectId,
      default: function() {
        if (this instanceof mongoose.Document) {
          return this._id;
        }
        return undefined;
      }
    },
    isActive: {
      type: Boolean,
      default: true
    },
    createdBy: {
      type: Schema.Types.ObjectId,
      ref: 'Admin',
      required: [true, 'Created by is required']
    },
    updatedBy: {
      type: Schema.Types.ObjectId,
      ref: 'Admin'
    }
  },
  { 
    timestamps: true,
    toJSON: {
      virtuals: true
    },
    toObject: {
      virtuals: true
    }
  }
);

// Ensure value is set before saving
industrySchema.pre('save', function(this: IIndustry & { _id: Types.ObjectId }, next) {
  if (!this.value) {
    this.value = this._id;
  }
  next();
});

const Industry = mongoose.model<IIndustry>('Industry', industrySchema);

export default Industry;
