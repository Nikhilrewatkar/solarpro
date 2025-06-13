import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { Firestore, addDoc, collection, collectionData, doc, updateDoc } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient, private firestore: Firestore) { }

  updateUserStatus(id: string, body: any): Observable<any> {
    const userDocRef = doc(this.firestore, `users/${id}`);
    return from(updateDoc(userDocRef, body));
  }

  getUsers(): Observable<any[]> {
    const usersRef = collection(this.firestore, 'users');
    return collectionData(usersRef, { idField: 'id' });
  }

  addUser(user: any): Observable<any> {
    const usersRef = collection(this.firestore, 'users');
    return from(addDoc(usersRef, user));
  }

}
