Feature: Add Values
  
  Background:
     Given User is on add values page
     
  
  Scenario Outline: To verify right count of values appears on screen
    When user enters "<val1>", "<val2>", "<val3>", "<val4>" , "<val5>"
    Then check user enters right count of values

    Examples: 
      | val1        | val2    | val3        | val4       | val5    |
      | $122,365.24 | $0      | $23,329.50  | $566.27    | $700    |
      | $122,365.24 | $599.00 | $850,139.99 | $23,329.50 | $34.9   |

  Scenario Outline: To verify values present on the screen greater than 0
    When user enters "<val1>", "<val2>", "<val3>", "<val4>" , "<val5>"
    Then check entered values are geater than zero

    Examples: 
      | val1        | val2    | val3        | val4       | val5    |
      | $122,365.24 | $0      | $23,329.50  | $566.27    | $700    |
      | $122,365.24 | $599.00 | $850,139.99 | $23,329.50 | $566.27 |
      
 #to verify if displayed balance in requirements matches to total sum 
      
  Scenario Outline: To verify total balance is correct based on the values listed on screen
    When user enters "<val1>", "<val2>", "<val3>", "<val4>" , "<val5>"
    Then check total balance is equal to sum of all values

    Examples: 
      | val1        | val2    | val3        | val4       | val5      |
      | $122,365.24 | $599.00 | $850,139.99 | $23,329.50 | $566.27   |

  Scenario Outline: To verify values are formated as currencies
    When user enters "<val1>", "<val2>", "<val3>", "<val4>" , "<val5>"
    Then check values are formated as currencies

    Examples: 
      | val1        | val2    | val3        | val4       | val5    |
      | $122,365.24 | $599.00 | $850,139.99 | $23,329.50 | $566.27 |
      | $21,365.24  | $399.00 | $350,139.99 | $3,329.50  | $32.00  |
      
 #scenario similar to 3rd scenario here differnt values are passsed 
  
  Scenario Outline: To verify total balance matches the sum of all values
    When user enters "<val1>", "<val2>", "<val3>", "<val4>" , "<val5>"
    Then check total balance is equal to sum of all values

    Examples: 
      | val1        | val2    | val3        | val4       | val5      |
      | $122.24     | $599.00 | $850,139.99 | $23,329.50 | $566.27   |
      | $21,365.24  | $399.00 | $350,139.99 | $3,329.50  | $32.00    |

      
    