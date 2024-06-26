import { Injectable, computed, inject, signal } from '@angular/core';
import { Users, UsersResponse } from '../interfaces/req-response';
import { HttpClient } from '@angular/common/http';
import { delay } from 'rxjs';

interface State{
  users: Users[];
  loading: boolean;
}
@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private http = inject(HttpClient);
   #state = signal<State>({
    loading: true,
    users: [],
  })
  public users = computed(() => this.#state().users);
  public loading = computed(() => this.#state().loading);

  constructor() { 
    this.http.get<UsersResponse>('https://reqres.in/api/users')
    .pipe(delay(1500))
    .subscribe( res => {
      this.#state.set({
        loading:false,
        users: res.data,
      });
      
    })
  }

}
