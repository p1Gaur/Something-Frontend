import { Component, OnInit ,ViewChild, ElementRef, AfterViewInit} from '@angular/core';
import {TestimonialsService} from '../testimonials.service';


@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.css']
})
export class TestimonialsComponent implements OnInit {
 setTestimonialData={'content':"",'userId':""};
 setUserId={'userId':""}
Testimonials;
@ViewChild('myModal') myModal: ElementRef;
//  Testimonials=[
//    {
//      id: 1,
//      content: "\'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidDonec ac odio tempor orci dapibus ultrices in iaculis nunc. Scelerisque viverra mauris in aliquam sem fringilla.\'",
//      userName:"Lorem"
//    },
//      {
//     id: 2,
//     content: "\'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidDonec ac odio tempor orci dapibus ultrices in iaculis nunc. Scelerisque viverra mauris in aliquam sem fringilla.\'",
//      userName:"Dolor"
//   },
//   {
//     id: 3,
//     content: "\'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidDonec ac odio tempor orci dapibus ultrices in iaculis nunc. Scelerisque viverra mauris in aliquam sem fringilla.\'",
//      userName:"Brutus"
//   },
//   {
//     id: 4,
//     content: "\'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidDonec ac odio tempor orci dapibus ultrices in iaculis nunc. Scelerisque viverra mauris in aliquam sem fringilla.\'",
//      userName:"Ipsum"
//   }
//  ]
  constructor(private testimonialService: TestimonialsService) { 
   
  }

  ngOnInit() {
    this.testimonialService.getTestimonial().subscribe(response=>{
      this.Testimonials=response;
    });

  }


  addTestimonial(content){
    console.log(content);
    this.setTestimonialData.content=content;
    this.setTestimonialData.userId=localStorage.getItem('currentUserId');
    this.testimonialService.sendTestimonial(this.setTestimonialData).subscribe(response =>{
      if(response==1){
        alert("Success");
        this.testimonialService.getTestimonial().subscribe(response=>{
          this.Testimonials=response;
        });
      }
      else{
        alert("Sorry! Please add testimonial again.")
      }
    });
    this.myModal.nativeElement.style.display="none";

  }

  addTest(){
    this.setUserId.userId=localStorage.getItem('currentUserId');
    this.testimonialService.checkUser(this.setUserId)
    .subscribe(response =>{
     if(response>0){
        this.myModal.nativeElement.style.display="block";
     }
     else{
      alert("Sorry! Only for users who have experienced our services.");
     }
    });
    
  }
  closeTest(){
    this.myModal.nativeElement.style.display="none";
  }

}
