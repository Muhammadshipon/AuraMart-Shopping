

const AboutUs = () => {
  return (
   <div className="bg-[url('https://www.fashionbeans.com/wp-content/uploads/2017/06/instaaccount3.jpg')] pt-2 bg-fixed pb-20  my-14 bg-cover">
                  
      

       
      <div className="hero  ">
        
  <div className="hero-content flex-col lg:flex-row p-0 md:px-20 text-white  bg-black bg-opacity-50  mt-20 py-20 max-w-[1000px] rounded-t-2xl gap-10">
    
    <img src='https://images.pexels.com/photos/3768005/pexels-photo-3768005.jpeg?cs=srgb&dl=pexels-willoworld-3768005.jpg&fm=jpg' className="max-w-[300px] md:max-w-md rounded-lg shadow-2xl" />
    <div className="p-4">
      
      <h1 className="text-3xl font-bold text-orange-500">Our Mission</h1>
      <p className="py-6">At <strong>AuraMart</strong>, our core values guide everything we do. We prioritize quality, ensuring that each item in our collection meets the highest standards of craftsmanship and durability.</p>
      <button className="btn btn-outline text-orange-500  hover:text-white">Read more</button>
    </div>
  </div>
</div>
      <div className="hero  ">
        
  <div className="hero-content flex-col lg:flex-row-reverse p-0 md:px-20 text-white  bg-black bg-opacity-50 pb-20 max-w-[1000px] rounded-b-2xl gap-10">
    
    <img src='https://www.nedap-retail.com/app/uploads/2021/02/adidas-shoes.jpg' className="max-w-[300px] md:max-w-md rounded-lg shadow-2xl " />
    <div className="px-4">
      
      <h1 className="text-3xl font-bold text-orange-500">Our Values</h1>
      <p className="py-6">We’re dedicated to building a community of satisfied customers who trust us to bring them the best products and the latest trends. Your satisfaction is our top priority, and we’re here to ensure that every purchase you make brings you joy and value.</p>
      <button className="btn btn-outline text-orange-500 hover:text-white">Read more</button>
    </div>
  </div>
</div>
    </div> 
  );
};

export default AboutUs;


