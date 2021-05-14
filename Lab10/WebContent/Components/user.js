$(document).ready(function()
{ 
if ($("#alertSuccess").text().trim() == "") 
 { 
 $("#alertSuccess").hide(); 
 } 
 $("#alertError").hide(); 
}); 
// Save
$(document).on("click", "#btnSave", function(event) 
{ 
// Clear alerts.
 $("#alertSuccess").text(""); 
 $("#alertSuccess").hide(); 
 $("#alertError").text(""); 
 $("#alertError").hide(); 
// Form validation.
var status = validateItemForm(); 
if (status != true) 
 { 
 $("#alertError").text(status); 
 $("#alertError").show(); 
 return; 
 } 
// If valid.
var type = ($("#hidUserIDSave").val() == "") ? "POST" : "PUT"; 
$.ajax( 
{ 
		url : "UserAPI", 
		type : type, 
		data : $("#formUser").serialize(), 
		dataType : "text", 
		complete : function(response, status) 
		{ 
			onItemSaveComplete(response.responseText, status); 
		} 
	}); 
});

function onItemSaveComplete(response, status)
{ 
if (status == "success") 
 { 
	 var resultSet = JSON.parse(response); 
	 if (resultSet.status.trim() == "success") 
	 { 
		 $("#alertSuccess").text("Successfully saved."); 
		 $("#alertSuccess").show();
		 
		 $("#divUserGrid").html(resultSet.data); 
	 } else if (resultSet.status.trim() == "error") 
	 { 
		 $("#alertError").text(resultSet.data); 
		 $("#alertError").show(); 
	 } 
 } else if (status == "error") 
 { 
	 $("#alertError").text("Error while saving."); 
	 $("#alertError").show(); 
 } else
 { 
	 $("#alertError").text("Unknown error while saving.."); 
	 $("#alertError").show(); 
 }

	$("#hidUserIDSave").val(""); 
	$("#formUser")[0].reset(); 
}


// Update
$(document).on("click", ".btnUpdate", function(event) 
{ 
 $("#hidUserIDSave").val($(this).closest("tr").find('#hidUserIDUpdate').val()); 
 $("#Name").val($(this).closest("tr").find('td:eq(0)').text()); 
 $("#Address").val($(this).closest("tr").find('td:eq(1)').text()); 
 $("#Telephone").val($(this).closest("tr").find('td:eq(2)').text()); 
 $("#Email").val($(this).closest("tr").find('td:eq(3)').text()); 
 $("#UserName").val($(this).closest("tr").find('td:eq(4)').text());
 $("#Password").val($(this).closest("tr").find('td:eq(5)').text());
}); 

//Remove

$(document).on("click", ".btnRemove", function(event)
{ 
	$.ajax( 
	{ 
		 url : "UserAPI", 
		 type : "DELETE", 
		 data : "ID=" + $(this).data("uid"),
		 dataType : "text", 
		 complete : function(response, status) 
		 { 
			 onItemDeleteComplete(response.responseText, status); 
		 } 
	}); 
});

function onItemDeleteComplete(response, status)
{ 
	if (status == "success") 
	{ 
		var resultSet = JSON.parse(response); 
		if (resultSet.status.trim() == "success") 
		{ 
		 $("#alertSuccess").text("Successfully deleted."); 
		 $("#alertSuccess").show(); 
		 
		 $("#divUserGrid").html(resultSet.data); 
		} else if (resultSet.status.trim() == "error") 
		{ 
			 $("#alertError").text(resultSet.data); 
			 $("#alertError").show(); 
		} 
		
 } else if (status == "error") 
 { 
	 $("#alertError").text("Error while deleting."); 
	 $("#alertError").show(); 
 } else
 { 
	 $("#alertError").text("Unknown error while deleting.."); 
	 $("#alertError").show(); 
 } 

}

//Client Model
function validateItemForm() 
{ 
// Name
if ($("#Name").val().trim() == "") 
 { 
 return "Insert User Name."; 
 } 
// Address
if ($("#Address").val().trim() == "") 
 { 
 return "Insert User Address."; 
 }

//Telephone
if ($("#Telephone").val().trim() == "") 
 { 
 return "Insert User Telephone."; 
 } 

//Email
if ($("#Email").val().trim() == "") 
{ 
return "Insert User Email."; 
} 

//UserName
if ($("#UserName").val().trim() == "") 
 { 
 return "Insert UserName."; 
 } 

//Email
if ($("#Password").val().trim() == "") 
{ 
return "Insert Password."; 
} 
return true; 
}