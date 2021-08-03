<h2>Setting up Cognito with Amplify</h2>
<ol>
<li>
Create IAM User with AdministratorAccess policy
</li>
<li>
Store credentials in local .aws file
</li>
<li>
Open project directory (my-app)
</li>
<li>
npm install -g @aws-amplify/cli
</li>
<li>
npm install aws-amplify aws-amplify-react-native @react-native-community/netinfo
</li>
<li>
Run amplify init
</li>
<li>
? Enter a name for the project caliberMoblie
</li>
<li>
? Initialize the project with the above configuration? Yes
</li>
<li>
? Select the authentication method you want to use: AWS profile
</li>
<li>
Pick IAM user from above
</li>
<li>
Run amplify add auth
</li>
<li>
Do you want to use the default authentication and security configuration? Manual configuration
</li>
<li>
Select the authentication/authorization services that you want to use: User Sign-Up & Sign-In only 
(Best used with a cloud API only)
</li>
<li>
Select the authentication/authorization services that you want to use: User Sign-Up & Sign-In only 
(Best used with a cloud API only)
</li>
<li>
Give friendly name
</li>
<li>
Give name for user pool 
</li>
<li>
How do you want users to be able to sign in? Username 
</li>
<li>
Do you want to add User Pool Groups? Yes   
</li>
<li>
? Provide a name for your user pool group: admin   
</li>
<li>
? Do you want to add another User Pool Group No  
</li>
<li>
√ Sort the user pool groups in order of preference · admin (enter) 
</li>
<li>
Do you want to add an admin queries API? No
</li>
<li>
Multifactor authentication (MFA) user login options: OFF
</li>
<li>
Email based user registration/forgot password: Disabled (Uses SMS/TOTP as an alternative)
</li>
<li>
Your verification code is {####}
</li>
<li>
Do you want to override the default password policy for this User Pool? Yes
</li>
<li>
Enter the minimum password length for this User Pool: 6
</li>
<li>
Select no attributes
</li>
<li>
Specify the app's refresh token expiration period (in days): 30
</li>
<li>
 Do you want to specify the user attributes this app can read and write? No
</li>
<li>
 Do you want to use an OAuth flow? No
</li>
<li>
 Do you want to configure Lambda Triggers for Cognito? No
</li>
<li>
Run amplify push
</li>
</ol>

<h2>Add custom attribute 'role' to schema</h2>

```YAML
# BEGIN USER POOL RESOURCES
UserPool:
# Created upon user selection
# Depends on SNS Role for Arn if MFA is enabled
  Type: AWS::Cognito::UserPool
  UpdateReplacePolicy: Retain
  Properties:
    UserPoolName: !If [ShouldNotCreateEnvResources, !Ref userPoolName, !Join ['',[!Ref userPoolName, '-', !Ref env]]]
    
    Schema:
      - Name: role
        Required: false
        Mutable: true
        AttributeDataType: String
```
<ol>
<li>Open the Yaml cloudformation template file under ./amplify/backend/auth/{name of resource}</li>
<li>CTRL+F # BEGIN USER POOL RESOURCES</li>
<li>Under Properties, ad schema like above</li>
<li>Run amplify push</li>
<ol>