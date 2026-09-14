// billy

//get current year

export const setupFooter = () =>{
    const currentYear = new Date().getFullYear();
    document.querySelector("#currentyear").textContent = currentYear;

    // for the last modified

    const lastModified = document.lastModified;
    document.querySelector("#lastModified").textContent=`Last modified: ${lastModified}`;

}