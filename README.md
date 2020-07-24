# extracttdata-ddd-refactor-sample

## Structure

```md
.
└── app                             // Typescript dir
    └── src                         
        ├── module                  // Using by legacy and refactored dirs
        │   ├── slackModule
        │   └── spreadSheetApp
        ├── legacy                  // Before refactoring codes
        └── refactored              // Refactored codes
            └── domain              // Domain layer
                ├── model
                └── type
```
