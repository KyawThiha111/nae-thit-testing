type TypeOfEachBlog = {
    id:string,
    catagory:string,
    image:string,
    postdate:string,
    timelength:string,
    title:string,
    description:string,
    createdAt:string
}

type TypeOfGetPagiBlog = {
    success: boolean,
    count:number,
    total:number,
    totalPages:number,
    currentPage:number,
    blogs:TypeOfEachBlog[]
}