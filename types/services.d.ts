type TypeOfEachService = {
 _id:string,
title:string,
subtitle:string,
description:string
logo:string
showonhomepage:string
}
type TypeOfServices = {
    success:boolean,
    services:TypeOfEachService[]
}