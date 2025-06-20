
type TypeOfBlogCatagory = {
    _id:string,
    cata_name:string
}
type TypeOfAllCatagory = {
    success:boolean,
    data: TypeOfBlogCatagory[]
}