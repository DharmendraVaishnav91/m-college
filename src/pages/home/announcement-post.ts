import { Component } from '@angular/core';
import { NavParams, NavController } from 'ionic-angular';
import { FileChooser } from '@ionic-native/file-chooser';
import { FormControl, FormGroup,Validators,FormBuilder} from '@angular/forms';

@Component({
  selector:"announcement-post",
  templateUrl:'announcement-post.html'
})
export class AnnouncementPost {
  createAnnouncemnetForm: FormGroup;
  
  constructor(private navCtrl: NavController, private navParams: NavParams, private fileChooser: FileChooser, public formBuilder:FormBuilder){
    this.createAnnouncemnetForm=formBuilder.group({
      title: ['',Validators.compose([Validators.required])],
      for:['',Validators.compose([Validators.required])],
      detail:['',Validators.compose([Validators.required])]
    });
  }

  openFileChooser(){
    this.fileChooser.open()
    .then(uri => console.log("selected file url ="+uri))
    .catch(e => console.log("Error occurred in choosing the file=")+e);
  }
}
