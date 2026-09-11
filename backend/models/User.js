import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
const schema=new mongoose.Schema({name:{type:String,required:true,trim:true},email:{type:String,required:true,unique:true,lowercase:true,trim:true},password:{type:String,required:true,select:false,minlength:6},role:{type:String,enum:['owner','member'],default:'owner'},company:{type:String,default:''},avatar:{type:String,default:''}},{timestamps:true});
schema.pre('save',async function(next){if(!this.isModified('password')) return next();this.password=await bcrypt.hash(this.password,10);next();});
schema.methods.matchPassword=function(p){return bcrypt.compare(p,this.password);};
export default mongoose.model('User',schema);
