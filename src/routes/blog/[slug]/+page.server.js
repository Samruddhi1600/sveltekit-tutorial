export async function load({params}){
    return{
        content:`Hi ${params.slug}`
    }
}