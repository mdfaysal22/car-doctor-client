import React from "react";
import img1 from "./../../../../assets/images/banner/1.jpg";
import img2 from "./../../../../assets/images/banner/2.jpg";
import img3 from "./../../../../assets/images/banner/3.jpg";
import img4 from "./../../../../assets/images/banner/4.jpg";
import img5 from "./../../../../assets/images/banner/5.jpg";
import img6 from "./../../../../assets/images/banner/6.jpg";
import BannarItem from "./BannarItem/BannarItem";

const caruoselData = [
    {
        img:img1,
        pre: 6,
        id:1,
        next:2
    },
    {
        img:img2,
        pre: 1,
        id:2,
        next:3
    },
    {
        img:img3,
        pre: 2,
        id:3,
        next:4
    },
    {
        img:img4,
        pre: 3,
        id:4,
        next:5
    },
    {
        img:img5,
        pre: 4,
        id:5,
        next:6
    },
    {
        img:img6,
        pre: 5,
        id:6,
        next:1
    }
]

const Bannar = () => {
    
  return (
    <div className="mx-10">
      <div className="carousel h-96 overflow-hidden my-5 rounded-lg w-full">
        {
            caruoselData.map(caru => <BannarItem key={caru.id} caruosel={caru}></BannarItem>)
        }
      </div>
    </div>
  );
};

export default Bannar;
