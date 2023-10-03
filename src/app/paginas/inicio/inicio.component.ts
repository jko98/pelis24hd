import { Component } from '@angular/core';
import { PeliApiService } from 'src/app/service/peli-api.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {
  
  
  constructor(private service:PeliApiService){

  }
   
  banerResult:any=[];

  ngOnInit(): void{
    this.banerdata();
  }


  // datosdelbanner
  banerdata(){
    this.service.banerApiData().subscribe((result)=>{
     console.log(result, 'banerresult#');
     this.banerResult = result.result;
    });
  }

}
