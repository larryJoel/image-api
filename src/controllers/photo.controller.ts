import { Request, Response } from 'express'
import path from 'path';
import fs from 'fs-extra';
import Photo from '../models/Photo';


export async function getPhotos (req:Request, res:Response){
 const photos = await Photo.find();
 return res.json(photos);
}

export async function getPhoto (req:Request, res:Response){
    const photo = await Photo.findById(req.params.id);
    res.json(photo);
    console.log(req.params.id)
}

export async function createPhoto (req:Request, res:Response){
    const { title, description} = req.body;
    const newPhoto = {
        title:title,
        description:description,
        imagePath:req.file.path
    };
    const photo = new Photo(newPhoto);
    await photo.save()
    console.log(photo)
  
    return res.json({
        message:'Photo successfully saved',
        photo
    })
};


export async function deletePhoto(req:Request, res:Response){
    const photo = await Photo.findByIdAndRemove(req.params.id);   
    if (photo){
        await fs.unlink(path.resolve(photo.imagePath));
    }
    return res.json({
        message:'Photo deleted',
        photo}); 
};

export async function updatePhoto(req:Request,res:Response){
    const {id} = req.params;
    const {title, description}= req.body;
    console.log(req.body);
    const updatePhoto = await Photo.findByIdAndUpdate(id,{
        title,
        description
    },{new:true});
    return res.json({
        message:'Successfully Updated',
        updatePhoto
    });

}

//https://www.youtube.com/watch?v=OMBwyCNmoPY

//https://www.youtube.com/watch?v=4MEsROoq5Qw