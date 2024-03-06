import { Component } from '@angular/core';
import { GoogleDriveService } from 'src/app/services/google-drive.service';

@Component({
  selector: 'app-google-images',
  templateUrl: './google-images.component.html',
  styleUrls: ['./google-images.component.scss']
})
export class GoogleImagesComponent {
  images: string[] = [];
  constructor(private googleDriveService: GoogleDriveService){}
  ngOnInit(): void {
    this.getImagesFromDrive();
  }
  async getImagesFromDrive(): Promise<void> {
    try {
      this.images = await this.googleDriveService.getImages();
    } catch (error) {
      console.error('Error fetching images from Google Drive:', error);
    }
  }
}
