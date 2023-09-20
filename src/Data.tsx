
export default async function Data(ctx) {

  let { request, response } = ctx
    
  
  request = await fetch('https://apis.anabasis.pro/api/addresses').then(response => ctx.response = response.body) 
  console.log(request)
   
    return request
  
  }
    