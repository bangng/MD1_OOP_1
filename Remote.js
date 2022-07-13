class Remote{
   onOff(tv){
       tv.setStatus(!tv.getStatus())
   }
   chanelChange(tv,chanel){
       if (tv.getStatus()){
           tv.setChanel(chanel)
       }else {
           console.log('bật tv lên !!!')
       }

   }
   volumeChange(tv){
      if (tv.getVolume()>=3){
          return max
          // console.log('bật ti vi nào!!!!')
      }else {
          tv.setVolume(tv.getVolume()+1)


      }


   }
}