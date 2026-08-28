@'
## Expense Tracker Pro

A full-featured expense tracker built with React that helps you manage income and expenses.

### Features
- Track income and expenses with categories
- Summary cards showing balance, total income, total expenses
- Visual charts — expenses by category (bar) and monthly overview
- Filter by type (income/expense) and month
- localStorage persistence — data saved between sessions
- Delete individual transactions or clear all

### Concepts Used
- useState, useEffect, useMemo
- Custom hook (useTransactions)
- localStorage for data persistence
- CSS-based charts (no external chart library)
- Tailwind CSS for styling
'@ | Out-File -FilePath src/plays/expense-tracker-pro/Readme.md -Encoding utf8