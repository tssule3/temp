import { Component, OnInit } from '@angular/core';
import { UploadImageService } from '../upload-image.service';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent implements OnInit {

  imageUrl: string = "/assets/default-user.png";
  fileToUpload: File = null;
  constructor(private imageService : UploadImageService) { }

  ngOnInit() {
  }

  handleFileInput(file: FileList) {
    this.fileToUpload = file.item(0);

    //Show image preview
    var reader = new FileReader();
    reader.onload = (event:any) => {
      this.imageUrl = event.target.result;
    }
    reader.readAsDataURL(this.fileToUpload);
  }

  OnSubmit(Caption,Image){
   this.imageService.postFile(this.fileToUpload).subscribe(
     data =>{
       console.log('done');
       Image.value = null;
       this.imageUrl = "/assets/default-user.png";
     }
   );
  }
  handleFile(file) {
    console.log(file);
    
  }

}
