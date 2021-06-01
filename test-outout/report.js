$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("/Users/HOME/Desktop/Task/CucumberPOMTask/src/main/java/com/task/feature/Task.feature");
formatter.feature({
  "line": 1,
  "name": "Add Values",
  "description": "",
  "id": "add-values",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 7,
  "name": "To verify right count of values appears on screen",
  "description": "",
  "id": "add-values;to-verify-right-count-of-values-appears-on-screen",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 8,
  "name": "user enters \"\u003cval1\u003e\", \"\u003cval2\u003e\", \"\u003cval3\u003e\", \"\u003cval4\u003e\" , \"\u003cval5\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "check user enters right count of values",
  "keyword": "Then "
});
formatter.examples({
  "line": 11,
  "name": "",
  "description": "",
  "id": "add-values;to-verify-right-count-of-values-appears-on-screen;",
  "rows": [
    {
      "cells": [
        "val1",
        "val2",
        "val3",
        "val4",
        "val5"
      ],
      "line": 12,
      "id": "add-values;to-verify-right-count-of-values-appears-on-screen;;1"
    },
    {
      "cells": [
        "$122,365.24",
        "$0",
        "$23,329.50",
        "$566.27",
        "$700"
      ],
      "line": 13,
      "id": "add-values;to-verify-right-count-of-values-appears-on-screen;;2"
    },
    {
      "cells": [
        "$122,365.24",
        "$599.00",
        "$850,139.99",
        "$23,329.50",
        "$34.9"
      ],
      "line": 14,
      "id": "add-values;to-verify-right-count-of-values-appears-on-screen;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 7515301400,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "User is on add values page",
  "keyword": "Given "
});
formatter.match({
  "location": "TaskStepDefinition.user_is_on_add_values_page()"
});
formatter.result({
  "duration": 544398000,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "To verify right count of values appears on screen",
  "description": "",
  "id": "add-values;to-verify-right-count-of-values-appears-on-screen;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 8,
  "name": "user enters \"$122,365.24\", \"$0\", \"$23,329.50\", \"$566.27\" , \"$700\"",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "check user enters right count of values",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "$122,365.24",
      "offset": 13
    },
    {
      "val": "$0",
      "offset": 28
    },
    {
      "val": "$23,329.50",
      "offset": 34
    },
    {
      "val": "$566.27",
      "offset": 48
    },
    {
      "val": "$700",
      "offset": 60
    }
  ],
  "location": "TaskStepDefinition.user_enters(String,String,String,String,String)"
});
formatter.result({
  "duration": 927449200,
  "status": "passed"
});
formatter.match({
  "location": "TaskStepDefinition.check_user_enters_right_count_of_values()"
});
formatter.result({
  "duration": 502907800,
  "status": "passed"
});
formatter.after({
  "duration": 2081973200,
  "status": "passed"
});
formatter.before({
  "duration": 2637035300,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "User is on add values page",
  "keyword": "Given "
});
formatter.match({
  "location": "TaskStepDefinition.user_is_on_add_values_page()"
});
formatter.result({
  "duration": 7081100,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "To verify right count of values appears on screen",
  "description": "",
  "id": "add-values;to-verify-right-count-of-values-appears-on-screen;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 8,
  "name": "user enters \"$122,365.24\", \"$599.00\", \"$850,139.99\", \"$23,329.50\" , \"$34.9\"",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "check user enters right count of values",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "$122,365.24",
      "offset": 13
    },
    {
      "val": "$599.00",
      "offset": 28
    },
    {
      "val": "$850,139.99",
      "offset": 39
    },
    {
      "val": "$23,329.50",
      "offset": 54
    },
    {
      "val": "$34.9",
      "offset": 69
    }
  ],
  "location": "TaskStepDefinition.user_enters(String,String,String,String,String)"
});
formatter.result({
  "duration": 523425800,
  "status": "passed"
});
formatter.match({
  "location": "TaskStepDefinition.check_user_enters_right_count_of_values()"
});
formatter.result({
  "duration": 163615000,
  "status": "passed"
});
formatter.after({
  "duration": 3322322500,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 16,
  "name": "To verify values present on the screen greater than 0",
  "description": "",
  "id": "add-values;to-verify-values-present-on-the-screen-greater-than-0",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 17,
  "name": "user enters \"\u003cval1\u003e\", \"\u003cval2\u003e\", \"\u003cval3\u003e\", \"\u003cval4\u003e\" , \"\u003cval5\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "check entered values are geater than zero",
  "keyword": "Then "
});
formatter.examples({
  "line": 20,
  "name": "",
  "description": "",
  "id": "add-values;to-verify-values-present-on-the-screen-greater-than-0;",
  "rows": [
    {
      "cells": [
        "val1",
        "val2",
        "val3",
        "val4",
        "val5"
      ],
      "line": 21,
      "id": "add-values;to-verify-values-present-on-the-screen-greater-than-0;;1"
    },
    {
      "cells": [
        "$122,365.24",
        "$0",
        "$23,329.50",
        "$566.27",
        "$700"
      ],
      "line": 22,
      "id": "add-values;to-verify-values-present-on-the-screen-greater-than-0;;2"
    },
    {
      "cells": [
        "$122,365.24",
        "$599.00",
        "$850,139.99",
        "$23,329.50",
        "$566.27"
      ],
      "line": 23,
      "id": "add-values;to-verify-values-present-on-the-screen-greater-than-0;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 2388661900,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "User is on add values page",
  "keyword": "Given "
});
formatter.match({
  "location": "TaskStepDefinition.user_is_on_add_values_page()"
});
formatter.result({
  "duration": 9951400,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "To verify values present on the screen greater than 0",
  "description": "",
  "id": "add-values;to-verify-values-present-on-the-screen-greater-than-0;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 17,
  "name": "user enters \"$122,365.24\", \"$0\", \"$23,329.50\", \"$566.27\" , \"$700\"",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4
  ],
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "check entered values are geater than zero",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "$122,365.24",
      "offset": 13
    },
    {
      "val": "$0",
      "offset": 28
    },
    {
      "val": "$23,329.50",
      "offset": 34
    },
    {
      "val": "$566.27",
      "offset": 48
    },
    {
      "val": "$700",
      "offset": 60
    }
  ],
  "location": "TaskStepDefinition.user_enters(String,String,String,String,String)"
});
formatter.result({
  "duration": 619694100,
  "status": "passed"
});
formatter.match({
  "location": "TaskStepDefinition.check_entered_values_are_geater_than_zero()"
});
formatter.result({
  "duration": 297714700,
  "status": "passed"
});
formatter.after({
  "duration": 1022833800,
  "status": "passed"
});
formatter.before({
  "duration": 2571139000,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "User is on add values page",
  "keyword": "Given "
});
formatter.match({
  "location": "TaskStepDefinition.user_is_on_add_values_page()"
});
formatter.result({
  "duration": 11288400,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "To verify values present on the screen greater than 0",
  "description": "",
  "id": "add-values;to-verify-values-present-on-the-screen-greater-than-0;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 17,
  "name": "user enters \"$122,365.24\", \"$599.00\", \"$850,139.99\", \"$23,329.50\" , \"$566.27\"",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4
  ],
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "check entered values are geater than zero",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "$122,365.24",
      "offset": 13
    },
    {
      "val": "$599.00",
      "offset": 28
    },
    {
      "val": "$850,139.99",
      "offset": 39
    },
    {
      "val": "$23,329.50",
      "offset": 54
    },
    {
      "val": "$566.27",
      "offset": 69
    }
  ],
  "location": "TaskStepDefinition.user_enters(String,String,String,String,String)"
});
formatter.result({
  "duration": 562459800,
  "status": "passed"
});
formatter.match({
  "location": "TaskStepDefinition.check_entered_values_are_geater_than_zero()"
});
formatter.result({
  "duration": 170586800,
  "status": "passed"
});
formatter.after({
  "duration": 643693900,
  "status": "passed"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 25,
      "value": "#to verify if displayed balance in requirements matches to total sum"
    }
  ],
  "line": 27,
  "name": "To verify total balance is correct based on the values listed on screen",
  "description": "",
  "id": "add-values;to-verify-total-balance-is-correct-based-on-the-values-listed-on-screen",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 28,
  "name": "user enters \"\u003cval1\u003e\", \"\u003cval2\u003e\", \"\u003cval3\u003e\", \"\u003cval4\u003e\" , \"\u003cval5\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 29,
  "name": "check total balance is equal to sum of all values",
  "keyword": "Then "
});
formatter.examples({
  "line": 31,
  "name": "",
  "description": "",
  "id": "add-values;to-verify-total-balance-is-correct-based-on-the-values-listed-on-screen;",
  "rows": [
    {
      "cells": [
        "val1",
        "val2",
        "val3",
        "val4",
        "val5"
      ],
      "line": 32,
      "id": "add-values;to-verify-total-balance-is-correct-based-on-the-values-listed-on-screen;;1"
    },
    {
      "cells": [
        "$122,365.24",
        "$599.00",
        "$850,139.99",
        "$23,329.50",
        "$566.27"
      ],
      "line": 33,
      "id": "add-values;to-verify-total-balance-is-correct-based-on-the-values-listed-on-screen;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3068898000,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "User is on add values page",
  "keyword": "Given "
});
formatter.match({
  "location": "TaskStepDefinition.user_is_on_add_values_page()"
});
formatter.result({
  "duration": 7559100,
  "status": "passed"
});
formatter.scenario({
  "line": 33,
  "name": "To verify total balance is correct based on the values listed on screen",
  "description": "",
  "id": "add-values;to-verify-total-balance-is-correct-based-on-the-values-listed-on-screen;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 28,
  "name": "user enters \"$122,365.24\", \"$599.00\", \"$850,139.99\", \"$23,329.50\" , \"$566.27\"",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4
  ],
  "keyword": "When "
});
formatter.step({
  "line": 29,
  "name": "check total balance is equal to sum of all values",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "$122,365.24",
      "offset": 13
    },
    {
      "val": "$599.00",
      "offset": 28
    },
    {
      "val": "$850,139.99",
      "offset": 39
    },
    {
      "val": "$23,329.50",
      "offset": 54
    },
    {
      "val": "$566.27",
      "offset": 69
    }
  ],
  "location": "TaskStepDefinition.user_enters(String,String,String,String,String)"
});
formatter.result({
  "duration": 535694200,
  "status": "passed"
});
formatter.match({
  "location": "TaskStepDefinition.check_total_balance_is_equal_to_sum_of_all_values()"
});
formatter.result({
  "duration": 357673300,
  "status": "passed"
});
formatter.after({
  "duration": 681761100,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 35,
  "name": "To verify values are formated as currencies",
  "description": "",
  "id": "add-values;to-verify-values-are-formated-as-currencies",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 36,
  "name": "user enters \"\u003cval1\u003e\", \"\u003cval2\u003e\", \"\u003cval3\u003e\", \"\u003cval4\u003e\" , \"\u003cval5\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 37,
  "name": "check values are formated as currencies",
  "keyword": "Then "
});
formatter.examples({
  "line": 39,
  "name": "",
  "description": "",
  "id": "add-values;to-verify-values-are-formated-as-currencies;",
  "rows": [
    {
      "cells": [
        "val1",
        "val2",
        "val3",
        "val4",
        "val5"
      ],
      "line": 40,
      "id": "add-values;to-verify-values-are-formated-as-currencies;;1"
    },
    {
      "cells": [
        "$122,365.24",
        "$599.00",
        "$850,139.99",
        "$23,329.50",
        "$566.27"
      ],
      "line": 41,
      "id": "add-values;to-verify-values-are-formated-as-currencies;;2"
    },
    {
      "cells": [
        "$21,365.24",
        "$399.00",
        "$350,139.99",
        "$3,329.50",
        "$32.00"
      ],
      "line": 42,
      "id": "add-values;to-verify-values-are-formated-as-currencies;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3214364400,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "User is on add values page",
  "keyword": "Given "
});
formatter.match({
  "location": "TaskStepDefinition.user_is_on_add_values_page()"
});
formatter.result({
  "duration": 16533400,
  "status": "passed"
});
formatter.scenario({
  "line": 41,
  "name": "To verify values are formated as currencies",
  "description": "",
  "id": "add-values;to-verify-values-are-formated-as-currencies;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 36,
  "name": "user enters \"$122,365.24\", \"$599.00\", \"$850,139.99\", \"$23,329.50\" , \"$566.27\"",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4
  ],
  "keyword": "When "
});
formatter.step({
  "line": 37,
  "name": "check values are formated as currencies",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "$122,365.24",
      "offset": 13
    },
    {
      "val": "$599.00",
      "offset": 28
    },
    {
      "val": "$850,139.99",
      "offset": 39
    },
    {
      "val": "$23,329.50",
      "offset": 54
    },
    {
      "val": "$566.27",
      "offset": 69
    }
  ],
  "location": "TaskStepDefinition.user_enters(String,String,String,String,String)"
});
formatter.result({
  "duration": 601580200,
  "status": "passed"
});
formatter.match({
  "location": "TaskStepDefinition.check_values_are_formated_as_currencies()"
});
formatter.result({
  "duration": 157394900,
  "status": "passed"
});
formatter.after({
  "duration": 646412000,
  "status": "passed"
});
formatter.before({
  "duration": 2827246500,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "User is on add values page",
  "keyword": "Given "
});
formatter.match({
  "location": "TaskStepDefinition.user_is_on_add_values_page()"
});
formatter.result({
  "duration": 13764600,
  "status": "passed"
});
formatter.scenario({
  "line": 42,
  "name": "To verify values are formated as currencies",
  "description": "",
  "id": "add-values;to-verify-values-are-formated-as-currencies;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 36,
  "name": "user enters \"$21,365.24\", \"$399.00\", \"$350,139.99\", \"$3,329.50\" , \"$32.00\"",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4
  ],
  "keyword": "When "
});
formatter.step({
  "line": 37,
  "name": "check values are formated as currencies",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "$21,365.24",
      "offset": 13
    },
    {
      "val": "$399.00",
      "offset": 27
    },
    {
      "val": "$350,139.99",
      "offset": 38
    },
    {
      "val": "$3,329.50",
      "offset": 53
    },
    {
      "val": "$32.00",
      "offset": 67
    }
  ],
  "location": "TaskStepDefinition.user_enters(String,String,String,String,String)"
});
formatter.result({
  "duration": 873549700,
  "status": "passed"
});
formatter.match({
  "location": "TaskStepDefinition.check_values_are_formated_as_currencies()"
});
formatter.result({
  "duration": 264220900,
  "status": "passed"
});
formatter.after({
  "duration": 750694500,
  "status": "passed"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 44,
      "value": "#scenario similar to 3rd scenario here differnt values are passsed"
    }
  ],
  "line": 46,
  "name": "To verify total balance matches the sum of all values",
  "description": "",
  "id": "add-values;to-verify-total-balance-matches-the-sum-of-all-values",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 47,
  "name": "user enters \"\u003cval1\u003e\", \"\u003cval2\u003e\", \"\u003cval3\u003e\", \"\u003cval4\u003e\" , \"\u003cval5\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 48,
  "name": "check total balance is equal to sum of all values",
  "keyword": "Then "
});
formatter.examples({
  "line": 50,
  "name": "",
  "description": "",
  "id": "add-values;to-verify-total-balance-matches-the-sum-of-all-values;",
  "rows": [
    {
      "cells": [
        "val1",
        "val2",
        "val3",
        "val4",
        "val5"
      ],
      "line": 51,
      "id": "add-values;to-verify-total-balance-matches-the-sum-of-all-values;;1"
    },
    {
      "cells": [
        "$122.24",
        "$599.00",
        "$850,139.99",
        "$23,329.50",
        "$566.27"
      ],
      "line": 52,
      "id": "add-values;to-verify-total-balance-matches-the-sum-of-all-values;;2"
    },
    {
      "cells": [
        "$21,365.24",
        "$399.00",
        "$350,139.99",
        "$3,329.50",
        "$32.00"
      ],
      "line": 53,
      "id": "add-values;to-verify-total-balance-matches-the-sum-of-all-values;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 2394556700,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "User is on add values page",
  "keyword": "Given "
});
formatter.match({
  "location": "TaskStepDefinition.user_is_on_add_values_page()"
});
formatter.result({
  "duration": 21821000,
  "status": "passed"
});
formatter.scenario({
  "line": 52,
  "name": "To verify total balance matches the sum of all values",
  "description": "",
  "id": "add-values;to-verify-total-balance-matches-the-sum-of-all-values;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 47,
  "name": "user enters \"$122.24\", \"$599.00\", \"$850,139.99\", \"$23,329.50\" , \"$566.27\"",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4
  ],
  "keyword": "When "
});
formatter.step({
  "line": 48,
  "name": "check total balance is equal to sum of all values",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "$122.24",
      "offset": 13
    },
    {
      "val": "$599.00",
      "offset": 24
    },
    {
      "val": "$850,139.99",
      "offset": 35
    },
    {
      "val": "$23,329.50",
      "offset": 50
    },
    {
      "val": "$566.27",
      "offset": 65
    }
  ],
  "location": "TaskStepDefinition.user_enters(String,String,String,String,String)"
});
formatter.result({
  "duration": 1024898300,
  "status": "passed"
});
formatter.match({
  "location": "TaskStepDefinition.check_total_balance_is_equal_to_sum_of_all_values()"
});
formatter.result({
  "duration": 475607300,
  "status": "passed"
});
formatter.after({
  "duration": 695277700,
  "status": "passed"
});
formatter.before({
  "duration": 2569876700,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "User is on add values page",
  "keyword": "Given "
});
formatter.match({
  "location": "TaskStepDefinition.user_is_on_add_values_page()"
});
formatter.result({
  "duration": 9325100,
  "status": "passed"
});
formatter.scenario({
  "line": 53,
  "name": "To verify total balance matches the sum of all values",
  "description": "",
  "id": "add-values;to-verify-total-balance-matches-the-sum-of-all-values;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 47,
  "name": "user enters \"$21,365.24\", \"$399.00\", \"$350,139.99\", \"$3,329.50\" , \"$32.00\"",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4
  ],
  "keyword": "When "
});
formatter.step({
  "line": 48,
  "name": "check total balance is equal to sum of all values",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "$21,365.24",
      "offset": 13
    },
    {
      "val": "$399.00",
      "offset": 27
    },
    {
      "val": "$350,139.99",
      "offset": 38
    },
    {
      "val": "$3,329.50",
      "offset": 53
    },
    {
      "val": "$32.00",
      "offset": 67
    }
  ],
  "location": "TaskStepDefinition.user_enters(String,String,String,String,String)"
});
formatter.result({
  "duration": 513052000,
  "status": "passed"
});
formatter.match({
  "location": "TaskStepDefinition.check_total_balance_is_equal_to_sum_of_all_values()"
});
formatter.result({
  "duration": 348210600,
  "status": "passed"
});
formatter.after({
  "duration": 665699600,
  "status": "passed"
});
});