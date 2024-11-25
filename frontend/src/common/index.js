
const backenddomain="https://rbac-a-5ws1-qd08ifunv-rakesh-kushwahas-projects.vercel.app" 

const SummaryApi= {
    signUP:{
        url:`${backenddomain}/api/signup`,
        method:"POST",

    },
    signIn:{
        url:`${backenddomain}/api/signin`,
        method:"POST",


    },
    current_user:{
        url:`${backenddomain}/api/user-details`,
        method:"GET",
    },
    logout_user:{
        url:`${backenddomain}/api/userLogout`,
        method:"get"
    },
    allUser:{
        url:`${backenddomain}/api/all-user`,
        method:'get'
    },
    updateUser:{
        url:`${backenddomain}/api/update-user`,
        method:"POST",
    },
    uploadProduct:{
       url:`${backenddomain}/api/upload-product`,
       method:"POST" ,
    },
    allProduct:{
        url:`${backenddomain}/api/get-product`,
        method:"GET"
    },
    updateProduct:{
        url:`${backenddomain}/api/update-product`,
        method:'POST'
    },
    categoryProduct:{
        url:`${backenddomain}/api/get-categoryProduct  `,
        method:"GET"
    },
    categoryWiseProduct:{
        url:`${backenddomain}/api/category-Product `,
        method:"post"

    },

    productDetails:{
        url:`${backenddomain}/api/product-details `,
        method:"post"

    },
    addToCartProduct:{
        url:`${backenddomain}/api/addtocart `,
        method:"post"

    },
    addToCartProductView:{
        url:`${backenddomain}/api/view-card-product `,
        method:"get"

    },
    addToCartProductCount:{
        url:`${backenddomain}/api/countAddToCartProduct `,
        method:"get"

    },
    updateCartProduct : {
        url : `${backenddomain}/api/update-cart-product`,
        method : 'post'
    },
    deleteCartProduct : {
        url : `${backenddomain}/api/delete-cart-product`,
        method : 'post'
    },
   


}

export default SummaryApi