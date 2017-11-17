import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AnnouncementDetail } from '../home/announcement-detail';
import { AnnouncementPost } from '../home/announcement-post';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  announcements:Array<{title:string,class:string,postedBy:string,createdDate:string,detail:string,imageURL:string}>;
  constructor(public navCtrl: NavController) {
    this.announcements=[{
      title:"Holiday",
      class:"CSE SEM I",
      postedBy:"Dharmendra Vaishnav",
      createdDate:"28 Oct 2017",
      detail:"Holiday on 9 Novembor on occassion of birthday celebration.",
      imageURL:"https://goo.gl/FCSnw9"
    },{
      title:"Fresher Party",
      class:"Mechanical First Year",
      postedBy:"Chetan Choudary",
      createdDate:"9 Oct 2017",
      detail:"Hello students we are organising fresher party for first year students, so register yourself as volunteer to make this event successful.",
      imageURL:""
    }];
  }

  showAnnouncementDetail(announcement){
    this.navCtrl.push(AnnouncementDetail,{
      announcement:announcement
    });
  }

  showCreateAnnouncementForm(){
    this.navCtrl.push(AnnouncementPost);
  }
}
