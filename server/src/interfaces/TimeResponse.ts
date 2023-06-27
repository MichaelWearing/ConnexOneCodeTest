export default interface TimeResponse {
  properties: {
    epoch: {
      description: String;
      type: String;
    };
  };
  required: [String];
  type: Object;
}
