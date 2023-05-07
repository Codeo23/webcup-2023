import { useEffect, useRef } from "react";

const Photobook = ({imageData}) => {
  
  const angleUnit = 180 / (imageData.length - 1);

  useEffect(() => {

    // Setup initial items angle
    const items = [];

    for (let i = 0; i < items.length; i++) {

      const item = items[i];
      const nextAngle = -i * angleUnit;
      item.style.transform = `rotateY(${nextAngle}deg)`;
      item.dataset.targetIndex = i.toString();
      item.dataset.angle = nextAngle.toString();
    }

    // Move view based on mouse position
    // const mouseHandler = (e) => {
    //   const delta = (e.clientY / window.innerHeight - 0.5) * 10 - 20;
    //   el.current.style.transform = `translateZ(-20px) translateX(-175px) rotateX(${delta}deg)`;
    // }
    // document.body.addEventListener('mousemove', mouseHandler);
  }, [imageData]);

  // Target an item, bring it to front
  // function target(index) {

  //   const items = el.current.children;
  //   const selectedItem = items[index] ;

  //   // Find the shifted amount
  //   const shift = items.length - parseInt(selectedItem.dataset.targetIndex);

  //   // Ignore front item
  //   if (shift == items.length) return;

  //   // Iterate and update item angle
  //   for (let i = 0; i < items.length; i++) {

  //     const item = items[i] ;
  //     const oldIndex = parseInt(item.dataset.targetIndex);
  //     const angle = parseFloat(item.dataset.angle);

  //     let targetIndex = oldIndex + shift;
  //     if (targetIndex >= items.length) targetIndex -= items.length;
  //     let nextAngle;
  //     if (oldIndex < targetIndex)
  //       nextAngle = angle - (targetIndex - oldIndex) * angleUnit;
  //     else 
  //       nextAngle = angle - (360 - Math.abs(angle % 360)) - targetIndex * angleUnit;
  //     item.style.transform = `rotateY(${nextAngle}deg)`;
  //     item.dataset.angle = nextAngle.toString();
  //     item.dataset.targetIndex = targetIndex.toString();
  //   }
  // }
  return (
    <div className="story container my-4">
      <div className="photobook" >
        {imageData.map((it, index) => 
          <div 
              // onClick={() => target(index)}
              key={index} 
              className='photobook-item'>
                {index}
          </div>)
        }
      </div>
    </div>
  )
}

export default Photobook;
