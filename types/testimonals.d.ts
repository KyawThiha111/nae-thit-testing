type TypeOfEachTestimonals = {
    note:string,
    patient_name:string,
    patient_type:string,
    id:string
}
type TypeOfTestimonals = {
    success: boolean,
    FormattedResponse:TypeOfEachTestimonals[]
}