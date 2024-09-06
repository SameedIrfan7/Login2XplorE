var jpdBaseURL = "http://api.login2explore.com:5577";
var jpdbIRL = "/api/irl";
var jpdbIML = "/api/iml";
var Prodbname = "Pro-table";
var ProRelationName = "Shipping-db";
var connToken = "90932048|-31949219947256871|90962344";

$(document).ready(function () {
    // Initial button states
    $("#save").prop("disabled", true);
    $("#update").prop("disabled", true);
    $("#reset").prop("disabled", true);

    $('#proid').focus();

    function saveData() {
        var jsonData = validateData();
        if (jsonData === '') return;

        var postRequest = createPOSTRequest(connToken, jsonData, Prodbname, ProRelationName);
        executeCommandAtGivenBaseUrl(postRequest, jpdBaseURL, jpdbIML);

        resetForm();
        $('#proid').focus();
    }

    function updateData() {
        $("#update").prop("disabled", true);
        var jsonData = validateData();
        if (jsonData === '') return;

        var updateRequest = createUPDATERecordRequest(connToken, jsonData, Prodbname, ProRelationName, $("#proid").val());
        executeCommandAtGivenBaseUrl(updateRequest, jpdBaseURL, jpdbIML);

        resetForm();
        $('#proid').focus();
    }

    function resetForm() {
        // Reset all fields
        $("#proid").val("");
        $("#proname").val("");
        $("#assiTo").val("");
        $("#AssiDate").val("");
        $("#deadline").val("");

        // Reset button states
        $("#proid").prop('disabled', false);
        $("#save").prop("disabled", true);
        $("#update").prop("disabled", true);
        $("#reset").prop("disabled", true);

        $("#proid").focus();
    }

    function validateData() {
        var proid = $("#proid").val();
        var proname = $("#proname").val();
        var assiTo = $("#assiTo").val();
        var AssiDate = $("#AssiDate").val();
        var deadline = $("#deadline").val();

        // Validate all fields
        if (proid === "") {
            alert("Project ID is required.");
            $("#proid").focus();
            return "";
        }
        if (proname === "") {
            alert("Project name is required.");
            $("#proname").focus();
            return "";
        }
        if (assiTo === "") {
            alert("Assigned To is required.");
            $("#assiTo").focus();
            return "";
        }
        if (AssiDate === "") {
            alert("Assignment Date is required.");
            $("#AssiDate").focus();
            return "";
        }
        if (deadline === "") {
            alert("Deadline is required.");
            $("#deadline").focus();
            return "";
        }

        return JSON.stringify({
            id: proid,
            proname: proname,
            assiTo: assiTo,
            AssiDate: AssiDate,
            deadline: deadline,
        });
    }

    function executeCommandAtGivenBaseUrl(request, baseUrl, endpoint) {
        // Implement the logic to execute the command at the given base URL and endpoint.
        // You can use any HTTP library or framework to make the request.
        // Here's an example using the fetch API:
        fetch(baseUrl + endpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(request),
        })
        .then(response => response.json())
        .then(data => {
            // Handle the response data
        })
        .catch(error => {
            console.error('Error:', error);
        });
    }

    function getProIdAsJsonObj() {
        var proid = $('#proid').val();
        return JSON.stringify({ id: proid });
    }

    function getPro() {
        var proidJsonObj = getProIdAsJsonObj();
        var getRequest = createGET_BY_KEYRequest(connToken, Prodbname, ProRelationName, proidJsonObj);
        executeCommandAtGivenBaseUrl(getRequest, jpdBaseURL, jpdbIRL)
        .then(resJsonObj => {
            if (resJsonObj.status === 400) {
                $("#save").prop("disabled", false);
                $("#reset").prop("disabled", false);
                $("#proname").focus();
            } else if (resJsonObj.status === 200) {
                $("#proid").prop("disabled", true);
                fillData(resJsonObj);
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
    }

    function fillData(jsonObj) {
        var record = JSON.parse(jsonObj.data).record;
        $("#proname").val(record.proname);
        $("#assiTo").val(record.assiTo);
        $("#AssiDate").val(record.AssiDate);
        $("#deadline").val(record.deadline);

        // Enable buttons based on the state
        $("#update").prop("disabled", false);
        $("#reset").prop("disabled", false);
    }

    // Event bindings
    $("#save").click(saveData);
    $("#update").click(updateData);
    $("#reset").click(resetForm);

    // Trigger on ID change
    $("#proid").on('change', getPro);
});
