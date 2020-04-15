import { Component } from '@angular/core';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Tugas 1 Angular';
  total=0;
  output='';
  cek:boolean;
  hasil(angka,pangkat){
  this.total=Math.pow(parseInt(angka),parseInt(pangkat));
  }

  cekGenapGanjil(total){
    if(total % 2==0){
      this.cek=true;
    }
    else{
      this.cek=false;
    }
    return this.cek;
  }
  
  pola='';
  printGenap(angka,pangkat){

    for (var i=pangkat;i<=this.total;i++){
      for(var j=0;j<i;j++){
          
          this.pola+='*';

      }
      this.pola+='<br>';

    }


  }
}
 