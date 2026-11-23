# LATRANSPARENCE Forex Bureau

Initial React + Vite frontend workspace.

## Run locally
```bash
npm install
npm run dev
```

## Important status
This is only the first frontend foundation. Authentication, database persistence, live bureau rates, transaction processing, cash balances, approvals, audit logs and reports are not connected yet. Do not use this preview to process real customer transactions.

## Agreed business rules
- Transactions valued above USD 5,000 require manager approval.
- Cashiers can save such transactions as Pending Approval and continue working.
- Pending or rejected transactions do not change cash balances.
- Approved transactions update balances.
- Currency inventory is maintained separately per currency.
