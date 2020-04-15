import { Component } from '@angular/core';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Tugas 1 Angular';
  total;
  output='';
  cek;
  hasil(angka,pangkat){
  this.total=Math.pow(parseInt(angka),parseInt(pangkat));
  }

  cekGenapGanjil(){
    if(this.total % 2==0){
      this.cek=1;
    }
    else{
      this.cek=2;
    }
  }
  
  pola='';
  printGenap(angka,pangkat){
    
    if(this.cek==1){
    this.pola='';
    for (var i=pangkat;i<=this.total;i++){
      for(var j=0;j<i;j++){
          
          this.pola+='*';

      }
      this.pola+='<br>';

    }
    }

  }
  temp;
  
   printGanjil(angka,pangkat){
    if(this.cek==2) {
      this.pola='';
      this.temp=0;
      for (var i=pangkat;i>0;i--){
        for(var j=0;j<i;j++){
          
          this.pola+='*';

        }
        if(this.temp<angka){
          for(var k=0;k<this.temp+1;k++){
            this.pola+='O';
          }
        }
      this.pola+='<br>';
      this.temp++;

      }
    }
    

  }
}
 