# Akash Validator Data Validation Test 
Create a simple unit test to validate JSON validator data against Akash API responses.

## API Endpoints for Testing
- **Tendermint RPC**: `https://akash.api.arcturian.tech/validatorsets/latest` - Get latest validator set
- **Cosmos REST API**: `https://akash.api.arcturian.tech/cosmos/staking/v1beta1/validators` - Get validator details with monikers
- **API Documentation**: https://akash.api.arcturian.tech/swagger/

## Example API Calls
```bash
# Get latest validator set (addresses and voting power)
curl -X 'GET' 'https://akash.api.arcturian.tech/validatorsets/latest'

# Get validator details with monikers
curl -X 'GET' 'https://akash.api.arcturian.tech/cosmos/staking/v1beta1/validators' \
  -H 'accept: application/json'
```

## What Specifically Needs to Be Done (Deliverables)
### [1st Deliverable]
Create validator data validation test

What to include:

- Create a simple test function that takes JSON validator data
- Fetch validator data from both API endpoints
- Compare the JSON data against the API responses
- Validate that validator addresses match between data sources
- Check that moniker data is consistent
- Add basic TypeScript interfaces for validator data structure

What to verify:

- JSON validator data matches API response data
- Validator addresses are consistent between sources
- Moniker information is correctly associated
- TypeScript interfaces are properly defined
- Test runs successfully and validates data accuracy

Estimated Time: 1 hour
Summary: Create a simple validator data validation test that compares JSON data against Akash API responses

Total Estimated Time: 1 hour
