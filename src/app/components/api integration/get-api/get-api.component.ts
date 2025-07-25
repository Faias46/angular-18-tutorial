import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-get-api',
  standalone: true,
  imports: [],
  templateUrl: './get-api.component.html',
  styleUrl: './get-api.component.css'
})
export class GetApiComponent {

  userList:any []= [];

  customerList:any [] = [];

  constructor(private http:HttpClient){
    this.getAllUser();
  }


  getAllUser(){
    debugger;
    this.http.get("https://jsonplaceholder.typicode.com/users").subscribe((res:any)=>{
      debugger;
      this.userList=res;
    })
  }

  getAllCustomer(){
    debugger;
    this.http.get("https://cors-anywhere.herokuapp.com/https://projectapi.gerasim.in/api/RealEstate/GetAllCustomers").subscribe((result:any)=>{
      debugger;
      this.customerList=result.data;
    },error =>{
      debugger;
    })
  }

}

















// import { HttpClient } from '@angular/common/http'; // Import HttpClient to make HTTP requests
// import { Component } from '@angular/core'; // Import Component decorator to define an Angular component

// @Component({
//   selector: 'app-get-api', // Component selector used in templates
//   standalone: true,        // This is a standalone component (does not need a module)
//   imports: [],             // No additional Angular modules imported
//   templateUrl: './get-api.component.html', // Path to component HTML template
//   styleUrl: './get-api.component.css'      // Path to component CSS
// })
// export class GetApiComponent {

//   userList: any[] = []; // Array to store users from JSONPlaceholder API
//   customerList: any[] = []; // Array to store customers from real estate API

//   constructor(private http: HttpClient) { // Inject HttpClient into the constructor
//     this.getAllUser(); // Call getAllUser method when the component loads
//   }

//   getAllUser() { // Method to fetch user data from public API
//     debugger; // Debugging breakpoint for inspecting execution
//     this.http.get("https://jsonplaceholder.typicode.com/users") // Make GET request to fetch users
//       .subscribe((res: any) => { // Subscribe to response observable
//         debugger; // Debugging breakpoint to check response
//         this.userList = res; // Store API response in userList array
//       });
//   }

//   getAllCustomer() { // Method to fetch customer data from real estate API
//     debugger; // Debugging breakpoint before API call
//     this.http.get("https://cors-anywhere.herokuapp.com/https://projectapi.gerasim.in/api/RealEstate/GetAllCustomers") // Make GET request via CORS proxy
//       .subscribe((result: any) => { // Subscribe to the response observable
//         debugger; // Debugging breakpoint to check API result
//         this.customerList = result.data; // Store customer data from response in customerList array
//       });
//   }

// }

