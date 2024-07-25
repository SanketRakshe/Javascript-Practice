function jsonMethods(jsonString) {
    console.log("Original JSON String", jsonString);

    // Parsing JSON string to JavaScript object
    let ParsedObject = JSON.parse(jsonString);
    console.log("After parsing JSON: ", ParsedObject);

    // Stringifying JavaScript object to JSON string
    let jsonStringified = JSON.stringify(ParsedObject);
    console.log("After stringifying JSON: ", jsonStringified);
}

const sampleJSONString =
  '{"key": "value", "number": 42, "nested": {"nestedKey": "nestedValue"}}';

jsonMethods(sampleJSONString);