import { useEffect, useState } from "react";
import Legend from "./legend/Legend.jsx";


const URICustomer = "http://localhost:1412/category";

function Dashboard() {
  const [customerData, setCustomerData] = useState(null); 
  const [categories, setCategories] = useState([]); 

  async function fetchCustomer() {
    try {
      const response = await fetch(URICustomer, {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        },
        credentials: "include"
      });
      if (!response.ok) {
        console.error("Error fetching customer data:", response.statusText);
      } else {
        const data = await response.json();
        setCustomerData(data); 
        setCategories(data.categories);
      }
    } catch (error) {
      console.log(`Error: ${error}`);
    }
  }

  useEffect(() => {
    fetchCustomer();
  }, []);

  return (
    <div>
      Dashboard
      <Legend />
      <div style={{ border: '1px solid red', height: '400px', width: '100vw'}}>
        {categories.map((category, index) => (
          <div 
            key={index}
            style={{ border: '1px solid red', height: '200px', width: '200px'}}
            >

            <p>{category.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;

import { useEffect, useState } from "react";

const URIAccount = "http://localhost:1412/account";

function Legend() {
  const [account, setAccount] = useState(null); 

  async function fetchCustomer() {
    try {
      const response = await fetch(URIAccount, {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        },
        credentials: "include"
      });
      if (!response.ok) {
        console.error("Error fetching customer data:", response.statusText);
      } else {
        const data = await response.json();
        setAccount(data); 
        
      }
    } catch (error) {
      console.log(`Error: ${error}`);
    }
  }

  useEffect(() => {
    fetchCustomer();
  }, []);

  return (
    <div>Legend
      <div style={{ border: '1px solid red', height: '400px', width: '100vw'}}>
        {account.map((customer, index) => (
          <div 
            key={index}
            style={{ border: '1px solid red', height: '200px', width: '200px'}}
            >

            <p>{customer.firstname}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Legend