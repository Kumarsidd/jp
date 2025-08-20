const States = [
  {
    city: "Mumbai",
    state: "Maharashtra",
    country: "India", 
  },
  {
    city: "Delhi",
    state: "Delhi",
    country: "India", 
  },
  {
    city: "Bengaluru",
    state: "Karnataka",
    country: "India", 
  },
  {
    city: "Ahmedabad",
    state: "Gujarat",
    country: "India", 
  },
  {
    city: "Hyderabad",
    state: "Telangana",
    country: "India", 
  },
  {
    city: "Chennai",
    state: "Tamil Nadu",
    country: "India", 
  },
  {
    city: "Kolkata",
    state: "West Bengal",
    country: "India", 
  },
  {
    city: "Pune",
    state: "Maharashtra",
    country: "India", 
  },
  {
    city: "Jaipur",
    state: "Rajasthan",
    country: "India", 
  },
  {
    city: "Surat",
    state: "Gujarat",
    country: "India", 
  },
  {
    city: "Lucknow",
    state: "Uttar Pradesh",
    country: "India", 
  },
  {
    city: "Kanpur",
    state: "Uttar Pradesh",
    country: "India", 
  },
  {
    city: "Nagpur",
    state: "Maharashtra",
    country: "India", 
  },
  {
    city: "Patna",
    state: "Bihar",
    country: "India", 
  },
  {
    city: "Indore",
    state: "Madhya Pradesh",
    country: "India", 
  },
  {
    city: "Thane",
    state: "Maharashtra",
    country: "India", 
  },
  {
    city: "Bhopal",
    state: "Madhya Pradesh",
    country: "India", 
  },
  {
    city: "Visakhapatnam",
    state: "Andhra Pradesh",
    country: "India", 
  },
  {
    city: "Vadodara",
    state: "Gujarat",
    country: "India", 
  },
  {
    city: "Firozabad",
    state: "Uttar Pradesh",
    country: "India", 
  },
  {
    city: "Ludhiana",
    state: "Punjab",
    country: "India", 
  },
  {
    city: "Rajkot",
    state: "Gujarat",
    country: "India", 
  },
  {
    city: "Agra",
    state: "Uttar Pradesh",
    country: "India", 
  },
  {
    city: "Siliguri",
    state: "West Bengal",
    country: "India", 
  },
  {
    city: "Nashik",
    state: "Maharashtra",
    country: "India", 
  },
  {
    city: "Faridabad",
    state: "Haryana",
    country: "India", 
  },
  {
    city: "Patiala",
    state: "Punjab",
    country: "India", 
  },
  {
    city: "Meerut",
    state: "Uttar Pradesh",
    country: "India", 
  },
  {
    city: "Kalyan-Dombivali",
    state: "Maharashtra",
    country: "India", 
  },
  {
    city: "Vasai-Virar",
    state: "Maharashtra",
    country: "India", 
  },
  {
    city: "Varanasi",
    state: "Uttar Pradesh",
    country: "India", 
  },
  {
    city: "Srinagar",
    state: "Jammu & Kashmir",
    country: "India", 
  },
  {
    city: "Dhanbad",
    state: "Jharkhand",
    country: "India", 
  },
  {
    city: "Jodhpur",
    state: "Rajasthan",
    country: "India", 
  },
  {
    city: "Amritsar",
    state: "Punjab",
    country: "India", 
  },
  {
    city: "Raipur",
    state: "Chhattisgarh",
    country: "India", 
  },
  {
    city: "Allahabad",
    state: "Uttar Pradesh",
    country: "India", 
  },
  {
    city: "Coimbatore",
    state: "Tamil Nadu",
    country: "India", 
  },
  {
    city: "Jabalpur",
    state: "Madhya Pradesh",
    country: "India", 
  },
  {
    city: "Gwalior",
    state: "Madhya Pradesh",
    country: "India", 
  },
  {
    city: "Vijayawada",
    state: "Andhra Pradesh",
    country: "India", 
  },
  {
    city: "Madurai",
    state: "Tamil Nadu",
    country: "India", 
  },
  {
    city: "Guwahati",
    state: "Assam",
    country: "India", 
  },
  {
    city: "Chandigarh",
    state: "Chandigarh",
    country: "India", 
  },
  {
    city: "Hubli-Dharwad",
    state: "Karnataka",
    country: "India", 
  },
  {
    city: "Amroha",
    state: "Uttar Pradesh",
    country: "India", 
  },
  {
    city: "Moradabad",
    state: "Uttar Pradesh",
    country: "India", 
  },
  {
    city: "Gurgaon",
    state: "Haryana",
    country: "India", 
  },
  {
    city: "Aligarh",
    state: "Uttar Pradesh",
    country: "India", 
  },
  {
    city: "Solapur",
    state: "Maharashtra",
    country: "India", 
  },
  {
    city: "Ranchi",
    state: "Jharkhand",
    country: "India", 
  },
  {
    city: "Jalandhar",
    state: "Punjab",
    country: "India", 
  },
  {
    city: "Tiruchirappalli",
    state: "Tamil Nadu",
    country: "India", 
  },
  {
    city: "Bhubaneswar",
    state: "Odisha",
    country: "India", 
  },
  {
    city: "Salem",
    state: "Tamil Nadu",
    country: "India", 
  },
  {
    city: "Warangal",
    state: "Telangana",
    country: "India", 
  },
  {
    city: "Mira-Bhayandar",
    state: "Maharashtra",
    country: "India", 
  },
  {
    city: "Thiruvananthapuram",
    state: "Kerala",
    country: "India", 
  },
  {
    city: "Bhiwandi",
    state: "Maharashtra",
    country: "India", 
  },
  {
    city: "Saharanpur",
    state: "Uttar Pradesh",
    country: "India", 
  },
  {
    city: "Guntur",
    state: "Andhra Pradesh",
    country: "India", 
  },
  {
    city: "Amravati",
    state: "Maharashtra",
    country: "India", 
  },
  {
    city: "Bikaner",
    state: "Rajasthan",
    country: "India", 
  },
  {
    city: "Noida",
    state: "Uttar Pradesh",
    country: "India", 
  },
  {
    city: "Jamshedpur",
    state: "Jharkhand",
    country: "India", 
  },
  {
    city: "Bhilai Nagar",
    state: "Chhattisgarh",
    country: "India", 
  },
  {
    city: "Cuttack",
    state: "Odisha",
    country: "India", 
  },
  {
    city: "Kochi",
    state: "Kerala",
    country: "India", 
  },
  {
    city: "Udaipur",
    state: "Rajasthan",
    country: "India", 
  },
  {
    city: "Bhavnagar",
    state: "Gujarat",
    country: "India", 
  },
  {
    city: "Dehradun",
    state: "Uttarakhand",
    country: "India", 
  },
  {
    city: "Asansol",
    state: "West Bengal",
    country: "India", 
  },
  {
    city: "Nanded-Waghala",
    state: "Maharashtra",
    country: "India", 
  },
  {
    city: "Ajmer",
    state: "Rajasthan",
    country: "India", 
  },
  {
    city: "Jamnagar",
    state: "Gujarat",
    country: "India", 
  },
  {
    city: "Ujjain",
    state: "Madhya Pradesh",
    country: "India", 
  },
  {
    city: "Sangli",
    state: "Maharashtra",
    country: "India", 
  },
  {
    city: "Loni",
    state: "Uttar Pradesh",
    country: "India", 
  },
  {
    city: "Jhansi",
    state: "Uttar Pradesh",
    country: "India", 
  },
  {
    city: "Pondicherry",
    state: "Puducherry",
    country: "India", 
  },
  {
    city: "Nellore",
    state: "Andhra Pradesh",
    country: "India", 
  },
  {
    city: "Jammu",
    state: "Jammu & Kashmir",
    country: "India", 
  },
  {
    city: "Belagavi",
    state: "Karnataka",
    country: "India", 
  },
  {
    city: "Raurkela",
    state: "Odisha",
    country: "India", 
  },
  {
    city: "Mangaluru",
    state: "Karnataka",
    country: "India", 
  },
  {
    city: "Tirunelveli",
    state: "Tamil Nadu",
    country: "India", 
  },
  {
    city: "Malegaon",
    state: "Maharashtra",
    country: "India", 
  },
  {
    city: "Gaya",
    state: "Bihar",
    country: "India", 
  },
  {
    city: "Tiruppur",
    state: "Tamil Nadu",
    country: "India", 
  },
  {
    city: "Davanagere",
    state: "Karnataka",
    country: "India", 
  },
  {
    city: "Kozhikode",
    state: "Kerala",
    country: "India", 
  },
  {
    city: "Akola",
    state: "Maharashtra",
    country: "India", 
  },
  {
    city: "Kurnool",
    state: "Andhra Pradesh",
    country: "India", 
  },
  {
    city: "Bokaro Steel City",
    state: "Jharkhand",
    country: "India", 
  },
  {
    city: "Rajahmundry",
    state: "Andhra Pradesh",
    country: "India", 
  },
  {
    city: "Ballari",
    state: "Karnataka",
    country: "India", 
  },
  {
    city: "Agartala",
    state: "Tripura",
    country: "India", 
  },
  {
    city: "Bhagalpur",
    state: "Bihar",
    country: "India", 
  },
  {
    city: "Latur",
    state: "Maharashtra",
    country: "India", 
  },
  {
    city: "Dhule",
    state: "Maharashtra",
    country: "India", 
  },
  {
    city: "Korba",
    state: "Chhattisgarh",
    country: "India", 
  },
  {
    city: "Bhilwara",
    state: "Rajasthan",
    country: "India", 
  },
  {
    city: "Brahmapur",
    state: "Odisha",
    country: "India", 
  },
  {
    city: "Mysore",
    state: "Karnataka",
    country: "India", 
  },
  {
    city: "Muzaffarpur",
    state: "Bihar",
    country: "India", 
  },
  {
    city: "Ahmednagar",
    state: "Maharashtra",
    country: "India", 
  },
  {
    city: "Kollam",
    state: "Kerala",
    country: "India", 
  },
  {
    city: "Raghunathganj",
    state: "West Bengal",
    country: "India", 
  },
  {
    city: "Bilaspur",
    state: "Chhattisgarh",
    country: "India", 
  },
  {
    city: "Shahjahanpur",
    state: "Uttar Pradesh",
    country: "India", 
  },
  {
    city: "Thrissur",
    state: "Kerala",
    country: "India", 
  },
  {
    city: "Alwar",
    state: "Rajasthan",
    country: "India", 
  },
  {
    city: "Kakinada",
    state: "Andhra Pradesh",
    country: "India", 
  },
  {
    city: "Nizamabad",
    state: "Telangana",
    country: "India", 
  },
  {
    city: "Sagar",
    state: "Madhya Pradesh",
    country: "India", 
  },
  {
    city: "Tumkur",
    state: "Karnataka",
    country: "India", 
  },
  {
    city: "Hisar",
    state: "Haryana",
    country: "India", 
  },
  {
    city: "Rohtak",
    state: "Haryana",
    country: "India", 
  },
  {
    city: "Panipat",
    state: "Haryana",
    country: "India", 
  },
  {
    city: "Darbhanga",
    state: "Bihar",
    country: "India", 
  },
  {
    city: "Kharagpur",
    state: "West Bengal",
    country: "India", 
  },
  {
    city: "Aizawl",
    state: "Mizoram",
    country: "India", 
  },
  {
    city: "Ichalkaranji",
    state: "Maharashtra",
    country: "India", 
  },
  {
    city: "Tirupati",
    state: "Andhra Pradesh",
    country: "India", 
  },
  {
    city: "Karnal",
    state: "Haryana",
    country: "India", 
  },
  {
    city: "Bathinda",
    state: "Punjab",
    country: "India", 
  },
  {
    city: "Rampur",
    state: "Uttar Pradesh",
    country: "India", 
  },
  {
    city: "Shivamogga",
    state: "Karnataka",
    country: "India", 
  },
  {
    city: "Ratlam",
    state: "Madhya Pradesh",
    country: "India", 
  },
  {
    city: "Modinagar",
    state: "Uttar Pradesh",
    country: "India", 
  },
  {
    city: "Durg",
    state: "Chhattisgarh",
    country: "India", 
  },
  {
    city: "Shillong",
    state: "Meghalaya",
    country: "India", 
  },
  {
    city: "Imphal",
    state: "Manipur",
    country: "India", 
  },
  {
    city: "Hapur",
    state: "Uttar Pradesh",
    country: "India", 
  },
  {
    city: "Ranipet",
    state: "Tamil Nadu",
    country: "India", 
  },
  {
    city: "Anantapur",
    state: "Andhra Pradesh",
    country: "India", 
  },
  {
    city: "Arrah",
    state: "Bihar",
    country: "India", 
  },
  {
    city: "Karimnagar",
    state: "Telangana",
    country: "India", 
  },
  {
    city: "Parbhani",
    state: "Maharashtra",
    country: "India", 
  },
  {
    city: "Etawah",
    state: "Uttar Pradesh",
    country: "India", 
  },
  {
    city: "Bharatpur",
    state: "Rajasthan",
    country: "India", 
  },
  {
    city: "Begusarai",
    state: "Bihar",
    country: "India", 
  },
  {
    city: "New Delhi",
    state: "Delhi",
    country: "India", 
  },
  {
    city: "Chhapra",
    state: "Bihar",
    country: "India", 
  },
  {
    city: "Kadapa",
    state: "Andhra Pradesh",
    country: "India", 
  },
  {
    city: "Ramagundam",
    state: "Telangana",
    country: "India", 
  },
  {
    city: "Pali",
    state: "Rajasthan",
    country: "India", 
  },
  {
    city: "Satna",
    state: "Madhya Pradesh",
    country: "India", 
  },
  {
    city: "Vizianagaram",
    state: "Andhra Pradesh",
    country: "India", 
  },
  {
    city: "Katihar",
    state: "Bihar",
    country: "India", 
  },
  {
    city: "Hardwar",
    state: "Uttarakhand",
    country: "India", 
  },
  {
    city: "Sonipat",
    state: "Haryana",
    country: "India", 
  },
  {
    city: "Nagercoil",
    state: "Tamil Nadu",
    country: "India", 
  },
  {
    city: "Thanjavur",
    state: "Tamil Nadu",
    country: "India", 
  },
  {
    city: "Murwara (Katni)",
    state: "Madhya Pradesh",
    country: "India", 
  },
  {
    city: "Naihati",
    state: "West Bengal",
    country: "India", 
  },
  {
    city: "Sambhal",
    state: "Uttar Pradesh",
    country: "India", 
  },
  {
    city: "Nadiad",
    state: "Gujarat",
    country: "India", 
  },
  {
    city: "Yamunanagar",
    state: "Haryana",
    country: "India", 
  },
  {
    city: "English Bazar",
    state: "West Bengal",
    country: "India", 
  },
  {
    city: "Eluru",
    state: "Andhra Pradesh",
    country: "India", 
  },
  {
    city: "Munger",
    state: "Bihar",
    country: "India", 
  },
  {
    city: "Panchkula",
    state: "Haryana",
    country: "India", 
  },
  {
    city: "Raayachuru",
    state: "Karnataka",
    country: "India", 
  },
  {
    city: "Panvel",
    state: "Maharashtra",
    country: "India", 
  },
  {
    city: "Deoghar",
    state: "Jharkhand",
    country: "India", 
  },
  {
    city: "Ongole",
    state: "Andhra Pradesh",
    country: "India", 
  },
  {
    city: "Nandyal",
    state: "Andhra Pradesh",
    country: "India", 
  },
  {
    city: "Morena",
    state: "Madhya Pradesh",
    country: "India", 
  },
  {
    city: "Bhiwani",
    state: "Haryana",
    country: "India", 
  },
  {
    city: "Porbandar",
    state: "Gujarat",
    country: "India", 
  },
  {
    city: "Palakkad",
    state: "Kerala",
    country: "India", 
  },
  {
    city: "Anand",
    state: "Gujarat",
    country: "India", 
  },
  {
    city: "Purnia",
    state: "Bihar",
    country: "India", 
  },
  {
    city: "Baharampur",
    state: "West Bengal",
    country: "India", 
  },
  {
    city: "Barmer",
    state: "Rajasthan",
    country: "India", 
  },
  {
    city: "Morvi",
    state: "Gujarat",
    country: "India", 
  },
  {
    city: "Orai",
    state: "Uttar Pradesh",
    country: "India", 
  },
  {
    city: "Bahraich",
    state: "Uttar Pradesh",
    country: "India", 
  },
  {
    city: "Sikar",
    state: "Rajasthan",
    country: "India", 
  },
  {
    city: "Vellore",
    state: "Tamil Nadu",
    country: "India", 
  },
  {
    city: "Singrauli",
    state: "Madhya Pradesh",
    country: "India", 
  },
  {
    city: "Khammam",
    state: "Telangana",
    country: "India", 
  },
  {
    city: "Mahesana",
    state: "Gujarat",
    country: "India", 
  },
  {
    city: "Silchar",
    state: "Assam",
    country: "India", 
  },
  {
    city: "Sambalpur",
    state: "Odisha",
    country: "India", 
  },
  {
    city: "Rewa",
    state: "Madhya Pradesh",
    country: "India", 
  },
  {
    city: "Unnao",
    state: "Uttar Pradesh",
    country: "India", 
  },
  {
    city: "Hugli-Chinsurah",
    state: "West Bengal",
    country: "India", 
  },
  {
    city: "Raiganj",
    state: "West Bengal",
    country: "India", 
  },
  {
    city: "Phusro",
    state: "Jharkhand",
    country: "India", 
  },
  {
    city: "Adityapur",
    state: "Jharkhand",
    country: "India", 
  },
  {
    city: "Alappuzha",
    state: "Kerala",
    country: "India", 
  },
  {
    city: "Bahadurgarh",
    state: "Haryana",
    country: "India", 
  },
  {
    city: "Machilipatnam",
    state: "Andhra Pradesh",
    country: "India", 
  },
  {
    city: "Rae Bareli",
    state: "Uttar Pradesh",
    country: "India", 
  },
  {
    city: "Jalpaiguri",
    state: "West Bengal",
    country: "India", 
  },
  {
    city: "Bharuch",
    state: "Gujarat",
    country: "India", 
  },
  {
    city: "Pathankot",
    state: "Punjab",
    country: "India", 
  },
  {
    city: "Hoshiarpur",
    state: "Punjab",
    country: "India", 
  },
  {
    city: "Baramula",
    state: "Jammu & Kashmir",
    country: "India", 
  },
  {
    city: "Adoni",
    state: "Andhra Pradesh",
    country: "India", 
  },
  {
    city: "Jind",
    state: "Haryana",
    country: "India", 
  },
  {
    city: "Tonk",
    state: "Rajasthan",
    country: "India", 
  },
  {
    city: "Tenali",
    state: "Andhra Pradesh",
    country: "India", 
  },
  {
    city: "Kancheepuram",
    state: "Tamil Nadu",
    country: "India", 
  },
  {
    city: "Vapi",
    state: "Gujarat",
    country: "India", 
  },
  {
    city: "Sirsa",
    state: "Haryana",
    country: "India", 
  },
  {
    city: "Navsari",
    state: "Gujarat",
    country: "India", 
  },
  {
    city: "Mahbubnagar",
    state: "Telangana",
    country: "India", 
  },
  {
    city: "Puri",
    state: "Odisha",
    country: "India", 
  },
  {
    city: "Robertson Pet",
    state: "Karnataka",
    country: "India", 
  },
  {
    city: "Erode",
    state: "Tamil Nadu",
    country: "India", 
  },
  {
    city: "Batala",
    state: "Punjab",
    country: "India", 
  },
  {
    city: "Haldwani-cum-Kathgodam",
    state: "Uttarakhand",
    country: "India", 
  },
  {
    city: "Vidisha",
    state: "Madhya Pradesh",
    country: "India", 
  },
  {
    city: "Saharsa",
    state: "Bihar",
    country: "India", 
  },
  {
    city: "Thanesar",
    state: "Haryana",
    country: "India", 
  },
  {
    city: "Chittoor",
    state: "Andhra Pradesh",
    country: "India", 
  },
  {
    city: "Veraval",
    state: "Gujarat",
    country: "India", 
  },
  {
    city: "Lakhimpur",
    state: "Uttar Pradesh",
    country: "India", 
  },
  {
    city: "Sitapur",
    state: "Uttar Pradesh",
    country: "India", 
  },
  {
    city: "Hindupur",
    state: "Andhra Pradesh",
    country: "India", 
  },
  {
    city: "Santipur",
    state: "West Bengal",
    country: "India", 
  },
  {
    city: "Balurghat",
    state: "West Bengal",
    country: "India", 
  },
  {
    city: "Ganjbasoda",
    state: "Madhya Pradesh",
    country: "India", 
  },
  {
    city: "Moga",
    state: "Punjab",
    country: "India", 
  },
  {
    city: "Proddatur",
    state: "Andhra Pradesh",
    country: "India", 
  },
  {
    city: "Srinagar",
    state: "Uttarakhand",
    country: "India", 
  },
  {
    city: "Medinipur",
    state: "West Bengal",
    country: "India", 
  },
  {
    city: "Habra",
    state: "West Bengal",
    country: "India", 
  },
  {
    city: "Sasaram",
    state: "Bihar",
    country: "India", 
  },
  {
    city: "Hajipur",
    state: "Bihar",
    country: "India", 
  },
  {
    city: "Bhuj",
    state: "Gujarat",
    country: "India", 
  },
  {
    city: "Shivpuri",
    state: "Madhya Pradesh",
    country: "India", 
  },
  {
    city: "Ranaghat",
    state: "West Bengal",
    country: "India", 
  },
  {
    city: "Shimla",
    state: "Himachal Pradesh",
    country: "India", 
  },
  {
    city: "Tiruvannamalai",
    state: "Tamil Nadu",
    country: "India", 
  },
  {
    city: "Kaithal",
    state: "Haryana",
    country: "India", 
  },
  {
    city: "Rajnandgaon",
    state: "Chhattisgarh",
    country: "India", 
  },
  {
    city: "Godhra",
    state: "Gujarat",
    country: "India", 
  },
  {
    city: "Hazaribag",
    state: "Jharkhand",
    country: "India", 
  },
  {
    city: "Bhimavaram",
    state: "Andhra Pradesh",
    country: "India", 
  },
  {
    city: "Mandsaur",
    state: "Madhya Pradesh",
    country: "India", 
  },
  {
    city: "Dibrugarh",
    state: "Assam",
    country: "India", 
  },
  {
    city: "Kolar",
    state: "Karnataka",
    country: "India", 
  },
  {
    city: "Bankura",
    state: "West Bengal",
    country: "India", 
  },
  {
    city: "Mandya",
    state: "Karnataka",
    country: "India", 
  },
  {
    city: "Dehri-on-Sone",
    state: "Bihar",
    country: "India", 
  },
  {
    city: "Madanapalle",
    state: "Andhra Pradesh",
    country: "India", 
  },
  {
    city: "Malerkotla",
    state: "Punjab",
    country: "India", 
  },
  {
    city: "Lalitpur",
    state: "Uttar Pradesh",
    country: "India", 
  },
  {
    city: "Bettiah",
    state: "Bihar",
    country: "India", 
  },
  {
    city: "Pollachi",
    state: "Tamil Nadu",
    country: "India", 
  },
  {
    city: "Khanna",
    state: "Punjab",
    country: "India", 
  },
  {
    city: "Neemuch",
    state: "Madhya Pradesh",
    country: "India", 
  },
  {
    city: "Palwal",
    state: "Haryana",
    country: "India", 
  },
  {
    city: "Palanpur",
    state: "Gujarat",
    country: "India", 
  },
  {
    city: "Guntakal",
    state: "Andhra Pradesh",
    country: "India", 
  },
  {
    city: "Nabadwip",
    state: "West Bengal",
    country: "India", 
  },
  {
    city: "Udupi",
    state: "Karnataka",
    country: "India", 
  },
  {
    city: "Jagdalpur",
    state: "Chhattisgarh",
    country: "India", 
  },
  {
    city: "Motihari",
    state: "Bihar",
    country: "India", 
  },
  {
    city: "Pilibhit",
    state: "Uttar Pradesh",
    country: "India", 
  },
  {
    city: "Dimapur",
    state: "Nagaland",
    country: "India", 
  },
  {
    city: "Mohali",
    state: "Punjab",
    country: "India", 
  },
  {
    city: "Sadulpur",
    state: "Rajasthan",
    country: "India", 
  },
  {
    city: "Rajapalayam",
    state: "Tamil Nadu",
    country: "India", 
  },
  {
    city: "Dharmavaram",
    state: "Andhra Pradesh",
    country: "India", 
  },
  {
    city: "Kashipur",
    state: "Uttarakhand",
    country: "India", 
  },
  {
    city: "Sivakasi",
    state: "Tamil Nadu",
    country: "India", 
  },
  {
    city: "Darjiling",
    state: "West Bengal",
    country: "India", 
  },
  {
    city: "Chikkamagaluru",
    state: "Karnataka",
    country: "India", 
  },
  {
    city: "Gudivada",
    state: "Andhra Pradesh",
    country: "India", 
  },
  {
    city: "Baleshwar Town",
    state: "Odisha",
    country: "India", 
  },
  {
    city: "Mancherial",
    state: "Telangana",
    country: "India", 
  },
  {
    city: "Srikakulam",
    state: "Andhra Pradesh",
    country: "India", 
  },
  {
    city: "Adilabad",
    state: "Telangana",
    country: "India", 
  },
  {
    city: "Yavatmal",
    state: "Maharashtra",
    country: "India", 
  },
  {
    city: "Barnala",
    state: "Punjab",
    country: "India", 
  },
  {
    city: "Nagaon",
    state: "Assam",
    country: "India", 
  },
  {
    city: "Narasaraopet",
    state: "Andhra Pradesh",
    country: "India", 
  },
  {
    city: "Raigarh",
    state: "Chhattisgarh",
    country: "India", 
  },
  {
    city: "Roorkee",
    state: "Uttarakhand",
    country: "India", 
  },
  {
    city: "Valsad",
    state: "Gujarat",
    country: "India", 
  },
  {
    city: "Ambikapur",
    state: "Chhattisgarh",
    country: "India", 
  },
  {
    city: "Giridih",
    state: "Jharkhand",
    country: "India", 
  },
  {
    city: "Chandausi",
    state: "Uttar Pradesh",
    country: "India", 
  },
  {
    city: "Purulia",
    state: "West Bengal",
    country: "India", 
  },
  {
    city: "Patan",
    state: "Gujarat",
    country: "India", 
  },
  {
    city: "Bagaha",
    state: "Bihar",
    country: "India", 
  },
  {
    city: "Hardoi ",
    state: "Uttar Pradesh",
    country: "India", 
  },
  {
    city: "Achalpur",
    state: "Maharashtra",
    country: "India", 
  },
  {
    city: "Osmanabad",
    state: "Maharashtra",
    country: "India", 
  },
  {
    city: "Deesa",
    state: "Gujarat",
    country: "India", 
  },
  {
    city: "Nandurbar",
    state: "Maharashtra",
    country: "India", 
  },
  {
    city: "Azamgarh",
    state: "Uttar Pradesh",
    country: "India", 
  },
  {
    city: "Ramgarh",
    state: "Jharkhand",
    country: "India", 
  },
  {
    city: "Firozpur",
    state: "Punjab",
    country: "India", 
  },
  {
    city: "Baripada Town",
    state: "Odisha",
    country: "India", 
  },
  {
    city: "Karwar",
    state: "Karnataka",
    country: "India", 
  },
  {
    city: "Siwan",
    state: "Bihar",
    country: "India", 
  },
  {
    city: "Rajampet",
    state: "Andhra Pradesh",
    country: "India", 
  },
  {
    city: "Pudukkottai",
    state: "Tamil Nadu",
    country: "India", 
  },
  {
    city: "Anantnag",
    state: "Jammu & Kashmir",
    country: "India", 
  },
  {
    city: "Tadpatri",
    state: "Andhra Pradesh",
    country: "India", 
  },
  {
    city: "Satara",
    state: "Maharashtra",
    country: "India", 
  },
  {
    city: "Bhadrak",
    state: "Odisha",
    country: "India", 
  },
  {
    city: "Kishanganj",
    state: "Bihar",
    country: "India", 
  },
  {
    city: "Suryapet",
    state: "Telangana",
    country: "India", 
  },
  {
    city: "Wardha",
    state: "Maharashtra",
    country: "India", 
  },
  {
    city: "Ranebennuru",
    state: "Karnataka",
    country: "India", 
  },
  {
    city: "Amreli",
    state: "Gujarat",
    country: "India", 
  },
  {
    city: "Neyveli (TS)",
    state: "Tamil Nadu",
    country: "India", 
  },
  {
    city: "Jamalpur",
    state: "Bihar",
    country: "India", 
  },
  {
    city: "Marmagao",
    state: "Goa",
    country: "India", 
  },
  {
    city: "Udgir",
    state: "Maharashtra",
    country: "India", 
  },
  {
    city: "Tadepalligudem",
    state: "Andhra Pradesh",
    country: "India", 
  },
  {
    city: "Nagapattinam",
    state: "Tamil Nadu",
    country: "India", 
  },
  {
    city: "Buxar",
    state: "Bihar",
    country: "India", 
  },
  {
    city: "Aurangabad",
    state: "Maharashtra",
    country: "India", 
  },
  {
    city: "Jehanabad",
    state: "Bihar",
    country: "India", 
  },
  {
    city: "Phagwara",
    state: "Punjab",
    country: "India", 
  },
  {
    city: "Khair",
    state: "Uttar Pradesh",
    country: "India", 
  },
  {
    city: "Sawai Madhopur",
    state: "Rajasthan",
    country: "India", 
  },
  {
    city: "Kapurthala",
    state: "Punjab",
    country: "India", 
  },
  {
    city: "Chilakaluripet",
    state: "Andhra Pradesh",
    country: "India", 
  },
  {
    city: "Aurangabad",
    state: "Bihar",
    country: "India", 
  },
  {
    city: "Malappuram",
    state: "Kerala",
    country: "India", 
  },
  {
    city: "Rewari",
    state: "Haryana",
    country: "India", 
  },
  {
    city: "Nagaur",
    state: "Rajasthan",
    country: "India", 
  },
  {
    city: "Sultanpur",
    state: "Uttar Pradesh",
    country: "India", 
  },
  {
    city: "Nagda",
    state: "Madhya Pradesh",
    country: "India", 
  },
  {
    city: "Port Blair",
    state: "Andaman and Nicobar Islands",
    country: "India", 
  },
  {
    city: "Lakhisarai",
    state: "Bihar",
    country: "India", 
  },
  {
    city: "Panaji",
    state: "Goa",
    country: "India", 
  },
  {
    city: "Tinsukia",
    state: "Assam",
    country: "India", 
  },
  {
    city: "Itarsi",
    state: "Madhya Pradesh",
    country: "India", 
  },
  {
    city: "Kohima",
    state: "Nagaland",
    country: "India", 
  },
  {
    city: "Balangir",
    state: "Odisha",
    country: "India", 
  },
  {
    city: "Nawada",
    state: "Bihar",
    country: "India", 
  },
  {
    city: "Jharsuguda",
    state: "Odisha",
    country: "India", 
  },
  {
    city: "Jagtial",
    state: "Telangana",
    country: "India", 
  },
  {
    city: "Viluppuram",
    state: "Tamil Nadu",
    country: "India", 
  },
  {
    city: "Amalner",
    state: "Maharashtra",
    country: "India", 
  },
  {
    city: "Zirakpur",
    state: "Punjab",
    country: "India", 
  },
  {
    city: "Tanda",
    state: "Uttar Pradesh",
    country: "India", 
  },
  {
    city: "Tiruchengode",
    state: "Tamil Nadu",
    country: "India", 
  },
  {
    city: "Nagina",
    state: "Uttar Pradesh",
    country: "India", 
  },
  {
    city: "Yemmiganur",
    state: "Andhra Pradesh",
    country: "India", 
  },
  {
    city: "Vaniyambadi",
    state: "Tamil Nadu",
    country: "India", 
  },
  {
    city: "Sarni",
    state: "Madhya Pradesh",
    country: "India", 
  },
  {
    city: "Theni Allinagaram",
    state: "Tamil Nadu",
    country: "India", 
  },
  {
    city: "Margao",
    state: "Goa",
    country: "India", 
  },
  {
    city: "Akot",
    state: "Maharashtra",
    country: "India", 
  },
  {
    city: "Sehore",
    state: "Madhya Pradesh",
    country: "India", 
  },
  {
    city: "Mhow Cantonment",
    state: "Madhya Pradesh",
    country: "India", 
  },
  {
    city: "Kot Kapura",
    state: "Punjab",
    country: "India", 
  },
  {
    city: "Makrana",
    state: "Rajasthan",
    country: "India", 
  },
  {
    city: "Pandharpur",
    state: "Maharashtra",
    country: "India", 
  },
  {
    city: "Miryalaguda",
    state: "Telangana",
    country: "India", 
  },
  {
    city: "Shamli",
    state: "Uttar Pradesh",
    country: "India", 
  },
  {
    city: "Seoni",
    state: "Madhya Pradesh",
    country: "India", 
  },
  {
    city: "Ranibennur",
    state: "Karnataka",
    country: "India", 
  },
  {
    city: "Kadiri",
    state: "Andhra Pradesh",
    country: "India", 
  },
  {
    city: "Shrirampur",
    state: "Maharashtra",
    country: "India", 
  },
  {
    city: "Rudrapur",
    state: "Uttarakhand",
    country: "India", 
  },
  {
    city: "Parli",
    state: "Maharashtra",
    country: "India", 
  },
  {
    city: "Najibabad",
    state: "Uttar Pradesh",
    country: "India", 
  },
  {
    city: "Nirmal",
    state: "Telangana",
    country: "India", 
  },
  {
    city: "Udhagamandalam",
    state: "Tamil Nadu",
    country: "India", 
  },
  {
    city: "Shikohabad",
    state: "Uttar Pradesh",
    country: "India", 
  },
  {
    city: "Jhumri Tilaiya",
    state: "Jharkhand",
    country: "India", 
  },
  {
    city: "Aruppukkottai",
    state: "Tamil Nadu",
    country: "India", 
  },
  {
    city: "Ponnani",
    state: "Kerala",
    country: "India", 
  },
  {
    city: "Jamui",
    state: "Bihar",
    country: "India", 
  },
  {
    city: "Sitamarhi",
    state: "Bihar",
    country: "India", 
  },
  {
    city: "Chirala",
    state: "Andhra Pradesh",
    country: "India", 
  },
  {
    city: "Anjar",
    state: "Gujarat",
    country: "India", 
  },
  {
    city: "Karaikal",
    state: "Puducherry",
    country: "India", 
  },
  {
    city: "Hansi",
    state: "Haryana",
    country: "India", 
  },
  {
    city: "Anakapalle",
    state: "Andhra Pradesh",
    country: "India", 
  },
  {
    city: "Mahasamund",
    state: "Chhattisgarh",
    country: "India", 
  },
  {
    city: "Faridkot",
    state: "Punjab",
    country: "India", 
  },
  {
    city: "Saunda",
    state: "Jharkhand",
    country: "India", 
  },
  {
    city: "Dhoraji",
    state: "Gujarat",
    country: "India", 
  },
  {
    city: "Paramakudi",
    state: "Tamil Nadu",
    country: "India", 
  },
  {
    city: "Balaghat",
    state: "Madhya Pradesh",
    country: "India", 
  },
  {
    city: "Sujangarh",
    state: "Rajasthan",
    country: "India", 
  },
  {
    city: "Khambhat",
    state: "Gujarat",
    country: "India", 
  },
  {
    city: "Muktsar",
    state: "Punjab",
    country: "India", 
  },
  {
    city: "Rajpura",
    state: "Punjab",
    country: "India", 
  },
  {
    city: "Kavali",
    state: "Andhra Pradesh",
    country: "India", 
  },
  {
    city: "Dhamtari",
    state: "Chhattisgarh",
    country: "India", 
  },
  {
    city: "Ashok Nagar",
    state: "Madhya Pradesh",
    country: "India", 
  },
  {
    city: "Sardarshahar",
    state: "Rajasthan",
    country: "India", 
  },
  {
    city: "Mahuva",
    state: "Gujarat",
    country: "India", 
  },
  {
    city: "Bargarh",
    state: "Odisha",
    country: "India", 
  },
  {
    city: "Kamareddy",
    state: "Telangana",
    country: "India", 
  },
  {
    city: "Sahibganj",
    state: "Jharkhand",
    country: "India", 
  },
  {
    city: "Kothagudem",
    state: "Telangana",
    country: "India", 
  },
  {
    city: "Ramanagaram",
    state: "Karnataka",
    country: "India", 
  },
  {
    city: "Gokak",
    state: "Karnataka",
    country: "India", 
  },
  {
    city: "Tikamgarh",
    state: "Madhya Pradesh",
    country: "India", 
  },
  {
    city: "Araria",
    state: "Bihar",
    country: "India", 
  },
  {
    city: "Rishikesh",
    state: "Uttarakhand",
    country: "India", 
  },
  {
    city: "Shahdol",
    state: "Madhya Pradesh",
    country: "India", 
  },
  {
    city: "Medininagar (Daltonganj)",
    state: "Jharkhand",
    country: "India", 
  },
  {
    city: "Arakkonam",
    state: "Tamil Nadu",
    country: "India", 
  },
  {
    city: "Washim",
    state: "Maharashtra",
    country: "India", 
  },
  {
    city: "Sangrur",
    state: "Punjab",
    country: "India", 
  },
  {
    city: "Bodhan",
    state: "Telangana",
    country: "India", 
  },
  {
    city: "Fazilka",
    state: "Punjab",
    country: "India", 
  },
  {
    city: "Palacole",
    state: "Andhra Pradesh",
    country: "India", 
  },
  {
    city: "Keshod",
    state: "Gujarat",
    country: "India", 
  },
  {
    city: "Sullurpeta",
    state: "Andhra Pradesh",
    country: "India", 
  },
  {
    city: "Wadhwan",
    state: "Gujarat",
    country: "India", 
  },
  {
    city: "Gurdaspur",
    state: "Punjab",
    country: "India", 
  },
  {
    city: "Vatakara",
    state: "Kerala",
    country: "India", 
  },
  {
    city: "Tura",
    state: "Meghalaya",
    country: "India", 
  },
  {
    city: "Narnaul",
    state: "Haryana",
    country: "India", 
  },
  {
    city: "Kharar",
    state: "Punjab",
    country: "India", 
  },
  {
    city: "Yadgir",
    state: "Karnataka",
    country: "India", 
  },
  {
    city: "Ambejogai",
    state: "Maharashtra",
    country: "India", 
  },
  {
    city: "Ankleshwar",
    state: "Gujarat",
    country: "India", 
  },
  {
    city: "Savarkundla",
    state: "Gujarat",
    country: "India", 
  },
  {
    city: "Paradip",
    state: "Odisha",
    country: "India", 
  },
  {
    city: "Virudhachalam",
    state: "Tamil Nadu",
    country: "India", 
  },
  {
    city: "Kanhangad",
    state: "Kerala",
    country: "India", 
  },
  {
    city: "Kadi",
    state: "Gujarat",
    country: "India", 
  },
  {
    city: "Srivilliputhur",
    state: "Tamil Nadu",
    country: "India", 
  },
  {
    city: "Gobindgarh",
    state: "Punjab",
    country: "India", 
  },
  {
    city: "Tindivanam",
    state: "Tamil Nadu",
    country: "India", 
  },
  {
    city: "Mansa",
    state: "Punjab",
    country: "India", 
  },
  {
    city: "Taliparamba",
    state: "Kerala",
    country: "India", 
  },
  {
    city: "Manmad",
    state: "Maharashtra",
    country: "India", 
  },
  {
    city: "Tanuku",
    state: "Andhra Pradesh",
    country: "India", 
  },
  {
    city: "Rayachoti",
    state: "Andhra Pradesh",
    country: "India", 
  },
  {
    city: "Virudhunagar",
    state: "Tamil Nadu",
    country: "India", 
  },
  {
    city: "Koyilandy",
    state: "Kerala",
    country: "India", 
  },
  {
    city: "Jorhat",
    state: "Assam",
    country: "India", 
  },
  {
    city: "Karur",
    state: "Tamil Nadu",
    country: "India", 
  },
  {
    city: "Valparai",
    state: "Tamil Nadu",
    country: "India", 
  },
  {
    city: "Srikalahasti",
    state: "Andhra Pradesh",
    country: "India", 
  },
  {
    city: "Neyyattinkara",
    state: "Kerala",
    country: "India", 
  },
  {
    city: "Bapatla",
    state: "Andhra Pradesh",
    country: "India", 
  },
  {
    city: "Fatehabad",
    state: "Haryana",
    country: "India", 
  },
  {
    city: "Malout",
    state: "Punjab",
    country: "India", 
  },
  {
    city: "Sankarankovil",
    state: "Tamil Nadu",
    country: "India", 
  },
  {
    city: "Tenkasi",
    state: "Tamil Nadu",
    country: "India", 
  },
  {
    city: "Ratnagiri",
    state: "Maharashtra",
    country: "India", 
  },
  {
    city: "Rabkavi Banhatti",
    state: "Karnataka",
    country: "India", 
  },
  {
    city: "Sikandrabad",
    state: "Uttar Pradesh",
    country: "India", 
  },
  {
    city: "Chaibasa",
    state: "Jharkhand",
    country: "India", 
  },
  {
    city: "Chirmiri",
    state: "Chhattisgarh",
    country: "India", 
  },
  {
    city: "Palwancha",
    state: "Telangana",
    country: "India", 
  },
  {
    city: "Bhawanipatna",
    state: "Odisha",
    country: "India", 
  },
  {
    city: "Kayamkulam",
    state: "Kerala",
    country: "India", 
  },
  {
    city: "Pithampur",
    state: "Madhya Pradesh",
    country: "India", 
  },
  {
    city: "Nabha",
    state: "Punjab",
    country: "India", 
  },
  {
    city: "Shahabad, Hardoi",
    state: "Uttar Pradesh",
    country: "India", 
  },
  {
    city: "Dhenkanal",
    state: "Odisha",
    country: "India", 
  },
  {
    city: "Uran Islampur",
    state: "Maharashtra",
    country: "India", 
  },
  {
    city: "Gopalganj",
    state: "Bihar",
    country: "India", 
  },
  {
    city: "Bongaigaon City",
    state: "Assam",
    country: "India", 
  },
  {
    city: "Palani",
    state: "Tamil Nadu",
    country: "India", 
  },
  {
    city: "Pusad",
    state: "Maharashtra",
    country: "India", 
  },
  {
    city: "Sopore",
    state: "Jammu & Kashmir",
    country: "India", 
  },
  {
    city: "Pilkhuwa",
    state: "Uttar Pradesh",
    country: "India", 
  },
  {
    city: "Tarn Taran",
    state: "Punjab",
    country: "India", 
  },
  {
    city: "Renukoot",
    state: "Uttar Pradesh",
    country: "India", 
  },
  {
    city: "Mandamarri",
    state: "Telangana",
    country: "India", 
  },
  {
    city: "Shahabad",
    state: "Karnataka",
    country: "India", 
  },
  {
    city: "Barbil",
    state: "Odisha",
    country: "India", 
  },
  {
    city: "Koratla",
    state: "Telangana",
    country: "India", 
  },
  {
    city: "Madhubani",
    state: "Bihar",
    country: "India", 
  },
  {
    city: "Arambagh",
    state: "West Bengal",
    country: "India", 
  },
  {
    city: "Gohana",
    state: "Haryana",
    country: "India", 
  },
  {
    city: "Ladnu",
    state: "Rajasthan",
    country: "India", 
  },
  {
    city: "Pattukkottai",
    state: "Tamil Nadu",
    country: "India", 
  },
  {
    city: "Sirsi",
    state: "Karnataka",
    country: "India", 
  },
  {
    city: "Sircilla",
    state: "Telangana",
    country: "India", 
  },
  {
    city: "Tamluk",
    state: "West Bengal",
    country: "India", 
  },
  {
    city: "Jagraon",
    state: "Punjab",
    country: "India", 
  },
  {
    city: "AlipurdUrban Agglomerationr",
    state: "West Bengal",
    country: "India", 
  },
  {
    city: "Alirajpur",
    state: "Madhya Pradesh",
    country: "India", 
  },
  {
    city: "Tandur",
    state: "Telangana",
    country: "India", 
  },
  {
    city: "Naidupet",
    state: "Andhra Pradesh",
    country: "India", 
  },
  {
    city: "Tirupathur",
    state: "Tamil Nadu",
    country: "India", 
  },
  {
    city: "Tohana",
    state: "Haryana",
    country: "India", 
  },
  {
    city: "Ratangarh",
    state: "Rajasthan",
    country: "India", 
  },
  {
    city: "Dhubri",
    state: "Assam",
    country: "India", 
  },
  {
    city: "Masaurhi",
    state: "Bihar",
    country: "India", 
  },
  {
    city: "Visnagar",
    state: "Gujarat",
    country: "India", 
  },
  {
    city: "Vrindavan",
    state: "Uttar Pradesh",
    country: "India", 
  },
  {
    city: "Nokha",
    state: "Rajasthan",
    country: "India", 
  },
  {
    city: "Nagari",
    state: "Andhra Pradesh",
    country: "India", 
  },
  {
    city: "Narwana",
    state: "Haryana",
    country: "India", 
  },
  {
    city: "Ramanathapuram",
    state: "Tamil Nadu",
    country: "India", 
  },
  {
    city: "Ujhani",
    state: "Uttar Pradesh",
    country: "India", 
  },
  {
    city: "Samastipur",
    state: "Bihar",
    country: "India", 
  },
  {
    city: "Laharpur",
    state: "Uttar Pradesh",
    country: "India", 
  },
  {
    city: "Sangamner",
    state: "Maharashtra",
    country: "India", 
  },
  {
    city: "Nimbahera",
    state: "Rajasthan",
    country: "India", 
  },
  {
    city: "Siddipet",
    state: "Telangana",
    country: "India", 
  },
  {
    city: "Suri",
    state: "West Bengal",
    country: "India", 
  },
  {
    city: "Diphu",
    state: "Assam",
    country: "India", 
  },
  {
    city: "Jhargram",
    state: "West Bengal",
    country: "India", 
  },
  {
    city: "Shirpur-Warwade",
    state: "Maharashtra",
    country: "India", 
  },
  {
    city: "Tilhar",
    state: "Uttar Pradesh",
    country: "India", 
  },
  {
    city: "Sindhnur",
    state: "Karnataka",
    country: "India", 
  },
  {
    city: "Udumalaipettai",
    state: "Tamil Nadu",
    country: "India", 
  },
  {
    city: "Malkapur",
    state: "Maharashtra",
    country: "India", 
  },
  {
    city: "Wanaparthy",
    state: "Telangana",
    country: "India", 
  },
  {
    city: "Gudur",
    state: "Andhra Pradesh",
    country: "India", 
  },
  {
    city: "Kendujhar",
    state: "Odisha",
    country: "India", 
  },
  {
    city: "Mandla",
    state: "Madhya Pradesh",
    country: "India", 
  },
  {
    city: "Mandi",
    state: "Himachal Pradesh",
    country: "India", 
  },
  {
    city: "Nedumangad",
    state: "Kerala",
    country: "India", 
  },
  {
    city: "North Lakhimpur",
    state: "Assam",
    country: "India", 
  },
  {
    city: "Vinukonda",
    state: "Andhra Pradesh",
    country: "India", 
  },
  {
    city: "Tiptur",
    state: "Karnataka",
    country: "India", 
  },
  {
    city: "Gobichettipalayam",
    state: "Tamil Nadu",
    country: "India", 
  },
  {
    city: "Sunabeda",
    state: "Odisha",
    country: "India", 
  },
  {
    city: "Wani",
    state: "Maharashtra",
    country: "India", 
  },
  {
    city: "Upleta",
    state: "Gujarat",
    country: "India", 
  },
  {
    city: "Narasapuram",
    state: "Andhra Pradesh",
    country: "India", 
  },
  {
    city: "Nuzvid",
    state: "Andhra Pradesh",
    country: "India", 
  },
  {
    city: "Tezpur",
    state: "Assam",
    country: "India", 
  },
  {
    city: "Una",
    state: "Gujarat",
    country: "India", 
  },
  {
    city: "Markapur",
    state: "Andhra Pradesh",
    country: "India", 
  },
  {
    city: "Sheopur",
    state: "Madhya Pradesh",
    country: "India", 
  },
  {
    city: "Thiruvarur",
    state: "Tamil Nadu",
    country: "India", 
  },
  {
    city: "Sidhpur",
    state: "Gujarat",
    country: "India", 
  },
  {
    city: "Sahaswan",
    state: "Uttar Pradesh",
    country: "India", 
  },
  {
    city: "Suratgarh",
    state: "Rajasthan",
    country: "India", 
  },
  {
    city: "Shajapur",
    state: "Madhya Pradesh",
    country: "India", 
  },
  {
    city: "Rayagada",
    state: "Odisha",
    country: "India", 
  },
  {
    city: "Lonavla",
    state: "Maharashtra",
    country: "India", 
  },
  {
    city: "Ponnur",
    state: "Andhra Pradesh",
    country: "India", 
  },
  {
    city: "Kagaznagar",
    state: "Telangana",
    country: "India", 
  },
  {
    city: "Gadwal",
    state: "Telangana",
    country: "India", 
  },
  {
    city: "Bhatapara",
    state: "Chhattisgarh",
    country: "India", 
  },
  {
    city: "Kandukur",
    state: "Andhra Pradesh",
    country: "India", 
  },
  {
    city: "Sangareddy",
    state: "Telangana",
    country: "India", 
  },
  {
    city: "Unjha",
    state: "Gujarat",
    country: "India", 
  },
  {
    city: "Lunglei",
    state: "Mizoram",
    country: "India", 
  },
  {
    city: "Karimganj",
    state: "Assam",
    country: "India", 
  },
  {
    city: "Kannur",
    state: "Kerala",
    country: "India", 
  },
  {
    city: "Bobbili",
    state: "Andhra Pradesh",
    country: "India", 
  },
  {
    city: "Mokameh",
    state: "Bihar",
    country: "India", 
  },
  {
    city: "Talegaon Dabhade",
    state: "Maharashtra",
    country: "India", 
  },
  {
    city: "Anjangaon",
    state: "Maharashtra",
    country: "India", 
  },
  {
    city: "Mangrol",
    state: "Gujarat",
    country: "India", 
  },
  {
    city: "Sunam",
    state: "Punjab",
    country: "India", 
  },
  {
    city: "Gangarampur",
    state: "West Bengal",
    country: "India", 
  },
  {
    city: "Thiruvallur",
    state: "Tamil Nadu",
    country: "India", 
  },
  {
    city: "Tirur",
    state: "Kerala",
    country: "India", 
  },
  {
    city: "Rath",
    state: "Uttar Pradesh",
    country: "India", 
  },
  {
    city: "Jatani",
    state: "Odisha",
    country: "India", 
  },
  {
    city: "Viramgam",
    state: "Gujarat",
    country: "India", 
  },
  {
    city: "Rajsamand",
    state: "Rajasthan",
    country: "India", 
  },
  {
    city: "Yanam",
    state: "Puducherry",
    country: "India", 
  },
  {
    city: "Kottayam",
    state: "Kerala",
    country: "India", 
  },
  {
    city: "Panruti",
    state: "Tamil Nadu",
    country: "India", 
  },
  {
    city: "Dhuri",
    state: "Punjab",
    country: "India", 
  },
  {
    city: "Namakkal",
    state: "Tamil Nadu",
    country: "India", 
  },
  {
    city: "Kasaragod",
    state: "Kerala",
    country: "India", 
  },
  {
    city: "Modasa",
    state: "Gujarat",
    country: "India", 
  },
  {
    city: "Rayadurg",
    state: "Andhra Pradesh",
    country: "India", 
  },
  {
    city: "Supaul",
    state: "Bihar",
    country: "India", 
  },
  {
    city: "Kunnamkulam",
    state: "Kerala",
    country: "India", 
  },
  {
    city: "Umred",
    state: "Maharashtra",
    country: "India", 
  },
  {
    city: "Bellampalle",
    state: "Telangana",
    country: "India", 
  },
  {
    city: "Sibsagar",
    state: "Assam",
    country: "India", 
  },
  {
    city: "Mandi Dabwali",
    state: "Haryana",
    country: "India", 
  },
  {
    city: "Ottappalam",
    state: "Kerala",
    country: "India", 
  },
  {
    city: "Dumraon",
    state: "Bihar",
    country: "India", 
  },
  {
    city: "Samalkot",
    state: "Andhra Pradesh",
    country: "India", 
  },
  {
    city: "Jaggaiahpet",
    state: "Andhra Pradesh",
    country: "India", 
  },
  {
    city: "Goalpara",
    state: "Assam",
    country: "India", 
  },
  {
    city: "Tuni",
    state: "Andhra Pradesh",
    country: "India", 
  },
  {
    city: "Lachhmangarh",
    state: "Rajasthan",
    country: "India", 
  },
  {
    city: "Bhongir",
    state: "Telangana",
    country: "India", 
  },
  {
    city: "Amalapuram",
    state: "Andhra Pradesh",
    country: "India", 
  },
  {
    city: "Firozpur Cantt.",
    state: "Punjab",
    country: "India", 
  },
  {
    city: "Vikarabad",
    state: "Telangana",
    country: "India", 
  },
  {
    city: "Thiruvalla",
    state: "Kerala",
    country: "India", 
  },
  {
    city: "Sherkot",
    state: "Uttar Pradesh",
    country: "India", 
  },
  {
    city: "Palghar",
    state: "Maharashtra",
    country: "India", 
  },
  {
    city: "Shegaon",
    state: "Maharashtra",
    country: "India", 
  },
  {
    city: "Jangaon",
    state: "Telangana",
    country: "India", 
  },
  {
    city: "Bheemunipatnam",
    state: "Andhra Pradesh",
    country: "India", 
  },
  {
    city: "Panna",
    state: "Madhya Pradesh",
    country: "India", 
  },
  {
    city: "Thodupuzha",
    state: "Kerala",
    country: "India", 
  },
  {
    city: "KathUrban Agglomeration",
    state: "Jammu & Kashmir",
    country: "India", 
  },
  {
    city: "Palitana",
    state: "Gujarat",
    country: "India", 
  },
  {
    city: "Arwal",
    state: "Bihar",
    country: "India", 
  },
  {
    city: "Venkatagiri",
    state: "Andhra Pradesh",
    country: "India", 
  },
  {
    city: "Kalpi",
    state: "Uttar Pradesh",
    country: "India", 
  },
  {
    city: "Rajgarh (Churu)",
    state: "Rajasthan",
    country: "India", 
  },
  {
    city: "Sattenapalle",
    state: "Andhra Pradesh",
    country: "India", 
  },
  {
    city: "Arsikere",
    state: "Karnataka",
    country: "India", 
  },
  {
    city: "Ozar",
    state: "Maharashtra",
    country: "India", 
  },
  {
    city: "Thirumangalam",
    state: "Tamil Nadu",
    country: "India", 
  },
  {
    city: "Petlad",
    state: "Gujarat",
    country: "India", 
  },
  {
    city: "Nasirabad",
    state: "Rajasthan",
    country: "India", 
  },
  {
    city: "Phaltan",
    state: "Maharashtra",
    country: "India", 
  },
  {
    city: "Rampurhat",
    state: "West Bengal",
    country: "India", 
  },
  {
    city: "Nanjangud",
    state: "Karnataka",
    country: "India", 
  },
  {
    city: "Forbesganj",
    state: "Bihar",
    country: "India", 
  },
  {
    city: "Tundla",
    state: "Uttar Pradesh",
    country: "India", 
  },
  {
    city: "BhabUrban Agglomeration",
    state: "Bihar",
    country: "India", 
  },
  {
    city: "Sagara",
    state: "Karnataka",
    country: "India", 
  },
  {
    city: "Pithapuram",
    state: "Andhra Pradesh",
    country: "India", 
  },
  {
    city: "Sira",
    state: "Karnataka",
    country: "India", 
  },
  {
    city: "Bhadrachalam",
    state: "Telangana",
    country: "India", 
  },
  {
    city: "Charkhi Dadri",
    state: "Haryana",
    country: "India", 
  },
  {
    city: "Chatra",
    state: "Jharkhand",
    country: "India", 
  },
  {
    city: "Palasa Kasibugga",
    state: "Andhra Pradesh",
    country: "India", 
  },
  {
    city: "Nohar",
    state: "Rajasthan",
    country: "India", 
  },
  {
    city: "Yevla",
    state: "Maharashtra",
    country: "India", 
  },
  {
    city: "Sirhind Fatehgarh Sahib",
    state: "Punjab",
    country: "India", 
  },
  {
    city: "Bhainsa",
    state: "Telangana",
    country: "India", 
  },
  {
    city: "Parvathipuram",
    state: "Andhra Pradesh",
    country: "India", 
  },
  {
    city: "Shahade",
    state: "Maharashtra",
    country: "India", 
  },
  {
    city: "Chalakudy",
    state: "Kerala",
    country: "India", 
  },
  {
    city: "Narkatiaganj",
    state: "Bihar",
    country: "India", 
  },
  {
    city: "Kapadvanj",
    state: "Gujarat",
    country: "India", 
  },
  {
    city: "Macherla",
    state: "Andhra Pradesh",
    country: "India", 
  },
  {
    city: "Raghogarh-Vijaypur",
    state: "Madhya Pradesh",
    country: "India", 
  },
  {
    city: "Rupnagar",
    state: "Punjab",
    country: "India", 
  },
  {
    city: "Naugachhia",
    state: "Bihar",
    country: "India", 
  },
  {
    city: "Sendhwa",
    state: "Madhya Pradesh",
    country: "India", 
  },
  {
    city: "Byasanagar",
    state: "Odisha",
    country: "India", 
  },
  {
    city: "Sandila",
    state: "Uttar Pradesh",
    country: "India", 
  },
  {
    city: "Gooty",
    state: "Andhra Pradesh",
    country: "India", 
  },
  {
    city: "Salur",
    state: "Andhra Pradesh",
    country: "India", 
  },
  {
    city: "Nanpara",
    state: "Uttar Pradesh",
    country: "India", 
  },
  {
    city: "Sardhana",
    state: "Uttar Pradesh",
    country: "India", 
  },
  {
    city: "Vita",
    state: "Maharashtra",
    country: "India", 
  },
  {
    city: "Gumia",
    state: "Jharkhand",
    country: "India", 
  },
  {
    city: "Puttur",
    state: "Karnataka",
    country: "India", 
  },
  {
    city: "Jalandhar Cantt.",
    state: "Punjab",
    country: "India", 
  },
  {
    city: "Nehtaur",
    state: "Uttar Pradesh",
    country: "India", 
  },
  {
    city: "Changanassery",
    state: "Kerala",
    country: "India", 
  },
  {
    city: "Mandapeta",
    state: "Andhra Pradesh",
    country: "India", 
  },
  {
    city: "Dumka",
    state: "Jharkhand",
    country: "India", 
  },
  {
    city: "Seohara",
    state: "Uttar Pradesh",
    country: "India", 
  },
  {
    city: "Umarkhed",
    state: "Maharashtra",
    country: "India", 
  },
  {
    city: "Madhupur",
    state: "Jharkhand",
    country: "India", 
  },
  {
    city: "Vikramasingapuram",
    state: "Tamil Nadu",
    country: "India", 
  },
  {
    city: "Punalur",
    state: "Kerala",
    country: "India", 
  },
  {
    city: "Kendrapara",
    state: "Odisha",
    country: "India", 
  },
  {
    city: "Sihor",
    state: "Gujarat",
    country: "India", 
  },
  {
    city: "Nellikuppam",
    state: "Tamil Nadu",
    country: "India", 
  },
  {
    city: "Samana",
    state: "Punjab",
    country: "India", 
  },
  {
    city: "Warora",
    state: "Maharashtra",
    country: "India", 
  },
  {
    city: "Nilambur",
    state: "Kerala",
    country: "India", 
  },
  {
    city: "Rasipuram",
    state: "Tamil Nadu",
    country: "India", 
  },
  {
    city: "Ramnagar",
    state: "Uttarakhand",
    country: "India", 
  },
  {
    city: "Jammalamadugu",
    state: "Andhra Pradesh",
    country: "India", 
  },
  {
    city: "Nawanshahr",
    state: "Punjab",
    country: "India", 
  },
  {
    city: "Thoubal",
    state: "Manipur",
    country: "India", 
  },
  {
    city: "Athni",
    state: "Karnataka",
    country: "India", 
  },
  {
    city: "Cherthala",
    state: "Kerala",
    country: "India", 
  },
  {
    city: "Sidhi",
    state: "Madhya Pradesh",
    country: "India", 
  },
  {
    city: "Farooqnagar",
    state: "Telangana",
    country: "India", 
  },
  {
    city: "Peddapuram",
    state: "Andhra Pradesh",
    country: "India", 
  },
  {
    city: "Chirkunda",
    state: "Jharkhand",
    country: "India", 
  },
  {
    city: "Pachora",
    state: "Maharashtra",
    country: "India", 
  },
  {
    city: "Madhepura",
    state: "Bihar",
    country: "India", 
  },
  {
    city: "Pithoragarh",
    state: "Uttarakhand",
    country: "India", 
  },
  {
    city: "Tumsar",
    state: "Maharashtra",
    country: "India", 
  },
  {
    city: "Phalodi",
    state: "Rajasthan",
    country: "India", 
  },
  {
    city: "Tiruttani",
    state: "Tamil Nadu",
    country: "India", 
  },
  {
    city: "Rampura Phul",
    state: "Punjab",
    country: "India", 
  },
  {
    city: "Perinthalmanna",
    state: "Kerala",
    country: "India", 
  },
  {
    city: "Padrauna",
    state: "Uttar Pradesh",
    country: "India", 
  },
  {
    city: "Pipariya",
    state: "Madhya Pradesh",
    country: "India", 
  },
  {
    city: "Dalli-Rajhara",
    state: "Chhattisgarh",
    country: "India", 
  },
  {
    city: "Punganur",
    state: "Andhra Pradesh",
    country: "India", 
  },
  {
    city: "Mattannur",
    state: "Kerala",
    country: "India", 
  },
  {
    city: "Mathura",
    state: "Uttar Pradesh",
    country: "India", 
  },
  {
    city: "Thakurdwara",
    state: "Uttar Pradesh",
    country: "India", 
  },
  {
    city: "Nandivaram-Guduvancheri",
    state: "Tamil Nadu",
    country: "India", 
  },
  {
    city: "Mulbagal",
    state: "Karnataka",
    country: "India", 
  },
  {
    city: "Manjlegaon",
    state: "Maharashtra",
    country: "India", 
  },
  {
    city: "Wankaner",
    state: "Gujarat",
    country: "India", 
  },
  {
    city: "Sillod",
    state: "Maharashtra",
    country: "India", 
  },
  {
    city: "Nidadavole",
    state: "Andhra Pradesh",
    country: "India", 
  },
  {
    city: "Surapura",
    state: "Karnataka",
    country: "India", 
  },
  {
    city: "Rajagangapur",
    state: "Odisha",
    country: "India", 
  },
  {
    city: "Sheikhpura",
    state: "Bihar",
    country: "India", 
  },
  {
    city: "Parlakhemundi",
    state: "Odisha",
    country: "India", 
  },
  {
    city: "Kalimpong",
    state: "West Bengal",
    country: "India", 
  },
  {
    city: "Siruguppa",
    state: "Karnataka",
    country: "India", 
  },
  {
    city: "Arvi",
    state: "Maharashtra",
    country: "India", 
  },
  {
    city: "Limbdi",
    state: "Gujarat",
    country: "India", 
  },
  {
    city: "Barpeta",
    state: "Assam",
    country: "India", 
  },
  {
    city: "Manglaur",
    state: "Uttarakhand",
    country: "India", 
  },
  {
    city: "Repalle",
    state: "Andhra Pradesh",
    country: "India", 
  },
  {
    city: "Mudhol",
    state: "Karnataka",
    country: "India", 
  },
  {
    city: "Shujalpur",
    state: "Madhya Pradesh",
    country: "India", 
  },
  {
    city: "Mandvi",
    state: "Gujarat",
    country: "India", 
  },
  {
    city: "Thangadh",
    state: "Gujarat",
    country: "India", 
  },
  {
    city: "Sironj",
    state: "Madhya Pradesh",
    country: "India", 
  },
  {
    city: "Nandura",
    state: "Maharashtra",
    country: "India", 
  },
  {
    city: "Shoranur",
    state: "Kerala",
    country: "India", 
  },
  {
    city: "Nathdwara",
    state: "Rajasthan",
    country: "India", 
  },
  {
    city: "Periyakulam",
    state: "Tamil Nadu",
    country: "India", 
  },
  {
    city: "Sultanganj",
    state: "Bihar",
    country: "India", 
  },
  {
    city: "Medak",
    state: "Telangana",
    country: "India", 
  },
  {
    city: "Narayanpet",
    state: "Telangana",
    country: "India", 
  },
  {
    city: "Raxaul Bazar",
    state: "Bihar",
    country: "India", 
  },
  {
    city: "Rajauri",
    state: "Jammu & Kashmir",
    country: "India", 
  },
  {
    city: "Pernampattu",
    state: "Tamil Nadu",
    country: "India", 
  },
  {
    city: "Nainital",
    state: "Uttarakhand",
    country: "India", 
  },
  {
    city: "Ramachandrapuram",
    state: "Andhra Pradesh",
    country: "India", 
  },
  {
    city: "Vaijapur",
    state: "Maharashtra",
    country: "India", 
  },
  {
    city: "Nangal",
    state: "Punjab",
    country: "India", 
  },
  {
    city: "Sidlaghatta",
    state: "Karnataka",
    country: "India", 
  },
  {
    city: "Punch",
    state: "Jammu & Kashmir",
    country: "India", 
  },
  {
    city: "Pandhurna",
    state: "Madhya Pradesh",
    country: "India", 
  },
  {
    city: "Wadgaon Road",
    state: "Maharashtra",
    country: "India", 
  },
  {
    city: "Talcher",
    state: "Odisha",
    country: "India", 
  },
  {
    city: "Varkala",
    state: "Kerala",
    country: "India", 
  },
  {
    city: "Pilani",
    state: "Rajasthan",
    country: "India", 
  },
  {
    city: "Nowgong",
    state: "Madhya Pradesh",
    country: "India", 
  },
  {
    city: "Naila Janjgir",
    state: "Chhattisgarh",
    country: "India", 
  },
  {
    city: "Mapusa",
    state: "Goa",
    country: "India", 
  },
  {
    city: "Vellakoil",
    state: "Tamil Nadu",
    country: "India", 
  },
  {
    city: "Merta City",
    state: "Rajasthan",
    country: "India", 
  },
  {
    city: "Sivaganga",
    state: "Tamil Nadu",
    country: "India", 
  },
  {
    city: "Mandideep",
    state: "Madhya Pradesh",
    country: "India", 
  },
  {
    city: "Sailu",
    state: "Maharashtra",
    country: "India", 
  },
  {
    city: "Vyara",
    state: "Gujarat",
    country: "India", 
  },
  {
    city: "Kovvur",
    state: "Andhra Pradesh",
    country: "India", 
  },
  {
    city: "Vadalur",
    state: "Tamil Nadu",
    country: "India", 
  },
  {
    city: "Nawabganj",
    state: "Uttar Pradesh",
    country: "India", 
  },
  {
    city: "Padra",
    state: "Gujarat",
    country: "India", 
  },
  {
    city: "Sainthia",
    state: "West Bengal",
    country: "India", 
  },
  {
    city: "Siana",
    state: "Uttar Pradesh",
    country: "India", 
  },
  {
    city: "Shahpur",
    state: "Karnataka",
    country: "India", 
  },
  {
    city: "Sojat",
    state: "Rajasthan",
    country: "India", 
  },
  {
    city: "Noorpur",
    state: "Uttar Pradesh",
    country: "India", 
  },
  {
    city: "Paravoor",
    state: "Kerala",
    country: "India", 
  },
  {
    city: "Murtijapur",
    state: "Maharashtra",
    country: "India", 
  },
  {
    city: "Ramnagar",
    state: "Bihar",
    country: "India", 
  },
  {
    city: "Sundargarh",
    state: "Odisha",
    country: "India", 
  },
  {
    city: "Taki",
    state: "West Bengal",
    country: "India", 
  },
  {
    city: "Saundatti-Yellamma",
    state: "Karnataka",
    country: "India", 
  },
  {
    city: "Pathanamthitta",
    state: "Kerala",
    country: "India", 
  },
  {
    city: "Wadi",
    state: "Karnataka",
    country: "India", 
  },
  {
    city: "Rameshwaram",
    state: "Tamil Nadu",
    country: "India", 
  },
  {
    city: "Tasgaon",
    state: "Maharashtra",
    country: "India", 
  },
  {
    city: "Sikandra Rao",
    state: "Uttar Pradesh",
    country: "India", 
  },
  {
    city: "Sihora",
    state: "Madhya Pradesh",
    country: "India", 
  },
  {
    city: "Tiruvethipuram",
    state: "Tamil Nadu",
    country: "India", 
  },
  {
    city: "Tiruvuru",
    state: "Andhra Pradesh",
    country: "India", 
  },
  {
    city: "Mehkar",
    state: "Maharashtra",
    country: "India", 
  },
  {
    city: "Peringathur",
    state: "Kerala",
    country: "India", 
  },
  {
    city: "Perambalur",
    state: "Tamil Nadu",
    country: "India", 
  },
  {
    city: "Manvi",
    state: "Karnataka",
    country: "India", 
  },
  {
    city: "Zunheboto",
    state: "Nagaland",
    country: "India", 
  },
  {
    city: "Mahnar Bazar",
    state: "Bihar",
    country: "India", 
  },
  {
    city: "Attingal",
    state: "Kerala",
    country: "India", 
  },
  {
    city: "Shahbad",
    state: "Haryana",
    country: "India", 
  },
  {
    city: "Puranpur",
    state: "Uttar Pradesh",
    country: "India", 
  },
  {
    city: "Nelamangala",
    state: "Karnataka",
    country: "India", 
  },
  {
    city: "Nakodar",
    state: "Punjab",
    country: "India", 
  },
  {
    city: "Lunawada",
    state: "Gujarat",
    country: "India", 
  },
  {
    city: "Murshidabad",
    state: "West Bengal",
    country: "India", 
  },
  {
    city: "Mahe",
    state: "Puducherry",
    country: "India", 
  },
  {
    city: "Lanka",
    state: "Assam",
    country: "India", 
  },
  {
    city: "Rudauli",
    state: "Uttar Pradesh",
    country: "India", 
  },
  {
    city: "Tuensang",
    state: "Nagaland",
    country: "India", 
  },
  {
    city: "Lakshmeshwar",
    state: "Karnataka",
    country: "India", 
  },
  {
    city: "Zira",
    state: "Punjab",
    country: "India", 
  },
  {
    city: "Yawal",
    state: "Maharashtra",
    country: "India", 
  },
  {
    city: "Thana Bhawan",
    state: "Uttar Pradesh",
    country: "India", 
  },
  {
    city: "Ramdurg",
    state: "Karnataka",
    country: "India", 
  },
  {
    city: "Pulgaon",
    state: "Maharashtra",
    country: "India", 
  },
  {
    city: "Sadasivpet",
    state: "Telangana",
    country: "India", 
  },
  {
    city: "Nargund",
    state: "Karnataka",
    country: "India", 
  },
  {
    city: "Neem-Ka-Thana",
    state: "Rajasthan",
    country: "India", 
  },
  {
    city: "Memari",
    state: "West Bengal",
    country: "India", 
  },
  {
    city: "Nilanga",
    state: "Maharashtra",
    country: "India", 
  },
  {
    city: "Naharlagun",
    state: "Arunachal Pradesh",
    country: "India", 
  },
  {
    city: "Pakaur",
    state: "Jharkhand",
    country: "India", 
  },
  {
    city: "Wai",
    state: "Maharashtra",
    country: "India", 
  },
  {
    city: "Tarikere",
    state: "Karnataka",
    country: "India", 
  },
  {
    city: "Malavalli",
    state: "Karnataka",
    country: "India", 
  },
  {
    city: "Raisen",
    state: "Madhya Pradesh",
    country: "India", 
  },
  {
    city: "Lahar",
    state: "Madhya Pradesh",
    country: "India", 
  },
  {
    city: "Uravakonda",
    state: "Andhra Pradesh",
    country: "India", 
  },
  {
    city: "Savanur",
    state: "Karnataka",
    country: "India", 
  },
  {
    city: "Sirohi",
    state: "Rajasthan",
    country: "India", 
  },
  {
    city: "Udhampur",
    state: "Jammu & Kashmir",
    country: "India", 
  },
  {
    city: "Umarga",
    state: "Maharashtra",
    country: "India", 
  },
  {
    city: "Pratapgarh",
    state: "Rajasthan",
    country: "India", 
  },
  {
    city: "Lingsugur",
    state: "Karnataka",
    country: "India", 
  },
  {
    city: "Usilampatti",
    state: "Tamil Nadu",
    country: "India", 
  },
  {
    city: "Palia Kalan",
    state: "Uttar Pradesh",
    country: "India", 
  },
  {
    city: "Wokha",
    state: "Nagaland",
    country: "India", 
  },
  {
    city: "Rajpipla",
    state: "Gujarat",
    country: "India", 
  },
  {
    city: "Vijayapura",
    state: "Karnataka",
    country: "India", 
  },
  {
    city: "Rawatbhata",
    state: "Rajasthan",
    country: "India", 
  },
  {
    city: "Sangaria",
    state: "Rajasthan",
    country: "India", 
  },
  {
    city: "Paithan",
    state: "Maharashtra",
    country: "India", 
  },
  {
    city: "Rahuri",
    state: "Maharashtra",
    country: "India", 
  },
  {
    city: "Patti",
    state: "Punjab",
    country: "India", 
  },
  {
    city: "Zaidpur",
    state: "Uttar Pradesh",
    country: "India", 
  },
  {
    city: "Lalsot",
    state: "Rajasthan",
    country: "India", 
  },
  {
    city: "Maihar",
    state: "Madhya Pradesh",
    country: "India", 
  },
  {
    city: "Vedaranyam",
    state: "Tamil Nadu",
    country: "India", 
  },
  {
    city: "Nawapur",
    state: "Maharashtra",
    country: "India", 
  },
  {
    city: "Solan",
    state: "Himachal Pradesh",
    country: "India", 
  },
  {
    city: "Vapi",
    state: "Gujarat",
    country: "India", 
  },
  {
    city: "Sanawad",
    state: "Madhya Pradesh",
    country: "India", 
  },
  {
    city: "Warisaliganj",
    state: "Bihar",
    country: "India", 
  },
  {
    city: "Revelganj",
    state: "Bihar",
    country: "India", 
  },
  {
    city: "Sabalgarh",
    state: "Madhya Pradesh",
    country: "India", 
  },
  {
    city: "Tuljapur",
    state: "Maharashtra",
    country: "India", 
  },
  {
    city: "Simdega",
    state: "Jharkhand",
    country: "India", 
  },
  {
    city: "Musabani",
    state: "Jharkhand",
    country: "India", 
  },
  {
    city: "Kodungallur",
    state: "Kerala",
    country: "India", 
  },
  {
    city: "Phulabani",
    state: "Odisha",
    country: "India", 
  },
  {
    city: "Umreth",
    state: "Gujarat",
    country: "India", 
  },
  {
    city: "Narsipatnam",
    state: "Andhra Pradesh",
    country: "India", 
  },
  {
    city: "Nautanwa",
    state: "Uttar Pradesh",
    country: "India", 
  },
  {
    city: "Rajgir",
    state: "Bihar",
    country: "India", 
  },
  {
    city: "Yellandu",
    state: "Telangana",
    country: "India", 
  },
  {
    city: "Sathyamangalam",
    state: "Tamil Nadu",
    country: "India", 
  },
  {
    city: "Pilibanga",
    state: "Rajasthan",
    country: "India", 
  },
  {
    city: "Morshi",
    state: "Maharashtra",
    country: "India", 
  },
  {
    city: "Pehowa",
    state: "Haryana",
    country: "India", 
  },
  {
    city: "Sonepur",
    state: "Bihar",
    country: "India", 
  },
  {
    city: "Pappinisseri",
    state: "Kerala",
    country: "India", 
  },
  {
    city: "Zamania",
    state: "Uttar Pradesh",
    country: "India", 
  },
  {
    city: "Mihijam",
    state: "Jharkhand",
    country: "India", 
  },
  {
    city: "Purna",
    state: "Maharashtra",
    country: "India", 
  },
  {
    city: "Puliyankudi",
    state: "Tamil Nadu",
    country: "India", 
  },
  {
    city: "Shikarpur, Bulandshahr",
    state: "Uttar Pradesh",
    country: "India", 
  },
  {
    city: "Umaria",
    state: "Madhya Pradesh",
    country: "India", 
  },
  {
    city: "Porsa",
    state: "Madhya Pradesh",
    country: "India", 
  },
  {
    city: "Naugawan Sadat",
    state: "Uttar Pradesh",
    country: "India", 
  },
  {
    city: "Fatehpur Sikri",
    state: "Uttar Pradesh",
    country: "India", 
  },
  {
    city: "Manuguru",
    state: "Telangana",
    country: "India", 
  },
  {
    city: "Udaipur",
    state: "Tripura",
    country: "India", 
  },
  {
    city: "Pipar City",
    state: "Rajasthan",
    country: "India", 
  },
  {
    city: "Pattamundai",
    state: "Odisha",
    country: "India", 
  },
  {
    city: "Nanjikottai",
    state: "Tamil Nadu",
    country: "India", 
  },
  {
    city: "Taranagar",
    state: "Rajasthan",
    country: "India", 
  },
  {
    city: "Yerraguntla",
    state: "Andhra Pradesh",
    country: "India", 
  },
  {
    city: "Satana",
    state: "Maharashtra",
    country: "India", 
  },
  {
    city: "Sherghati",
    state: "Bihar",
    country: "India", 
  },
  {
    city: "Sankeshwara",
    state: "Karnataka",
    country: "India", 
  },
  {
    city: "Madikeri",
    state: "Karnataka",
    country: "India", 
  },
  {
    city: "Thuraiyur",
    state: "Tamil Nadu",
    country: "India", 
  },
  {
    city: "Sanand",
    state: "Gujarat",
    country: "India", 
  },
  {
    city: "Rajula",
    state: "Gujarat",
    country: "India", 
  },
  {
    city: "Kyathampalle",
    state: "Telangana",
    country: "India", 
  },
  {
    city: "Shahabad, Rampur",
    state: "Uttar Pradesh",
    country: "India", 
  },
  {
    city: "Tilda Newra",
    state: "Chhattisgarh",
    country: "India", 
  },
  {
    city: "Narsinghgarh",
    state: "Madhya Pradesh",
    country: "India", 
  },
  {
    city: "Chittur-Thathamangalam",
    state: "Kerala",
    country: "India", 
  },
  {
    city: "Malaj Khand",
    state: "Madhya Pradesh",
    country: "India", 
  },
  {
    city: "Sarangpur",
    state: "Madhya Pradesh",
    country: "India", 
  },
  {
    city: "Robertsganj",
    state: "Uttar Pradesh",
    country: "India", 
  },
  {
    city: "Sirkali",
    state: "Tamil Nadu",
    country: "India", 
  },
  {
    city: "Radhanpur",
    state: "Gujarat",
    country: "India", 
  },
  {
    city: "Tiruchendur",
    state: "Tamil Nadu",
    country: "India", 
  },
  {
    city: "Utraula",
    state: "Uttar Pradesh",
    country: "India", 
  },
  {
    city: "Patratu",
    state: "Jharkhand",
    country: "India", 
  },
  {
    city: "Vijainagar, Ajmer",
    state: "Rajasthan",
    country: "India", 
  },
  {
    city: "Periyasemur",
    state: "Tamil Nadu",
    country: "India", 
  },
  {
    city: "Pathri",
    state: "Maharashtra",
    country: "India", 
  },
  {
    city: "Sadabad",
    state: "Uttar Pradesh",
    country: "India", 
  },
  {
    city: "Talikota",
    state: "Karnataka",
    country: "India", 
  },
  {
    city: "Sinnar",
    state: "Maharashtra",
    country: "India", 
  },
  {
    city: "Mungeli",
    state: "Chhattisgarh",
    country: "India", 
  },
  {
    city: "Sedam",
    state: "Karnataka",
    country: "India", 
  },
  {
    city: "Shikaripur",
    state: "Karnataka",
    country: "India", 
  },
  {
    city: "Sumerpur",
    state: "Rajasthan",
    country: "India", 
  },
  {
    city: "Sattur",
    state: "Tamil Nadu",
    country: "India", 
  },
  {
    city: "Sugauli",
    state: "Bihar",
    country: "India", 
  },
  {
    city: "Lumding",
    state: "Assam",
    country: "India", 
  },
  {
    city: "Vandavasi",
    state: "Tamil Nadu",
    country: "India", 
  },
  {
    city: "Titlagarh",
    state: "Odisha",
    country: "India", 
  },
  {
    city: "Uchgaon",
    state: "Maharashtra",
    country: "India", 
  },
  {
    city: "Mokokchung",
    state: "Nagaland",
    country: "India", 
  },
  {
    city: "Paschim Punropara",
    state: "West Bengal",
    country: "India", 
  },
  {
    city: "Sagwara",
    state: "Rajasthan",
    country: "India", 
  },
  {
    city: "Ramganj Mandi",
    state: "Rajasthan",
    country: "India", 
  },
  {
    city: "Tarakeswar",
    state: "West Bengal",
    country: "India", 
  },
  {
    city: "Mahalingapura",
    state: "Karnataka",
    country: "India", 
  },
  {
    city: "Dharmanagar",
    state: "Tripura",
    country: "India", 
  },
  {
    city: "Mahemdabad",
    state: "Gujarat",
    country: "India", 
  },
  {
    city: "Manendragarh",
    state: "Chhattisgarh",
    country: "India", 
  },
  {
    city: "Uran",
    state: "Maharashtra",
    country: "India", 
  },
  {
    city: "Tharamangalam",
    state: "Tamil Nadu",
    country: "India", 
  },
  {
    city: "Tirukkoyilur",
    state: "Tamil Nadu",
    country: "India", 
  },
  {
    city: "Pen",
    state: "Maharashtra",
    country: "India", 
  },
  {
    city: "Makhdumpur",
    state: "Bihar",
    country: "India", 
  },
  {
    city: "Maner",
    state: "Bihar",
    country: "India", 
  },
  {
    city: "Oddanchatram",
    state: "Tamil Nadu",
    country: "India", 
  },
  {
    city: "Palladam",
    state: "Tamil Nadu",
    country: "India", 
  },
  {
    city: "Mundi",
    state: "Madhya Pradesh",
    country: "India", 
  },
  {
    city: "Nabarangapur",
    state: "Odisha",
    country: "India", 
  },
  {
    city: "Mudalagi",
    state: "Karnataka",
    country: "India", 
  },
  {
    city: "Samalkha",
    state: "Haryana",
    country: "India", 
  },
  {
    city: "Nepanagar",
    state: "Madhya Pradesh",
    country: "India", 
  },
  {
    city: "Karjat",
    state: "Maharashtra",
    country: "India", 
  },
  {
    city: "Ranavav",
    state: "Gujarat",
    country: "India", 
  },
  {
    city: "Pedana",
    state: "Andhra Pradesh",
    country: "India", 
  },
  {
    city: "Pinjore",
    state: "Haryana",
    country: "India", 
  },
  {
    city: "Lakheri",
    state: "Rajasthan",
    country: "India", 
  },
  {
    city: "Pasan",
    state: "Madhya Pradesh",
    country: "India", 
  },
  {
    city: "Puttur",
    state: "Andhra Pradesh",
    country: "India", 
  },
  {
    city: "Vadakkuvalliyur",
    state: "Tamil Nadu",
    country: "India", 
  },
  {
    city: "Tirukalukundram",
    state: "Tamil Nadu",
    country: "India", 
  },
  {
    city: "Mahidpur",
    state: "Madhya Pradesh",
    country: "India", 
  },
  {
    city: "Mussoorie",
    state: "Uttarakhand",
    country: "India", 
  },
  {
    city: "Muvattupuzha",
    state: "Kerala",
    country: "India", 
  },
  {
    city: "Rasra",
    state: "Uttar Pradesh",
    country: "India", 
  },
  {
    city: "Udaipurwati",
    state: "Rajasthan",
    country: "India", 
  },
  {
    city: "Manwath",
    state: "Maharashtra",
    country: "India", 
  },
  {
    city: "Adoor",
    state: "Kerala",
    country: "India", 
  },
  {
    city: "Uthamapalayam",
    state: "Tamil Nadu",
    country: "India", 
  },
  {
    city: "Partur",
    state: "Maharashtra",
    country: "India", 
  },
  {
    city: "Nahan",
    state: "Himachal Pradesh",
    country: "India", 
  },
  {
    city: "Ladwa",
    state: "Haryana",
    country: "India", 
  },
  {
    city: "Mankachar",
    state: "Assam",
    country: "India", 
  },
  {
    city: "Nongstoin",
    state: "Meghalaya",
    country: "India", 
  },
  {
    city: "Losal",
    state: "Rajasthan",
    country: "India", 
  },
  {
    city: "Sri Madhopur",
    state: "Rajasthan",
    country: "India", 
  },
  {
    city: "Ramngarh",
    state: "Rajasthan",
    country: "India", 
  },
  {
    city: "Mavelikkara",
    state: "Kerala",
    country: "India", 
  },
  {
    city: "Rawatsar",
    state: "Rajasthan",
    country: "India", 
  },
  {
    city: "Rajakhera",
    state: "Rajasthan",
    country: "India", 
  },
  {
    city: "Lar",
    state: "Uttar Pradesh",
    country: "India", 
  },
  {
    city: "Lal Gopalganj Nindaura",
    state: "Uttar Pradesh",
    country: "India", 
  },
  {
    city: "Muddebihal",
    state: "Karnataka",
    country: "India", 
  },
  {
    city: "Sirsaganj",
    state: "Uttar Pradesh",
    country: "India", 
  },
  {
    city: "Shahpura",
    state: "Rajasthan",
    country: "India", 
  },
  {
    city: "Surandai",
    state: "Tamil Nadu",
    country: "India", 
  },
  {
    city: "Sangole",
    state: "Maharashtra",
    country: "India", 
  },
  {
    city: "Pavagada",
    state: "Karnataka",
    country: "India", 
  },
  {
    city: "Tharad",
    state: "Gujarat",
    country: "India", 
  },
  {
    city: "Mansa",
    state: "Gujarat",
    country: "India", 
  },
  {
    city: "Umbergaon",
    state: "Gujarat",
    country: "India", 
  },
  {
    city: "Mavoor",
    state: "Kerala",
    country: "India", 
  },
  {
    city: "Nalbari",
    state: "Assam",
    country: "India", 
  },
  {
    city: "Talaja",
    state: "Gujarat",
    country: "India", 
  },
  {
    city: "Malur",
    state: "Karnataka",
    country: "India", 
  },
  {
    city: "Mangrulpir",
    state: "Maharashtra",
    country: "India", 
  },
  {
    city: "Soro",
    state: "Odisha",
    country: "India", 
  },
  {
    city: "Shahpura",
    state: "Rajasthan",
    country: "India", 
  },
  {
    city: "Vadnagar",
    state: "Gujarat",
    country: "India", 
  },
  {
    city: "Raisinghnagar",
    state: "Rajasthan",
    country: "India", 
  },
  {
    city: "Sindhagi",
    state: "Karnataka",
    country: "India", 
  },
  {
    city: "Sanduru",
    state: "Karnataka",
    country: "India", 
  },
  {
    city: "Sohna",
    state: "Haryana",
    country: "India", 
  },
  {
    city: "Manavadar",
    state: "Gujarat",
    country: "India", 
  },
  {
    city: "Pihani",
    state: "Uttar Pradesh",
    country: "India", 
  },
  {
    city: "Safidon",
    state: "Haryana",
    country: "India", 
  },
  {
    city: "Risod",
    state: "Maharashtra",
    country: "India", 
  },
  {
    city: "Rosera",
    state: "Bihar",
    country: "India", 
  },
  {
    city: "Sankari",
    state: "Tamil Nadu",
    country: "India", 
  },
  {
    city: "Malpura",
    state: "Rajasthan",
    country: "India", 
  },
  {
    city: "Sonamukhi",
    state: "West Bengal",
    country: "India", 
  },
  {
    city: "Shamsabad, Agra",
    state: "Uttar Pradesh",
    country: "India", 
  },
  {
    city: "Nokha",
    state: "Bihar",
    country: "India", 
  },
  {
    city: "PandUrban Agglomeration",
    state: "West Bengal",
    country: "India", 
  },
  {
    city: "Mainaguri",
    state: "West Bengal",
    country: "India", 
  },
  {
    city: "Afzalpur",
    state: "Karnataka",
    country: "India", 
  },
  {
    city: "Shirur",
    state: "Maharashtra",
    country: "India", 
  },
  {
    city: "Salaya",
    state: "Gujarat",
    country: "India", 
  },
  {
    city: "Shenkottai",
    state: "Tamil Nadu",
    country: "India", 
  },
  {
    city: "Pratapgarh",
    state: "Tripura",
    country: "India", 
  },
  {
    city: "Vadipatti",
    state: "Tamil Nadu",
    country: "India", 
  },
  {
    city: "Nagarkurnool",
    state: "Telangana",
    country: "India", 
  },
  {
    city: "Savner",
    state: "Maharashtra",
    country: "India", 
  },
  {
    city: "Sasvad",
    state: "Maharashtra",
    country: "India", 
  },
  {
    city: "Rudrapur",
    state: "Uttar Pradesh",
    country: "India", 
  },
  {
    city: "Soron",
    state: "Uttar Pradesh",
    country: "India", 
  },
  {
    city: "Sholingur",
    state: "Tamil Nadu",
    country: "India", 
  },
  {
    city: "Pandharkaoda",
    state: "Maharashtra",
    country: "India", 
  },
  {
    city: "Perumbavoor",
    state: "Kerala",
    country: "India", 
  },
  {
    city: "Maddur",
    state: "Karnataka",
    country: "India", 
  },
  {
    city: "Nadbai",
    state: "Rajasthan",
    country: "India", 
  },
  {
    city: "Talode",
    state: "Maharashtra",
    country: "India", 
  },
  {
    city: "Shrigonda",
    state: "Maharashtra",
    country: "India", 
  },
  {
    city: "Madhugiri",
    state: "Karnataka",
    country: "India", 
  },
  {
    city: "Tekkalakote",
    state: "Karnataka",
    country: "India", 
  },
  {
    city: "Seoni-Malwa",
    state: "Madhya Pradesh",
    country: "India", 
  },
  {
    city: "Shirdi",
    state: "Maharashtra",
    country: "India", 
  },
  {
    city: "SUrban Agglomerationr",
    state: "Uttar Pradesh",
    country: "India", 
  },
    {
      "country": "Japan",
      "state": "Tōkyō",
      "city": "Tokyo"
    },
    {
      "country": "Japan",
      "state": "Ōsaka",
      "city": "Ōsaka"
    },
    {
      "country": "Japan",
      "state": "Aichi",
      "city": "Nagoya"
    },
    {
      "country": "Japan",
      "state": "Kanagawa",
      "city": "Yokohama"
    },
    {
      "country": "Japan",
      "state": "Fukuoka",
      "city": "Fukuoka"
    },
    {
      "country": "Japan",
      "state": "Hokkaidō",
      "city": "Sapporo"
    },
    {
      "country": "Japan",
      "state": "Kanagawa",
      "city": "Kawasaki"
    },
    {
      "country": "Japan",
      "state": "Hyōgo",
      "city": "Kōbe"
    },
    {
      "country": "Japan",
      "state": "Kyōto",
      "city": "Kyōto"
    },
    {
      "country": "Japan",
      "state": "Saitama",
      "city": "Saitama"
    },
    {
      "country": "Japan",
      "state": "Hiroshima",
      "city": "Hiroshima"
    },
    {
      "country": "Japan",
      "state": "Miyagi",
      "city": "Sendai"
    },
    {
      "country": "Japan",
      "state": "Tōkyō",
      "city": "Setagaya"
    },
    {
      "country": "Japan",
      "state": "Tōkyō",
      "city": "Nerima"
    },
    {
      "country": "Japan",
      "state": "Tōkyō",
      "city": "Ōta-ku"
    },
    {
      "country": "Japan",
      "state": "Chiba",
      "city": "Edogawa"
    },
    {
      "country": "Japan",
      "state": "Tōkyō",
      "city": "Adachi"
    },
    {
      "country": "Japan",
      "state": "Tōkyō",
      "city": "Itabashi"
    },
    {
      "country": "Japan",
      "state": "Tōkyō",
      "city": "Suginami-ku"
    },
    {
      "country": "Japan",
      "state": "Tōkyō",
      "city": "Kōtō-ku"
    },
    {
      "country": "Japan",
      "state": "Tōkyō",
      "city": "Katsushika-ku"
    },
    {
      "country": "Japan",
      "state": "Tōkyō",
      "city": "Shinagawa-ku"
    },
    {
      "country": "Japan",
      "state": "Ōsaka",
      "city": "Toyonaka"
    },
    {
      "country": "Japan",
      "state": "Tōkyō",
      "city": "Kita-ku"
    },
    {
      "country": "Japan",
      "state": "Tōkyō",
      "city": "Shinjuku"
    },
    {
      "country": "Japan",
      "state": "Tōkyō",
      "city": "Nakano"
    },
    {
      "country": "Japan",
      "state": "Tōkyō",
      "city": "Toshima"
    },
    {
      "country": "Japan",
      "state": "Tōkyō",
      "city": "Meguro"
    },
    {
      "country": "Japan",
      "state": "Tōkyō",
      "city": "Sumida"
    },
    {
      "country": "Japan",
      "state": "Tōkyō",
      "city": "Minato"
    },
    {
      "country": "Japan",
      "state": "Tōkyō",
      "city": "Bunkyō-ku"
    },
    {
      "country": "Japan",
      "state": "Tōkyō",
      "city": "Chōfugaoka"
    },
    {
      "country": "Japan",
      "state": "Tōkyō",
      "city": "Shibuya-ku"
    },
    {
      "country": "Japan",
      "state": "Tōkyō",
      "city": "Arakawa"
    },
    {
      "country": "Japan",
      "state": "Tōkyō",
      "city": "Taitō"
    },
    {
      "country": "Japan",
      "state": "Tōkyō",
      "city": "Nishitōkyō"
    },
    {
      "country": "Japan",
      "state": "Tōkyō",
      "city": "Kamirenjaku"
    },
    {
      "country": "Japan",
      "state": "Tōkyō",
      "city": "Chūō-ku"
    },
    {
      "country": "Japan",
      "state": "Tōkyō",
      "city": "Musashino"
    },
    {
      "country": "Japan",
      "state": "Ōsaka",
      "city": "Moriguchi"
    },
    {
      "country": "Japan",
      "state": "Tōkyō",
      "city": "Kokubunji"
    },
    {
      "country": "Japan",
      "state": "Tōkyō",
      "city": "Koganei"
    },
    {
      "country": "Japan",
      "state": "Tōkyō",
      "city": "Hōyachō"
    },
    {
      "country": "Japan",
      "state": "Tōkyō",
      "city": "Shibuya"
    },
    {
      "country": "Japan",
      "state": "Tōkyō",
      "city": "Komae"
    },
    {
      "country": "Japan",
      "state": "Tōkyō",
      "city": "Tanashichō"
    },
    {
      "country": "Japan",
      "state": "Saitama",
      "city": "Warabi"
    }
];
export const StatesByCountry=(country)=>States.filter((item)=>item.country==country)
export const CitiesByStates=(state)=>States.filter((item)=>item.state==state)
