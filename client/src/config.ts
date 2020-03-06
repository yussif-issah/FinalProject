// TODO: Once your application is deployed, copy an API id here so that the frontend could interact with it
const apiId = 'q07w29tukf'
export const apiEndpoint = `https://${apiId}.execute-api.us-east-1.amazonaws.com/dev`

export const authConfig = {
  // TODO: Create an Auth0 application and copy values from it into this map
  domain: 'dev-0iqm4i7o.auth0.com',            // Auth0 domain
  clientId: '3OnHj7UpQI4gAlx1yllStXAdHz7LULFx',          // Auth0 client id
  callbackUrl: 'http://localhost:3000/callback'
}
