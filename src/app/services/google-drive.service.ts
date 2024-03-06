import { Injectable } from '@angular/core';
declare const gapi: any;
@Injectable({
  providedIn: 'root'
})
export class GoogleDriveService {
  private readonly CLIENT_ID = '300947558867-t73h2qdqd1k5oabg7datnqjtj6n0injd.apps.googleusercontent.com';
  private readonly SCOPE = 'https://www.googleapis.com/auth/drive.readonly';
  private readonly DISCOVERY_DOCS = ['https://www.googleapis.com/discovery/v1/apis/drive/v3/rest'];
  constructor() { }

  async loadClient(): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      gapi.load('client:auth2', {
        callback: resolve,
        onerror: reject
      });
    });
  }
  async authenticate(): Promise<void> {
    await this.loadClient();
    return new Promise<void>((resolve, reject) => {
      gapi.load('client:auth2', async () => {
        try {
          await gapi.auth2.init({
            client_id: this.CLIENT_ID,
            scope: this.SCOPE
          });
          resolve();
        } catch (error) {
          reject(error);
        }
      });
    });
  }

  async getImages(): Promise<string[]> {
    await this.authenticate();
    const response = await gapi.client.drive.files.list({
      q: "mimeType='image/jpeg'", // You can adjust the query to filter by file type or folder, etc.
      fields: 'files(id, name, thumbnailLink)'
    });
    return response.result.files.map((file: any) => file.thumbnailLink);
  }
}
