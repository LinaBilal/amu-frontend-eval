
const SUPABASE_URL = "https://coysgeazmxnlqtjccqss.supabase.co/rest/v1/customers";
const SUPABASE_API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNveXNnZWF6bXhubHF0amNjcXNzIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzc1MDU3NjAsImV4cCI6MTk5MzA4MTc2MH0.xjUy2ew7LMksXAGs3njzafg35A6DVE-Hk2YhXsJNGK0";

/**
 * GET USERS FROM API
 */
export const loadUsersFromApi = () => {
    return fetch(`${SUPABASE_URL}?order=created_at`, {
        method: 'GET',
        headers: {
            apiKey: SUPABASE_API_KEY,
            'Content-Type': 'application/json',
            Prefer: "return=representation",
        },
    }).then((response) => response.json())
}
/**
 * Get User By ID
 * @param id
 */
export const loadOneUserById = (id) => {
    return fetch(`${SUPABASE_URL}?id=eq.${id}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            apiKey: SUPABASE_API_KEY,
            Prefer: "return=representation",
        }
    })
        .then(response =>response.json())
        
}
/**
 * GET User with Invoice ID
 * @param {*} id 
 * @returns 
 */

export const loadInvoiceWithUserID = (id) => { 
    return fetch(`https://coysgeazmxnlqtjccqss.supabase.co/rest/v1/invoices?idUser=eq.${id}`,{
        headers: {
            "Content-Type": "application/json",
            apiKey: SUPABASE_API_KEY,
            Prefer: "return=representation"
        }
    }).then(response =>response.json())
}


/**
 * CREATE A NEW INVOICE
 */
export const addInvoiceFromAPI = (invoice) => {
    return fetch('https://coysgeazmxnlqtjccqss.supabase.co/rest/v1/invoices', {
        method: "POST",
        body: JSON.stringify(invoice),
        headers: {
            "Content-Type": "application/json",
            apiKey: SUPABASE_API_KEY,
            Prefer: "return=representation",
        },
    })
     .then((response) => response.json())
     .then(items => items[0]);
}


/**
 * CREATE A NEW User
 */
export const addUserFromAPI = (user) => {
    return fetch(SUPABASE_URL, {
        method: "POST",
        body: JSON.stringify(user),
        headers: {
            "Content-Type": "application/json",
            apiKey: SUPABASE_API_KEY,
            Prefer: "return=representation",
        },
    })
     .then((response) => response.json())
     .then(items => items[0]);
}