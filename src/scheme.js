export const scheme = {
    "entities": {
        "User": {
            "name": "User",
            "fields": {
                "id": {
                    "name": "id",
                    "ref": null,
                    "type": "ID!"
                },
                "name": {
                    "name": "name",
                    "ref": null,
                    "type": "String!"
                },
                "email": {
                    "name": "email",
                    "ref": null,
                    "type": "String!"
                },
                "created_at": {
                    "name": "created_at",
                    "ref": null,
                    "type": "JsonType"
                },
                "updated_at": {
                    "name": "updated_at",
                    "ref": null,
                    "type": "JsonType"
                },
                "oauthClient": {
                    "name": "oauthClient",
                    "ref": "OauthClient",
                    "type": "[OauthClient]"
                }
            },
            "not_null_fields": [
                "id",
                "name",
                "email"
            ],
            "relative_fields": {
                "oauthClient": "OauthClient"
            },
            "referred_from": {
                "OauthClient": [
                    "user"
                ]
            },
            "queries": {
                "one": "getUser",
                "list": "getUsers"
            },
            "mutations": {
                "update": "updateUser",
                "new": "newUser",
                "remove": "removeUser"
            }
        },
        "OauthClient": {
            "name": "OauthClient",
            "fields": {
                "id": {
                    "name": "id",
                    "ref": null,
                    "type": "ID!"
                },
                "user_id": {
                    "name": "user_id",
                    "ref": null,
                    "type": "Int"
                },
                "name": {
                    "name": "name",
                    "ref": null,
                    "type": "String!"
                },
                "secret": {
                    "name": "secret",
                    "ref": null,
                    "type": "String!"
                },
                "redirect": {
                    "name": "redirect",
                    "ref": null,
                    "type": "String!"
                },
                "personal_access_client": {
                    "name": "personal_access_client",
                    "ref": null,
                    "type": "Boolean!"
                },
                "password_client": {
                    "name": "password_client",
                    "ref": null,
                    "type": "Boolean!"
                },
                "revoked": {
                    "name": "revoked",
                    "ref": null,
                    "type": "Boolean!"
                },
                "created_at": {
                    "name": "created_at",
                    "ref": null,
                    "type": "JsonType"
                },
                "updated_at": {
                    "name": "updated_at",
                    "ref": null,
                    "type": "JsonType"
                },
                "user": {
                    "name": "user",
                    "ref": "User",
                    "type": "User"
                }
            },
            "not_null_fields": [
                "id",
                "name",
                "secret",
                "redirect",
                "personal_access_client",
                "password_client",
                "revoked"
            ],
            "relative_fields": {
                "user": "User"
            },
            "referred_from": {
                "User": [
                    "oauthClient"
                ]
            }
        },
        "Company": {
            "name": "Company",
            "fields": {
                "id": {
                    "name": "id",
                    "ref": null,
                    "type": "ID!"
                },
                "name": {
                    "name": "name",
                    "ref": null,
                    "type": "String!"
                },
                "enabled": {
                    "name": "enabled",
                    "ref": null,
                    "type": "Boolean!"
                },
                "description": {
                    "name": "description",
                    "ref": null,
                    "type": "String"
                },
                "type_id": {
                    "name": "type_id",
                    "ref": null,
                    "type": "Int!"
                },
                "created_at": {
                    "name": "created_at",
                    "ref": null,
                    "type": "JsonType"
                },
                "updated_at": {
                    "name": "updated_at",
                    "ref": null,
                    "type": "JsonType"
                },
                "type": {
                    "name": "type",
                    "ref": "CompanyType",
                    "type": "CompanyType"
                },
                "products": {
                    "name": "products",
                    "ref": "Product",
                    "type": "[Product]"
                }
            },
            "not_null_fields": [
                "id",
                "name",
                "enabled",
                "type_id"
            ],
            "relative_fields": {
                "type": "CompanyType",
                "products": "Product"
            },
            "referred_from": {
                "CompanyType": [
                    "companies"
                ],
                "Product": [
                    "company"
                ]
            },
            "queries": {
                "one": "getCompany",
                "list": "getCompanies"
            },
            "mutations": {
                "new": "newCompany",
                "remove": "removeCompany",
                "update": "updateCompany"
            }
        },
        "CompanyType": {
            "name": "CompanyType",
            "fields": {
                "id": {
                    "name": "id",
                    "ref": null,
                    "type": "ID!"
                },
                "name": {
                    "name": "name",
                    "ref": null,
                    "type": "String!"
                },
                "created_at": {
                    "name": "created_at",
                    "ref": null,
                    "type": "JsonType"
                },
                "updated_at": {
                    "name": "updated_at",
                    "ref": null,
                    "type": "JsonType"
                },
                "companies": {
                    "name": "companies",
                    "ref": "Company",
                    "type": "[Company]"
                }
            },
            "not_null_fields": [
                "id",
                "name"
            ],
            "relative_fields": {
                "companies": "Company"
            },
            "referred_from": {
                "Company": [
                    "type"
                ]
            },
            "queries": {
                "list": "getCompanyTypes",
                "one": "getCompanyType"
            },
            "mutations": {
                "new": "newCompanyType",
                "update": "updateCompanyType",
                "remove": "removeCompanyType"
            }
        },
        "Product": {
            "name": "Product",
            "fields": {
                "id": {
                    "name": "id",
                    "ref": null,
                    "type": "ID!"
                },
                "name": {
                    "name": "name",
                    "ref": null,
                    "type": "String!"
                },
                "category_id": {
                    "name": "category_id",
                    "ref": null,
                    "type": "Int"
                },
                "type_id": {
                    "name": "type_id",
                    "ref": null,
                    "type": "Int"
                },
                "company_id": {
                    "name": "company_id",
                    "ref": null,
                    "type": "Int!"
                },
                "description": {
                    "name": "description",
                    "ref": null,
                    "type": "String"
                },
                "enabled": {
                    "name": "enabled",
                    "ref": null,
                    "type": "Boolean!"
                },
                "score": {
                    "name": "score",
                    "ref": null,
                    "type": "Int"
                },
                "created_at": {
                    "name": "created_at",
                    "ref": null,
                    "type": "JsonType"
                },
                "updated_at": {
                    "name": "updated_at",
                    "ref": null,
                    "type": "JsonType"
                },
                "company": {
                    "name": "company",
                    "ref": "Company",
                    "type": "Company"
                },
                "type": {
                    "name": "type",
                    "ref": "ProductType",
                    "type": "ProductType"
                },
                "category": {
                    "name": "category",
                    "ref": "ProductCategory",
                    "type": "ProductCategory"
                },
                "score_map": {
                    "name": "score_map",
                    "ref": "ScoreMap",
                    "type": "ScoreMap"
                },
                "ores": {
                    "name": "ores",
                    "ref": "RankType",
                    "type": "[RankType]"
                }
            },
            "not_null_fields": [
                "id",
                "name",
                "company_id",
                "enabled"
            ],
            "relative_fields": {
                "company": "Company",
                "type": "ProductType",
                "category": "ProductCategory",
                "score_map": "ScoreMap",
                "ores": "RankType"
            },
            "referred_from": {
                "Company": [
                    "products"
                ],
                "ProductType": [
                    "products"
                ],
                "ProductCategory": [
                    "products"
                ],
                "ScoreMap": [
                    "product"
                ],
                "RankType": [
                    "products"
                ]
            },
            "queries": {
                "one": "getProduct",
                "list": "getProducts"
            },
            "mutations": {
                "new": "newProduct",
                "remove": "removeProduct",
                "update": "updateProduct"
            }
        },
        "ProductType": {
            "name": "ProductType",
            "fields": {
                "id": {
                    "name": "id",
                    "ref": null,
                    "type": "ID!"
                },
                "name": {
                    "name": "name",
                    "ref": null,
                    "type": "String!"
                },
                "code": {
                    "name": "code",
                    "ref": null,
                    "type": "String"
                },
                "created_at": {
                    "name": "created_at",
                    "ref": null,
                    "type": "JsonType"
                },
                "updated_at": {
                    "name": "updated_at",
                    "ref": null,
                    "type": "JsonType"
                },
                "products": {
                    "name": "products",
                    "ref": "Product",
                    "type": "[Product]"
                }
            },
            "not_null_fields": [
                "id",
                "name"
            ],
            "relative_fields": {
                "products": "Product"
            },
            "referred_from": {
                "Product": [
                    "type"
                ]
            },
            "queries": {
                "list": "getProductTypes",
                "one": "getProductType"
            },
            "mutations": {
                "new": "newProductType",
                "update": "updateProductType",
                "remove": "removeProductType"
            }
        },
        "ProductCategory": {
            "name": "ProductCategory",
            "fields": {
                "id": {
                    "name": "id",
                    "ref": null,
                    "type": "ID!"
                },
                "name": {
                    "name": "name",
                    "ref": null,
                    "type": "String!"
                },
                "code": {
                    "name": "code",
                    "ref": null,
                    "type": "String"
                },
                "score": {
                    "name": "score",
                    "ref": null,
                    "type": "Int"
                },
                "created_at": {
                    "name": "created_at",
                    "ref": null,
                    "type": "JsonType"
                },
                "updated_at": {
                    "name": "updated_at",
                    "ref": null,
                    "type": "JsonType"
                },
                "steps": {
                    "name": "steps",
                    "ref": "Step",
                    "type": "[Step]"
                },
                "products": {
                    "name": "products",
                    "ref": "Product",
                    "type": "[Product]"
                },
                "questions": {
                    "name": "questions",
                    "ref": "Question",
                    "type": "[Question]"
                },
                "score_map": {
                    "name": "score_map",
                    "ref": "ScoreMap",
                    "type": "ScoreMap"
                },
                "ranks": {
                    "name": "ranks",
                    "ref": "CategoryRank",
                    "type": "[CategoryRank]"
                }
            },
            "not_null_fields": [
                "id",
                "name"
            ],
            "relative_fields": {
                "steps": "Step",
                "products": "Product",
                "questions": "Question",
                "score_map": "ScoreMap",
                "ranks": "CategoryRank"
            },
            "referred_from": {
                "Product": [
                    "category"
                ],
                "Step": [
                    "category"
                ],
                "ScoreMap": [
                    "category"
                ],
                "CategoryRank": [
                    "category"
                ],
                "QuestionActionType": [
                    "category"
                ],
                "ScoreResult": [
                    "category"
                ]
            },
            "queries": {
                "one": "getProductCategory",
                "list": "getProductCategories"
            },
            "mutations": {
                "new": "newProductCategory",
                "update": "updateProductCategory",
                "remove": "removeProductCategory"
            }
        },
        "Field": {
            "name": "Field",
            "fields": {
                "id": {
                    "name": "id",
                    "ref": null,
                    "type": "ID!"
                },
                "title": {
                    "name": "title",
                    "ref": null,
                    "type": "String!"
                },
                "name": {
                    "name": "name",
                    "ref": null,
                    "type": "String!"
                },
                "order": {
                    "name": "order",
                    "ref": null,
                    "type": "Int"
                },
                "description": {
                    "name": "description",
                    "ref": null,
                    "type": "String"
                },
                "enabled": {
                    "name": "enabled",
                    "ref": null,
                    "type": "Boolean!"
                },
                "calculated": {
                    "name": "calculated",
                    "ref": null,
                    "type": "Boolean!"
                },
                "system": {
                    "name": "system",
                    "ref": null,
                    "type": "Boolean!"
                },
                "created_at": {
                    "name": "created_at",
                    "ref": null,
                    "type": "JsonType"
                },
                "updated_at": {
                    "name": "updated_at",
                    "ref": null,
                    "type": "JsonType"
                },
                "answers": {
                    "name": "answers",
                    "ref": "Answer",
                    "type": "[Answer]"
                },
                "questions": {
                    "name": "questions",
                    "ref": "Question",
                    "type": "[Question]"
                },
                "rules": {
                    "name": "rules",
                    "ref": "ScoreRule",
                    "type": "[ScoreRule]"
                },
                "dep_rules": {
                    "name": "dep_rules",
                    "ref": "ScoreRule",
                    "type": "[ScoreRule]"
                },
                "filters": {
                    "name": "filters",
                    "ref": "ScoreFilter",
                    "type": "[ScoreFilter]"
                },
                "dep_filters": {
                    "name": "dep_filters",
                    "ref": "ScoreFilter",
                    "type": "[ScoreFilter]"
                }
            },
            "not_null_fields": [
                "id",
                "title",
                "name",
                "enabled",
                "calculated",
                "system"
            ],
            "relative_fields": {
                "answers": "Answer",
                "questions": "Question",
                "rules": "ScoreRule",
                "dep_rules": "ScoreRule",
                "filters": "ScoreFilter",
                "dep_filters": "ScoreFilter"
            },
            "referred_from": {
                "Answer": [
                    "field"
                ],
                "Question": [
                    "field"
                ],
                "ScoreRule": [
                    "field",
                    "dep_field"
                ],
                "ScoreFilter": [
                    "field",
                    "dep_field"
                ]
            },
            "queries": {
                "list": "getFields",
                "one": "getField"
            },
            "mutations": {
                "new": "newField",
                "update": "updateField",
                "remove": "removeField"
            }
        },
        "AnswerType": {
            "name": "AnswerType",
            "fields": {
                "id": {
                    "name": "id",
                    "ref": null,
                    "type": "ID!"
                },
                "title": {
                    "name": "title",
                    "ref": null,
                    "type": "String!"
                },
                "name": {
                    "name": "name",
                    "ref": null,
                    "type": "String!"
                },
                "is_button": {
                    "name": "is_button",
                    "ref": null,
                    "type": "Boolean!"
                },
                "is_input": {
                    "name": "is_input",
                    "ref": null,
                    "type": "Boolean!"
                },
                "is_select": {
                    "name": "is_select",
                    "ref": null,
                    "type": "Boolean!"
                },
                "description": {
                    "name": "description",
                    "ref": null,
                    "type": "String"
                },
                "created_at": {
                    "name": "created_at",
                    "ref": null,
                    "type": "JsonType"
                },
                "updated_at": {
                    "name": "updated_at",
                    "ref": null,
                    "type": "JsonType"
                },
                "answers": {
                    "name": "answers",
                    "ref": "Answer",
                    "type": "[Answer]"
                }
            },
            "not_null_fields": [
                "id",
                "title",
                "name",
                "is_button",
                "is_input",
                "is_select"
            ],
            "relative_fields": {
                "answers": "Answer"
            },
            "referred_from": {
                "Answer": [
                    "type"
                ]
            },
            "queries": {
                "list": "getAnswerTypes",
                "one": "getAnswerType"
            },
            "mutations": {
                "new": "newAnswerType",
                "update": "updateAnswerType",
                "remove": "removeAnswerType"
            }
        },
        "Answer": {
            "name": "Answer",
            "fields": {
                "id": {
                    "name": "id",
                    "ref": null,
                    "type": "ID!"
                },
                "name": {
                    "name": "name",
                    "ref": null,
                    "type": "String!"
                },
                "enabled": {
                    "name": "enabled",
                    "ref": null,
                    "type": "Boolean!"
                },
                "value": {
                    "name": "value",
                    "ref": null,
                    "type": "String"
                },
                "values": {
                    "name": "values",
                    "ref": null,
                    "type": "JsonType"
                },
                "title": {
                    "name": "title",
                    "ref": null,
                    "type": "String"
                },
                "placeholder": {
                    "name": "placeholder",
                    "ref": null,
                    "type": "String"
                },
                "label": {
                    "name": "label",
                    "ref": null,
                    "type": "String"
                },
                "position": {
                    "name": "position",
                    "ref": null,
                    "type": "Int"
                },
                "type_id": {
                    "name": "type_id",
                    "ref": null,
                    "type": "Int!"
                },
                "field_id": {
                    "name": "field_id",
                    "ref": null,
                    "type": "Int!"
                },
                "question_id": {
                    "name": "question_id",
                    "ref": null,
                    "type": "Int!"
                },
                "is_currency": {
                    "name": "is_currency",
                    "ref": null,
                    "type": "Boolean!"
                },
                "is_month": {
                    "name": "is_month",
                    "ref": null,
                    "type": "Boolean!"
                },
                "is_iin": {
                    "name": "is_iin",
                    "ref": null,
                    "type": "Boolean!"
                },
                "is_mail": {
                    "name": "is_mail",
                    "ref": null,
                    "type": "Boolean!"
                },
                "is_phone": {
                    "name": "is_phone",
                    "ref": null,
                    "type": "Boolean!"
                },
                "created_at": {
                    "name": "created_at",
                    "ref": null,
                    "type": "JsonType"
                },
                "updated_at": {
                    "name": "updated_at",
                    "ref": null,
                    "type": "JsonType"
                },
                "type": {
                    "name": "type",
                    "ref": "AnswerType",
                    "type": "AnswerType"
                },
                "field": {
                    "name": "field",
                    "ref": "Field",
                    "type": "Field"
                },
                "question": {
                    "name": "question",
                    "ref": "Question",
                    "type": "Question"
                },
                "question_acts": {
                    "name": "question_acts",
                    "ref": "QuestionActionType",
                    "type": "[QuestionActionType]"
                },
                "step_acts": {
                    "name": "step_acts",
                    "ref": "StepAction",
                    "type": "[StepAction]"
                }
            },
            "not_null_fields": [
                "id",
                "name",
                "enabled",
                "type_id",
                "field_id",
                "question_id",
                "is_currency",
                "is_month",
                "is_iin",
                "is_mail",
                "is_phone"
            ],
            "relative_fields": {
                "type": "AnswerType",
                "field": "Field",
                "question": "Question",
                "question_acts": "QuestionActionType",
                "step_acts": "StepAction"
            },
            "referred_from": {
                "Field": [
                    "answers"
                ],
                "AnswerType": [
                    "answers"
                ],
                "Question": [
                    "answers"
                ],
                "QuestionActionType": [
                    "answer"
                ],
                "StepAction": [
                    "answer"
                ]
            },
            "queries": {
                "list": "getAnswers",
                "one": "getAnswer"
            },
            "mutations": {
                "new": "newAnswer",
                "update": "updateAnswer",
                "remove": "removeAnswer"
            }
        },
        "QuestionType": {
            "name": "QuestionType",
            "fields": {
                "id": {
                    "name": "id",
                    "ref": null,
                    "type": "ID!"
                },
                "name": {
                    "name": "name",
                    "ref": null,
                    "type": "String!"
                },
                "type": {
                    "name": "type",
                    "ref": null,
                    "type": "String!"
                },
                "description": {
                    "name": "description",
                    "ref": null,
                    "type": "String"
                },
                "created_at": {
                    "name": "created_at",
                    "ref": null,
                    "type": "JsonType"
                },
                "updated_at": {
                    "name": "updated_at",
                    "ref": null,
                    "type": "JsonType"
                },
                "question": {
                    "name": "question",
                    "ref": "Question",
                    "type": "[Question]"
                }
            },
            "not_null_fields": [
                "id",
                "name",
                "type"
            ],
            "relative_fields": {
                "question": "Question"
            },
            "referred_from": {
                "Question": [
                    "type"
                ]
            },
            "queries": {
                "list": "getQuestionTypes",
                "one": "getQuestionType"
            },
            "mutations": {
                "new": "newQuestionType",
                "update": "updateQuestionType",
                "remove": "removeQuestionType"
            }
        },
        "Question": {
            "name": "Question",
            "fields": {
                "id": {
                    "name": "id",
                    "ref": null,
                    "type": "ID!"
                },
                "name": {
                    "name": "name",
                    "ref": null,
                    "type": "String!"
                },
                "question_code": {
                    "name": "question_code",
                    "ref": null,
                    "type": "String!"
                },
                "enabled": {
                    "name": "enabled",
                    "ref": null,
                    "type": "Boolean!"
                },
                "type_id": {
                    "name": "type_id",
                    "ref": null,
                    "type": "Int!"
                },
                "field_id": {
                    "name": "field_id",
                    "ref": null,
                    "type": "Int!"
                },
                "position": {
                    "name": "position",
                    "ref": null,
                    "type": "Int"
                },
                "created_at": {
                    "name": "created_at",
                    "ref": null,
                    "type": "JsonType"
                },
                "updated_at": {
                    "name": "updated_at",
                    "ref": null,
                    "type": "JsonType"
                },
                "type": {
                    "name": "type",
                    "ref": "QuestionType",
                    "type": "QuestionType"
                },
                "field": {
                    "name": "field",
                    "ref": "Field",
                    "type": "Field"
                },
                "answers": {
                    "name": "answers",
                    "ref": "Answer",
                    "type": "[Answer]"
                },
                "actions": {
                    "name": "actions",
                    "ref": "QuestionActionType",
                    "type": "[QuestionActionType]"
                },
                "steps": {
                    "name": "steps",
                    "ref": "Step",
                    "type": "[Step]"
                },
                "state": {
                    "name": "state",
                    "ref": "QuestionState",
                    "type": "QuestionState"
                }
            },
            "not_null_fields": [
                "id",
                "name",
                "question_code",
                "enabled",
                "type_id",
                "field_id"
            ],
            "relative_fields": {
                "type": "QuestionType",
                "field": "Field",
                "answers": "Answer",
                "actions": "QuestionActionType",
                "steps": "Step",
                "state": "QuestionState"
            },
            "referred_from": {
                "ProductCategory": [
                    "questions"
                ],
                "Field": [
                    "questions"
                ],
                "Answer": [
                    "question"
                ],
                "QuestionType": [
                    "question"
                ],
                "Step": [
                    "questions"
                ],
                "QuestionState": [
                    "question"
                ],
                "QuestionActionType": [
                    "question"
                ]
            },
            "queries": {
                "list": "getQuestions",
                "one": "getQuestion"
            },
            "mutations": {
                "new": "newQuestion",
                "update": "updateQuestion",
                "remove": "removeQuestion"
            }
        },
        "Step": {
            "name": "Step",
            "fields": {
                "id": {
                    "name": "id",
                    "ref": null,
                    "type": "ID!"
                },
                "name": {
                    "name": "name",
                    "ref": null,
                    "type": "String!"
                },
                "enabled": {
                    "name": "enabled",
                    "ref": null,
                    "type": "Boolean!"
                },
                "category_id": {
                    "name": "category_id",
                    "ref": null,
                    "type": "Int!"
                },
                "number": {
                    "name": "number",
                    "ref": null,
                    "type": "Int"
                },
                "title": {
                    "name": "title",
                    "ref": null,
                    "type": "String"
                },
                "bar_text_top": {
                    "name": "bar_text_top",
                    "ref": null,
                    "type": "String"
                },
                "bar_text_bottom": {
                    "name": "bar_text_bottom",
                    "ref": null,
                    "type": "String"
                },
                "position": {
                    "name": "position",
                    "ref": null,
                    "type": "Int"
                },
                "show_title": {
                    "name": "show_title",
                    "ref": null,
                    "type": "Boolean!"
                },
                "code": {
                    "name": "code",
                    "ref": null,
                    "type": "String"
                },
                "created_at": {
                    "name": "created_at",
                    "ref": null,
                    "type": "JsonType"
                },
                "updated_at": {
                    "name": "updated_at",
                    "ref": null,
                    "type": "JsonType"
                },
                "category": {
                    "name": "category",
                    "ref": "ProductCategory",
                    "type": "ProductCategory"
                },
                "questions": {
                    "name": "questions",
                    "ref": "Question",
                    "type": "[Question]"
                },
                "state": {
                    "name": "state",
                    "ref": "StepState",
                    "type": "StepState"
                }
            },
            "not_null_fields": [
                "id",
                "name",
                "enabled",
                "category_id",
                "show_title"
            ],
            "relative_fields": {
                "category": "ProductCategory",
                "questions": "Question",
                "state": "StepState"
            },
            "referred_from": {
                "ProductCategory": [
                    "steps"
                ],
                "Question": [
                    "steps"
                ],
                "StepState": [
                    "step"
                ],
                "StepAction": [
                    "step"
                ]
            },
            "queries": {
                "list": "getSteps",
                "one": "getStep"
            },
            "mutations": {
                "new": "newStep",
                "update": "updateStep",
                "remove": "removeStep",
                "attach": "attachStep",
                "detach": "detachStep"
            }
        },
        "ScoreMap": {
            "name": "ScoreMap",
            "fields": {
                "id": {
                    "name": "id",
                    "ref": null,
                    "type": "ID!"
                },
                "name": {
                    "name": "name",
                    "ref": null,
                    "type": "String!"
                },
                "is_product": {
                    "name": "is_product",
                    "ref": null,
                    "type": "Boolean!"
                },
                "category_id": {
                    "name": "category_id",
                    "ref": null,
                    "type": "Int"
                },
                "product_id": {
                    "name": "product_id",
                    "ref": null,
                    "type": "Int"
                },
                "created_at": {
                    "name": "created_at",
                    "ref": null,
                    "type": "JsonType"
                },
                "updated_at": {
                    "name": "updated_at",
                    "ref": null,
                    "type": "JsonType"
                },
                "category": {
                    "name": "category",
                    "ref": "ProductCategory",
                    "type": "ProductCategory"
                },
                "product": {
                    "name": "product",
                    "ref": "Product",
                    "type": "Product"
                },
                "rules": {
                    "name": "rules",
                    "ref": "ScoreRule",
                    "type": "[ScoreRule]"
                },
                "filters": {
                    "name": "filters",
                    "ref": "ScoreFilter",
                    "type": "[ScoreFilter]"
                }
            },
            "not_null_fields": [
                "id",
                "name",
                "is_product"
            ],
            "relative_fields": {
                "category": "ProductCategory",
                "product": "Product",
                "rules": "ScoreRule",
                "filters": "ScoreFilter"
            },
            "referred_from": {
                "Product": [
                    "score_map"
                ],
                "ProductCategory": [
                    "score_map"
                ],
                "ScoreRule": [
                    "score_map"
                ],
                "ScoreFilter": [
                    "score_map"
                ]
            },
            "queries": {
                "list": "getScoreMaps",
                "one": "getScoreMap"
            },
            "mutations": {
                "new": "newScoreMap",
                "update": "updateScoreMap",
                "remove": "removeScoreMap"
            }
        },
        "ScoreRule": {
            "name": "ScoreRule",
            "fields": {
                "id": {
                    "name": "id",
                    "ref": null,
                    "type": "ID!"
                },
                "name": {
                    "name": "name",
                    "ref": null,
                    "type": "String"
                },
                "type": {
                    "name": "type",
                    "ref": null,
                    "type": "String!"
                },
                "enabled": {
                    "name": "enabled",
                    "ref": null,
                    "type": "Boolean!"
                },
                "score_map_id": {
                    "name": "score_map_id",
                    "ref": null,
                    "type": "Int!"
                },
                "field_id": {
                    "name": "field_id",
                    "ref": null,
                    "type": "Int!"
                },
                "dep_field_id": {
                    "name": "dep_field_id",
                    "ref": null,
                    "type": "Int"
                },
                "condition": {
                    "name": "condition",
                    "ref": null,
                    "type": "JsonType!"
                },
                "values": {
                    "name": "values",
                    "ref": null,
                    "type": "JsonType!"
                },
                "created_at": {
                    "name": "created_at",
                    "ref": null,
                    "type": "JsonType"
                },
                "updated_at": {
                    "name": "updated_at",
                    "ref": null,
                    "type": "JsonType"
                },
                "field": {
                    "name": "field",
                    "ref": "Field",
                    "type": "Field"
                },
                "dep_field": {
                    "name": "dep_field",
                    "ref": "Field",
                    "type": "Field"
                },
                "score_map": {
                    "name": "score_map",
                    "ref": "ScoreMap",
                    "type": "ScoreMap"
                }
            },
            "not_null_fields": [
                "id",
                "type",
                "enabled",
                "score_map_id",
                "field_id",
                "condition",
                "values"
            ],
            "relative_fields": {
                "field": "Field",
                "dep_field": "Field",
                "score_map": "ScoreMap"
            },
            "referred_from": {
                "Field": [
                    "rules",
                    "dep_rules"
                ],
                "ScoreMap": [
                    "rules"
                ]
            },
            "queries": {
                "list": "getScoreRules",
                "one": "getScoreRule"
            },
            "mutations": {
                "remove": "removeRule",
                "update": "updateRule",
                "new": [
                    "newRule",
                    "newLogicRule",
                    "newRangeRule",
                    "newListRule",
                    "newTreeLogicRule",
                    "newTreeRangeRule",
                    "newTreeListRule"
                ]
            }
        },
        "ScoreFilter": {
            "name": "ScoreFilter",
            "fields": {
                "id": {
                    "name": "id",
                    "ref": null,
                    "type": "ID!"
                },
                "name": {
                    "name": "name",
                    "ref": null,
                    "type": "String"
                },
                "type": {
                    "name": "type",
                    "ref": null,
                    "type": "String!"
                },
                "enabled": {
                    "name": "enabled",
                    "ref": null,
                    "type": "Boolean!"
                },
                "score_map_id": {
                    "name": "score_map_id",
                    "ref": null,
                    "type": "Int!"
                },
                "field_id": {
                    "name": "field_id",
                    "ref": null,
                    "type": "Int!"
                },
                "dep_field_id": {
                    "name": "dep_field_id",
                    "ref": null,
                    "type": "Int"
                },
                "condition": {
                    "name": "condition",
                    "ref": null,
                    "type": "JsonType!"
                },
                "created_at": {
                    "name": "created_at",
                    "ref": null,
                    "type": "JsonType"
                },
                "updated_at": {
                    "name": "updated_at",
                    "ref": null,
                    "type": "JsonType"
                },
                "field": {
                    "name": "field",
                    "ref": "Field",
                    "type": "Field"
                },
                "dep_field": {
                    "name": "dep_field",
                    "ref": "Field",
                    "type": "Field"
                },
                "score_map": {
                    "name": "score_map",
                    "ref": "ScoreMap",
                    "type": "ScoreMap"
                }
            },
            "not_null_fields": [
                "id",
                "type",
                "enabled",
                "score_map_id",
                "field_id",
                "condition"
            ],
            "relative_fields": {
                "field": "Field",
                "dep_field": "Field",
                "score_map": "ScoreMap"
            },
            "referred_from": {
                "Field": [
                    "filters",
                    "dep_filters"
                ],
                "ScoreMap": [
                    "filters"
                ]
            },
            "queries": {
                "list": "getScoreFilters",
                "one": "getScoreFilter"
            },
            "mutations": {
                "remove": "removeFilter",
                "update": "updateFilter",
                "new": [
                    "newFilter",
                    "newLogicFilter",
                    "newRangeFilter",
                    "newListFilter",
                    "newTreeLogicFilter",
                    "newTreeRangeFilter",
                    "newTreeListFilter"
                ]
            }
        },
        "RankType": {
            "name": "RankType",
            "fields": {
                "id": {
                    "name": "id",
                    "ref": null,
                    "type": "ID!"
                },
                "title": {
                    "name": "title",
                    "ref": null,
                    "type": "String!"
                },
                "name": {
                    "name": "name",
                    "ref": null,
                    "type": "String!"
                },
                "default": {
                    "name": "default",
                    "ref": null,
                    "type": "Boolean!"
                },
                "created_at": {
                    "name": "created_at",
                    "ref": null,
                    "type": "JsonType"
                },
                "updated_at": {
                    "name": "updated_at",
                    "ref": null,
                    "type": "JsonType"
                },
                "ranks": {
                    "name": "ranks",
                    "ref": "CategoryRank",
                    "type": "[CategoryRank]"
                },
                "products": {
                    "name": "products",
                    "ref": "Product",
                    "type": "[Product]"
                }
            },
            "not_null_fields": [
                "id",
                "title",
                "name",
                "default"
            ],
            "relative_fields": {
                "ranks": "CategoryRank",
                "products": "Product"
            },
            "referred_from": {
                "Product": [
                    "ores"
                ],
                "CategoryRank": [
                    "rank"
                ]
            },
            "queries": {
                "one": "getRank",
                "list": "getRanks"
            },
            "mutations": {
                "new": "newRank",
                "update": "updateRank",
                "remove": "removeRank",
                "attach": "attachProduct",
                "detach": "detachProduct"
            }
        },
        "CategoryRank": {
            "name": "CategoryRank",
            "fields": {
                "id": {
                    "name": "id",
                    "ref": null,
                    "type": "ID!"
                },
                "score": {
                    "name": "score",
                    "ref": null,
                    "type": "Int!"
                },
                "rank_id": {
                    "name": "rank_id",
                    "ref": null,
                    "type": "Int!"
                },
                "category_id": {
                    "name": "category_id",
                    "ref": null,
                    "type": "Int!"
                },
                "created_at": {
                    "name": "created_at",
                    "ref": null,
                    "type": "JsonType"
                },
                "updated_at": {
                    "name": "updated_at",
                    "ref": null,
                    "type": "JsonType"
                },
                "rank": {
                    "name": "rank",
                    "ref": "RankType",
                    "type": "RankType"
                },
                "category": {
                    "name": "category",
                    "ref": "ProductCategory",
                    "type": "ProductCategory"
                }
            },
            "not_null_fields": [
                "id",
                "score",
                "rank_id",
                "category_id"
            ],
            "relative_fields": {
                "rank": "RankType",
                "category": "ProductCategory"
            },
            "referred_from": {
                "ProductCategory": [
                    "ranks"
                ],
                "RankType": [
                    "ranks"
                ]
            },
            "queries": {
                "one": "getCategoryRank",
                "list": "getCategoryRanks"
            },
            "mutations": {
                "new": "newCategoryRank",
                "update": "updateCategoryRank",
                "remove": "removeCategoryRank"
            }
        },
        "StepState": {
            "name": "StepState",
            "fields": {
                "id": {
                    "name": "id",
                    "ref": null,
                    "type": "ID!"
                },
                "state": {
                    "name": "state",
                    "ref": null,
                    "type": "String!"
                },
                "step_id": {
                    "name": "step_id",
                    "ref": null,
                    "type": "Int!"
                },
                "created_at": {
                    "name": "created_at",
                    "ref": null,
                    "type": "JsonType"
                },
                "updated_at": {
                    "name": "updated_at",
                    "ref": null,
                    "type": "JsonType"
                },
                "step": {
                    "name": "step",
                    "ref": "Step",
                    "type": "Step"
                }
            },
            "not_null_fields": [
                "id",
                "state",
                "step_id"
            ],
            "relative_fields": {
                "step": "Step"
            },
            "referred_from": {
                "Step": [
                    "state"
                ]
            },
            "mutations": {
                "push": "pushStepState",
                "remove": "removeStepState"
            }
        },
        "QuestionState": {
            "name": "QuestionState",
            "fields": {
                "id": {
                    "name": "id",
                    "ref": null,
                    "type": "ID!"
                },
                "state": {
                    "name": "state",
                    "ref": null,
                    "type": "String!"
                },
                "question_id": {
                    "name": "question_id",
                    "ref": null,
                    "type": "Int!"
                },
                "created_at": {
                    "name": "created_at",
                    "ref": null,
                    "type": "JsonType"
                },
                "updated_at": {
                    "name": "updated_at",
                    "ref": null,
                    "type": "JsonType"
                },
                "question": {
                    "name": "question",
                    "ref": "Question",
                    "type": "Question"
                }
            },
            "not_null_fields": [
                "id",
                "state",
                "question_id"
            ],
            "relative_fields": {
                "question": "Question"
            },
            "referred_from": {
                "Question": [
                    "state"
                ]
            },
            "queries": {
                "one": "getQuestionState",
                "list": "getQuestionStates"
            },
            "mutations": {
                "push": "pushQuestionState",
                "remove": "removeQuestionState"
            }
        },
        "QuestionActionType": {
            "name": "QuestionActionType",
            "fields": {
                "id": {
                    "name": "id",
                    "ref": null,
                    "type": "ID!"
                },
                "answer_id": {
                    "name": "question_id",
                    "ref": null,
                    "type": "Int!"
                },
                "question_id": {
                    "name": "question_id",
                    "ref": null,
                    "type": "Int!"
                },
                "category_id": {
                    "name": "category_id",
                    "ref": null,
                    "type": "Int!"
                },
                "action": {
                    "name": "action",
                    "ref": null,
                    "type": "String"
                },
                "created_at": {
                    "name": "created_at",
                    "ref": null,
                    "type": "JsonType"
                },
                "updated_at": {
                    "name": "updated_at",
                    "ref": null,
                    "type": "JsonType"
                },
                "category": {
                    "name": "category",
                    "ref": "ProductCategory",
                    "type": "ProductCategory"
                },
                "answer": {
                    "name": "answer",
                    "ref": "Answer",
                    "type": "Answer"
                },
                "question": {
                    "name": "question",
                    "ref": "Question",
                    "type": "Question"
                }
            },
            "not_null_fields": [
                "id",
                "question_id",
                "question_id",
                "category_id"
            ],
            "relative_fields": {
                "category": "ProductCategory",
                "answer": "Answer",
                "question": "Question"
            },
            "referred_from": {
                "Answer": [
                    "question_acts"
                ],
                "Question": [
                    "actions"
                ]
            },
            "queries": {
                "one": "getQuestionAction",
                "list": "getQuestionActions"
            },
            "mutations": {
                "new": "newQuestionAction",
                "update": "updateQuestionAction",
                "remove": "removeQuestionAction"
            }
        },
        "StepAction": {
            "name": "StepAction",
            "fields": {
                "id": {
                    "name": "id",
                    "ref": null,
                    "type": "ID!"
                },
                "answer_id": {
                    "name": "question_id",
                    "ref": null,
                    "type": "Int!"
                },
                "step_id": {
                    "name": "step_id",
                    "ref": null,
                    "type": "Int!"
                },
                "action": {
                    "name": "action",
                    "ref": null,
                    "type": "String"
                },
                "created_at": {
                    "name": "created_at",
                    "ref": null,
                    "type": "JsonType"
                },
                "updated_at": {
                    "name": "updated_at",
                    "ref": null,
                    "type": "JsonType"
                },
                "answer": {
                    "name": "answer",
                    "ref": "Answer",
                    "type": "Answer"
                },
                "step": {
                    "name": "step",
                    "ref": "Step",
                    "type": "Step"
                }
            },
            "not_null_fields": [
                "id",
                "question_id",
                "step_id"
            ],
            "relative_fields": {
                "answer": "Answer",
                "step": "Step"
            },
            "referred_from": {
                "Answer": [
                    "step_acts"
                ]
            },
            "queries": {
                "one": "getStepAction",
                "list": "getStepActions"
            },
            "mutations": {
                "new": "newStepAction",
                "update": "updateStepAction",
                "remove": "removeStepAction"
            }
        },
        "ScoreResult": {
            "name": "ScoreResult",
            "fields": {
                "id": {
                    "name": "id",
                    "ref": null,
                    "type": "ID!"
                },
                "status": {
                    "name": "status",
                    "ref": null,
                    "type": "Int!"
                },
                "iin": {
                    "name": "iin",
                    "ref": null,
                    "type": "String"
                },
                "mobile_phone": {
                    "name": "mobile_phone",
                    "ref": null,
                    "type": "String"
                },
                "firstname": {
                    "name": "firstname",
                    "ref": null,
                    "type": "String"
                },
                "lastname": {
                    "name": "lastname",
                    "ref": null,
                    "type": "String"
                },
                "middlename": {
                    "name": "middlename",
                    "ref": null,
                    "type": "String"
                },
                "email": {
                    "name": "email",
                    "ref": null,
                    "type": "String"
                },
                "gender": {
                    "name": "gender",
                    "ref": null,
                    "type": "String"
                },
                "birthday": {
                    "name": "birthday",
                    "ref": null,
                    "type": "String"
                },
                "ore": {
                    "name": "ore",
                    "ref": null,
                    "type": "String"
                },
                "pass_score": {
                    "name": "pass_score",
                    "ref": null,
                    "type": "Boolean"
                },
                "pass_score_product": {
                    "name": "pass_score_product",
                    "ref": null,
                    "type": "Boolean"
                },
                "category_id": {
                    "name": "category_id",
                    "ref": null,
                    "type": "Int"
                },
                "category": {
                    "name": "category",
                    "ref": "ProductCategory",
                    "type": "ProductCategory"
                },
                "category_score_map": {
                    "name": "category_score_map",
                    "ref": null,
                    "type": "JsonType"
                },
                "category_score": {
                    "name": "category_score",
                    "ref": null,
                    "type": "JsonType"
                },
                "available_products": {
                    "name": "available_products",
                    "ref": null,
                    "type": "JsonType"
                },
                "products_score_maps": {
                    "name": "products_score_maps",
                    "ref": null,
                    "type": "JsonType"
                },
                "products_score": {
                    "name": "products_score",
                    "ref": null,
                    "type": "JsonType"
                },
                "passed_products_ids": {
                    "name": "passed_products_ids",
                    "ref": null,
                    "type": "JsonType"
                },
                "fields": {
                    "name": "fields",
                    "ref": null,
                    "type": "JsonType"
                },
                "user_fields": {
                    "name": "user_fields",
                    "ref": null,
                    "type": "JsonType"
                },
                "fails": {
                    "name": "fails",
                    "ref": null,
                    "type": "JsonType"
                },
                "created_at": {
                    "name": "created_at",
                    "ref": null,
                    "type": "JsonType"
                },
                "updated_at": {
                    "name": "updated_at",
                    "ref": null,
                    "type": "JsonType"
                }
            },
            "not_null_fields": [
                "id",
                "status"
            ],
            "relative_fields": {
                "category": "ProductCategory"
            },
            "referred_from": {
                "ScoreResultReport": [
                    "result"
                ]
            }
        },
        "ScoreResultReport": {
            "name": "ScoreResultReport",
            "fields": {
                "page": {
                    "name": "page",
                    "ref": null,
                    "type": "Int"
                },
                "search": {
                    "name": "search",
                    "ref": null,
                    "type": "String"
                },
                "page_count": {
                    "name": "page_count",
                    "ref": null,
                    "type": "Int"
                },
                "result": {
                    "name": "result",
                    "ref": "ScoreResult",
                    "type": "[ScoreResult]"
                },
                "date_start": {
                    "name": "date_start",
                    "ref": null,
                    "type": "String"
                },
                "date_end": {
                    "name": "date_end",
                    "ref": null,
                    "type": "String"
                }
            },
            "not_null_fields": [],
            "relative_fields": {
                "result": "ScoreResult"
            },
            "referred_from": [],
            "queries": {
                "one": "getScoreReport"
            }
        }
    },
    "mutations": {
        "updateUser": {
            "name": "updateUser",
            "relation": "User",
            "is_list": false,
            "args": {
                "id": {
                    "name": "id",
                    "type": "ID!"
                },
                "name": {
                    "name": "name",
                    "type": "String"
                },
                "email": {
                    "name": "email",
                    "type": "String"
                },
                "password": {
                    "name": "password",
                    "type": "String"
                },
                "remember_token": {
                    "name": "remember_token",
                    "type": "String"
                },
                "created_at": {
                    "name": "created_at",
                    "type": "JsonType"
                },
                "updated_at": {
                    "name": "updated_at",
                    "type": "JsonType"
                }
            },
            "required_args": [
                "id"
            ]
        },
        "newUser": {
            "name": "newUser",
            "relation": "User",
            "is_list": false,
            "args": {
                "name": {
                    "name": "name",
                    "type": "String"
                },
                "email": {
                    "name": "email",
                    "type": "String"
                },
                "password": {
                    "name": "password",
                    "type": "String"
                },
                "remember_token": {
                    "name": "remember_token",
                    "type": "String"
                },
                "created_at": {
                    "name": "created_at",
                    "type": "JsonType"
                },
                "updated_at": {
                    "name": "updated_at",
                    "type": "JsonType"
                }
            },
            "required_args": []
        },
        "removeUser": {
            "name": "removeUser",
            "relation": "User",
            "is_list": false,
            "args": {
                "id": {
                    "name": "id",
                    "type": "ID!"
                }
            },
            "required_args": [
                "id"
            ]
        },
        "newCompanyType": {
            "name": "newCompanyType",
            "relation": "CompanyType",
            "is_list": false,
            "args": {
                "name": {
                    "name": "name",
                    "type": "String"
                },
                "created_at": {
                    "name": "created_at",
                    "type": "JsonType"
                },
                "updated_at": {
                    "name": "updated_at",
                    "type": "JsonType"
                }
            },
            "required_args": []
        },
        "updateCompanyType": {
            "name": "updateCompanyType",
            "relation": "CompanyType",
            "is_list": false,
            "args": {
                "id": {
                    "name": "id",
                    "type": "ID!"
                },
                "name": {
                    "name": "name",
                    "type": "String"
                },
                "created_at": {
                    "name": "created_at",
                    "type": "JsonType"
                },
                "updated_at": {
                    "name": "updated_at",
                    "type": "JsonType"
                }
            },
            "required_args": [
                "id"
            ]
        },
        "removeCompanyType": {
            "name": "removeCompanyType",
            "relation": "CompanyType",
            "is_list": false,
            "args": {
                "id": {
                    "name": "id",
                    "type": "ID!"
                }
            },
            "required_args": [
                "id"
            ]
        },
        "newCompany": {
            "name": "newCompany",
            "relation": "Company",
            "is_list": false,
            "args": {
                "name": {
                    "name": "name",
                    "type": "String"
                },
                "enabled": {
                    "name": "enabled",
                    "type": "Boolean"
                },
                "description": {
                    "name": "description",
                    "type": "String"
                },
                "type_id": {
                    "name": "type_id",
                    "type": "Int"
                },
                "created_at": {
                    "name": "created_at",
                    "type": "JsonType"
                },
                "updated_at": {
                    "name": "updated_at",
                    "type": "JsonType"
                }
            },
            "required_args": []
        },
        "removeCompany": {
            "name": "removeCompany",
            "relation": "Company",
            "is_list": false,
            "args": {
                "id": {
                    "name": "id",
                    "type": "ID!"
                }
            },
            "required_args": [
                "id"
            ]
        },
        "updateCompany": {
            "name": "updateCompany",
            "relation": "Company",
            "is_list": false,
            "args": {
                "id": {
                    "name": "id",
                    "type": "ID!"
                },
                "name": {
                    "name": "name",
                    "type": "String"
                },
                "enabled": {
                    "name": "enabled",
                    "type": "Boolean"
                },
                "description": {
                    "name": "description",
                    "type": "String"
                },
                "type_id": {
                    "name": "type_id",
                    "type": "Int"
                },
                "created_at": {
                    "name": "created_at",
                    "type": "JsonType"
                },
                "updated_at": {
                    "name": "updated_at",
                    "type": "JsonType"
                }
            },
            "required_args": [
                "id"
            ]
        },
        "newProductType": {
            "name": "newProductType",
            "relation": "ProductType",
            "is_list": false,
            "args": {
                "name": {
                    "name": "name",
                    "type": "String"
                },
                "code": {
                    "name": "code",
                    "type": "String"
                },
                "created_at": {
                    "name": "created_at",
                    "type": "JsonType"
                },
                "updated_at": {
                    "name": "updated_at",
                    "type": "JsonType"
                }
            },
            "required_args": []
        },
        "updateProductType": {
            "name": "updateProductType",
            "relation": "ProductType",
            "is_list": false,
            "args": {
                "id": {
                    "name": "id",
                    "type": "ID!"
                },
                "name": {
                    "name": "name",
                    "type": "String"
                },
                "code": {
                    "name": "code",
                    "type": "String"
                },
                "created_at": {
                    "name": "created_at",
                    "type": "JsonType"
                },
                "updated_at": {
                    "name": "updated_at",
                    "type": "JsonType"
                }
            },
            "required_args": [
                "id"
            ]
        },
        "removeProductType": {
            "name": "removeProductType",
            "relation": "ProductType",
            "is_list": false,
            "args": {
                "id": {
                    "name": "id",
                    "type": "ID!"
                }
            },
            "required_args": [
                "id"
            ]
        },
        "newProduct": {
            "name": "newProduct",
            "relation": "Product",
            "is_list": false,
            "args": {
                "name": {
                    "name": "name",
                    "type": "String"
                },
                "category_id": {
                    "name": "category_id",
                    "type": "Int"
                },
                "type_id": {
                    "name": "type_id",
                    "type": "Int"
                },
                "company_id": {
                    "name": "company_id",
                    "type": "Int"
                },
                "description": {
                    "name": "description",
                    "type": "String"
                },
                "enabled": {
                    "name": "enabled",
                    "type": "Boolean"
                },
                "score": {
                    "name": "score",
                    "type": "Int"
                },
                "created_at": {
                    "name": "created_at",
                    "type": "JsonType"
                },
                "updated_at": {
                    "name": "updated_at",
                    "type": "JsonType"
                }
            },
            "required_args": []
        },
        "removeProduct": {
            "name": "removeProduct",
            "relation": "Product",
            "is_list": false,
            "args": {
                "id": {
                    "name": "id",
                    "type": "ID!"
                }
            },
            "required_args": [
                "id"
            ]
        },
        "updateProduct": {
            "name": "updateProduct",
            "relation": "Product",
            "is_list": false,
            "args": {
                "id": {
                    "name": "id",
                    "type": "ID!"
                },
                "name": {
                    "name": "name",
                    "type": "String"
                },
                "category_id": {
                    "name": "category_id",
                    "type": "Int"
                },
                "type_id": {
                    "name": "type_id",
                    "type": "Int"
                },
                "company_id": {
                    "name": "company_id",
                    "type": "Int"
                },
                "description": {
                    "name": "description",
                    "type": "String"
                },
                "enabled": {
                    "name": "enabled",
                    "type": "Boolean"
                },
                "score": {
                    "name": "score",
                    "type": "Int"
                },
                "created_at": {
                    "name": "created_at",
                    "type": "JsonType"
                },
                "updated_at": {
                    "name": "updated_at",
                    "type": "JsonType"
                }
            },
            "required_args": [
                "id"
            ]
        },
        "newProductCategory": {
            "name": "newProductCategory",
            "relation": "ProductCategory",
            "is_list": false,
            "args": {
                "name": {
                    "name": "name",
                    "type": "String"
                },
                "code": {
                    "name": "code",
                    "type": "String"
                },
                "score": {
                    "name": "score",
                    "type": "Int"
                },
                "created_at": {
                    "name": "created_at",
                    "type": "JsonType"
                },
                "updated_at": {
                    "name": "updated_at",
                    "type": "JsonType"
                }
            },
            "required_args": []
        },
        "updateProductCategory": {
            "name": "updateProductCategory",
            "relation": "ProductCategory",
            "is_list": false,
            "args": {
                "id": {
                    "name": "id",
                    "type": "ID!"
                },
                "name": {
                    "name": "name",
                    "type": "String"
                },
                "code": {
                    "name": "code",
                    "type": "String"
                },
                "score": {
                    "name": "score",
                    "type": "Int"
                },
                "created_at": {
                    "name": "created_at",
                    "type": "JsonType"
                },
                "updated_at": {
                    "name": "updated_at",
                    "type": "JsonType"
                }
            },
            "required_args": [
                "id"
            ]
        },
        "removeProductCategory": {
            "name": "removeProductCategory",
            "relation": "ProductCategory",
            "is_list": false,
            "args": {
                "id": {
                    "name": "id",
                    "type": "ID!"
                }
            },
            "required_args": [
                "id"
            ]
        },
        "newAnswerType": {
            "name": "newAnswerType",
            "relation": "AnswerType",
            "is_list": false,
            "args": {
                "title": {
                    "name": "title",
                    "type": "String"
                },
                "name": {
                    "name": "name",
                    "type": "String"
                },
                "is_button": {
                    "name": "is_button",
                    "type": "Boolean"
                },
                "is_input": {
                    "name": "is_input",
                    "type": "Boolean"
                },
                "is_select": {
                    "name": "is_select",
                    "type": "Boolean"
                },
                "description": {
                    "name": "description",
                    "type": "String"
                },
                "created_at": {
                    "name": "created_at",
                    "type": "JsonType"
                },
                "updated_at": {
                    "name": "updated_at",
                    "type": "JsonType"
                }
            },
            "required_args": []
        },
        "updateAnswerType": {
            "name": "updateAnswerType",
            "relation": "AnswerType",
            "is_list": false,
            "args": {
                "id": {
                    "name": "id",
                    "type": "ID!"
                },
                "title": {
                    "name": "title",
                    "type": "String"
                },
                "name": {
                    "name": "name",
                    "type": "String"
                },
                "is_button": {
                    "name": "is_button",
                    "type": "Boolean"
                },
                "is_input": {
                    "name": "is_input",
                    "type": "Boolean"
                },
                "is_select": {
                    "name": "is_select",
                    "type": "Boolean"
                },
                "description": {
                    "name": "description",
                    "type": "String"
                },
                "created_at": {
                    "name": "created_at",
                    "type": "JsonType"
                },
                "updated_at": {
                    "name": "updated_at",
                    "type": "JsonType"
                }
            },
            "required_args": [
                "id"
            ]
        },
        "removeAnswerType": {
            "name": "removeAnswerType",
            "relation": "AnswerType",
            "is_list": false,
            "args": {
                "id": {
                    "name": "id",
                    "type": "ID!"
                }
            },
            "required_args": [
                "id"
            ]
        },
        "newStepAction": {
            "name": "newStepAction",
            "relation": "StepAction",
            "is_list": false,
            "args": {
                "answer_id": {
                    "name": "question_id",
                    "type": "Int"
                },
                "step_id": {
                    "name": "step_id",
                    "type": "Int"
                },
                "action": {
                    "name": "action",
                    "type": "String"
                },
                "created_at": {
                    "name": "created_at",
                    "type": "JsonType"
                },
                "updated_at": {
                    "name": "updated_at",
                    "type": "JsonType"
                }
            },
            "required_args": []
        },
        "updateStepAction": {
            "name": "updateStepAction",
            "relation": "StepAction",
            "is_list": false,
            "args": {
                "id": {
                    "name": "id",
                    "type": "ID!"
                },
                "answer_id": {
                    "name": "question_id",
                    "type": "Int"
                },
                "step_id": {
                    "name": "step_id",
                    "type": "Int"
                },
                "action": {
                    "name": "action",
                    "type": "String"
                },
                "created_at": {
                    "name": "created_at",
                    "type": "JsonType"
                },
                "updated_at": {
                    "name": "updated_at",
                    "type": "JsonType"
                }
            },
            "required_args": [
                "id"
            ]
        },
        "removeStepAction": {
            "name": "removeStepAction",
            "relation": "StepAction",
            "is_list": false,
            "args": {
                "id": {
                    "name": "id",
                    "type": "ID!"
                }
            },
            "required_args": [
                "id"
            ]
        },
        "newAnswer": {
            "name": "newAnswer",
            "relation": "Answer",
            "is_list": false,
            "args": {
                "name": {
                    "name": "name",
                    "type": "String"
                },
                "enabled": {
                    "name": "enabled",
                    "type": "Boolean"
                },
                "value": {
                    "name": "value",
                    "type": "String"
                },
                "values": {
                    "name": "values",
                    "type": "JsonType"
                },
                "title": {
                    "name": "title",
                    "type": "String"
                },
                "placeholder": {
                    "name": "placeholder",
                    "type": "String"
                },
                "label": {
                    "name": "label",
                    "type": "String"
                },
                "position": {
                    "name": "position",
                    "type": "Int"
                },
                "type_id": {
                    "name": "type_id",
                    "type": "Int"
                },
                "field_id": {
                    "name": "field_id",
                    "type": "Int"
                },
                "question_id": {
                    "name": "question_id",
                    "type": "Int"
                },
                "is_currency": {
                    "name": "is_currency",
                    "type": "Boolean"
                },
                "is_month": {
                    "name": "is_month",
                    "type": "Boolean"
                },
                "is_iin": {
                    "name": "is_iin",
                    "type": "Boolean"
                },
                "is_mail": {
                    "name": "is_mail",
                    "type": "Boolean"
                },
                "is_phone": {
                    "name": "is_phone",
                    "type": "Boolean"
                },
                "created_at": {
                    "name": "created_at",
                    "type": "JsonType"
                },
                "updated_at": {
                    "name": "updated_at",
                    "type": "JsonType"
                }
            },
            "required_args": []
        },
        "updateAnswer": {
            "name": "updateAnswer",
            "relation": "Answer",
            "is_list": false,
            "args": {
                "id": {
                    "name": "id",
                    "type": "ID"
                },
                "name": {
                    "name": "name",
                    "type": "String"
                },
                "enabled": {
                    "name": "enabled",
                    "type": "Boolean"
                },
                "value": {
                    "name": "value",
                    "type": "String"
                },
                "values": {
                    "name": "values",
                    "type": "JsonType"
                },
                "title": {
                    "name": "title",
                    "type": "String"
                },
                "placeholder": {
                    "name": "placeholder",
                    "type": "String"
                },
                "label": {
                    "name": "label",
                    "type": "String"
                },
                "position": {
                    "name": "position",
                    "type": "Int"
                },
                "type_id": {
                    "name": "type_id",
                    "type": "Int"
                },
                "field_id": {
                    "name": "field_id",
                    "type": "Int"
                },
                "question_id": {
                    "name": "question_id",
                    "type": "Int"
                },
                "is_currency": {
                    "name": "is_currency",
                    "type": "Boolean"
                },
                "is_month": {
                    "name": "is_month",
                    "type": "Boolean"
                },
                "is_iin": {
                    "name": "is_iin",
                    "type": "Boolean"
                },
                "is_mail": {
                    "name": "is_mail",
                    "type": "Boolean"
                },
                "is_phone": {
                    "name": "is_phone",
                    "type": "Boolean"
                },
                "created_at": {
                    "name": "created_at",
                    "type": "JsonType"
                },
                "updated_at": {
                    "name": "updated_at",
                    "type": "JsonType"
                }
            },
            "required_args": []
        },
        "removeAnswer": {
            "name": "removeAnswer",
            "relation": "Answer",
            "is_list": false,
            "args": {
                "id": {
                    "name": "id",
                    "type": "ID!"
                }
            },
            "required_args": [
                "id"
            ]
        },
        "newField": {
            "name": "newField",
            "relation": "Field",
            "is_list": false,
            "args": {
                "id": {
                    "name": "id",
                    "type": "ID"
                },
                "title": {
                    "name": "title",
                    "type": "String"
                },
                "name": {
                    "name": "name",
                    "type": "String"
                },
                "order": {
                    "name": "order",
                    "type": "Int"
                },
                "description": {
                    "name": "description",
                    "type": "String"
                },
                "enabled": {
                    "name": "enabled",
                    "type": "Boolean"
                },
                "calculated": {
                    "name": "calculated",
                    "type": "Boolean"
                },
                "system": {
                    "name": "system",
                    "type": "Boolean"
                },
                "created_at": {
                    "name": "created_at",
                    "type": "JsonType"
                },
                "updated_at": {
                    "name": "updated_at",
                    "type": "JsonType"
                }
            },
            "required_args": []
        },
        "updateField": {
            "name": "updateField",
            "relation": "Field",
            "is_list": false,
            "args": {
                "id": {
                    "name": "id",
                    "type": "ID!"
                },
                "title": {
                    "name": "title",
                    "type": "String"
                },
                "name": {
                    "name": "name",
                    "type": "String"
                },
                "order": {
                    "name": "order",
                    "type": "Int"
                },
                "description": {
                    "name": "description",
                    "type": "String"
                },
                "enabled": {
                    "name": "enabled",
                    "type": "Boolean"
                },
                "calculated": {
                    "name": "calculated",
                    "type": "Boolean"
                },
                "system": {
                    "name": "system",
                    "type": "Boolean"
                },
                "created_at": {
                    "name": "created_at",
                    "type": "JsonType"
                },
                "updated_at": {
                    "name": "updated_at",
                    "type": "JsonType"
                }
            },
            "required_args": [
                "id"
            ]
        },
        "removeField": {
            "name": "removeField",
            "relation": "Field",
            "is_list": false,
            "args": {
                "id": {
                    "name": "id",
                    "type": "ID!"
                }
            },
            "required_args": [
                "id"
            ]
        },
        "newQuestionType": {
            "name": "newQuestionType",
            "relation": "QuestionType",
            "is_list": false,
            "args": {
                "name": {
                    "name": "name",
                    "type": "String"
                },
                "type": {
                    "name": "type",
                    "type": "String"
                },
                "description": {
                    "name": "description",
                    "type": "String"
                },
                "created_at": {
                    "name": "created_at",
                    "type": "JsonType"
                },
                "updated_at": {
                    "name": "updated_at",
                    "type": "JsonType"
                }
            },
            "required_args": []
        },
        "updateQuestionType": {
            "name": "updateQuestionType",
            "relation": "QuestionType",
            "is_list": false,
            "args": {
                "id": {
                    "name": "id",
                    "type": "ID!"
                },
                "name": {
                    "name": "name",
                    "type": "String"
                },
                "type": {
                    "name": "type",
                    "type": "String"
                },
                "description": {
                    "name": "description",
                    "type": "String"
                },
                "created_at": {
                    "name": "created_at",
                    "type": "JsonType"
                },
                "updated_at": {
                    "name": "updated_at",
                    "type": "JsonType"
                }
            },
            "required_args": [
                "id"
            ]
        },
        "removeQuestionType": {
            "name": "removeQuestionType",
            "relation": "QuestionType",
            "is_list": false,
            "args": {
                "id": {
                    "name": "id",
                    "type": "ID!"
                }
            },
            "required_args": [
                "id"
            ]
        },
        "newQuestionAction": {
            "name": "newQuestionAction",
            "relation": "QuestionActionType",
            "is_list": false,
            "args": {
                "answer_id": {
                    "name": "question_id",
                    "type": "Int"
                },
                "question_id": {
                    "name": "question_id",
                    "type": "Int"
                },
                "category_id": {
                    "name": "category_id",
                    "type": "Int"
                },
                "action": {
                    "name": "action",
                    "type": "String"
                },
                "created_at": {
                    "name": "created_at",
                    "type": "JsonType"
                },
                "updated_at": {
                    "name": "updated_at",
                    "type": "JsonType"
                }
            },
            "required_args": []
        },
        "updateQuestionAction": {
            "name": "updateQuestionAction",
            "relation": "QuestionActionType",
            "is_list": false,
            "args": {
                "id": {
                    "name": "id",
                    "type": "ID!"
                },
                "answer_id": {
                    "name": "question_id",
                    "type": "Int"
                },
                "question_id": {
                    "name": "question_id",
                    "type": "Int"
                },
                "category_id": {
                    "name": "category_id",
                    "type": "Int"
                },
                "action": {
                    "name": "action",
                    "type": "String"
                },
                "created_at": {
                    "name": "created_at",
                    "type": "JsonType"
                },
                "updated_at": {
                    "name": "updated_at",
                    "type": "JsonType"
                }
            },
            "required_args": [
                "id"
            ]
        },
        "removeQuestionAction": {
            "name": "removeQuestionAction",
            "relation": "QuestionActionType",
            "is_list": false,
            "args": {
                "id": {
                    "name": "id",
                    "type": "ID!"
                }
            },
            "required_args": [
                "id"
            ]
        },
        "newQuestion": {
            "name": "newQuestion",
            "relation": "Question",
            "is_list": false,
            "args": {
                "name": {
                    "name": "name",
                    "type": "String"
                },
                "question_code": {
                    "name": "question_code",
                    "type": "String"
                },
                "enabled": {
                    "name": "enabled",
                    "type": "Boolean"
                },
                "type_id": {
                    "name": "type_id",
                    "type": "Int"
                },
                "field_id": {
                    "name": "field_id",
                    "type": "Int"
                },
                "position": {
                    "name": "position",
                    "type": "Int"
                },
                "created_at": {
                    "name": "created_at",
                    "type": "JsonType"
                },
                "updated_at": {
                    "name": "updated_at",
                    "type": "JsonType"
                }
            },
            "required_args": []
        },
        "updateQuestion": {
            "name": "updateQuestion",
            "relation": "Question",
            "is_list": false,
            "args": {
                "id": {
                    "name": "id",
                    "type": "ID"
                },
                "name": {
                    "name": "name",
                    "type": "String"
                },
                "question_code": {
                    "name": "question_code",
                    "type": "String"
                },
                "enabled": {
                    "name": "enabled",
                    "type": "Boolean"
                },
                "type_id": {
                    "name": "type_id",
                    "type": "Int"
                },
                "field_id": {
                    "name": "field_id",
                    "type": "Int"
                },
                "position": {
                    "name": "position",
                    "type": "Int"
                },
                "created_at": {
                    "name": "created_at",
                    "type": "JsonType"
                },
                "updated_at": {
                    "name": "updated_at",
                    "type": "JsonType"
                }
            },
            "required_args": []
        },
        "removeQuestion": {
            "name": "removeQuestion",
            "relation": "Question",
            "is_list": false,
            "args": {
                "id": {
                    "name": "id",
                    "type": "ID!"
                }
            },
            "required_args": [
                "id"
            ]
        },
        "pushQuestionState": {
            "name": "pushQuestionState",
            "relation": "QuestionState",
            "is_list": false,
            "args": {
                "state": {
                    "name": "state",
                    "type": "String"
                },
                "question_id": {
                    "name": "question_id",
                    "type": "Int"
                },
                "created_at": {
                    "name": "created_at",
                    "type": "JsonType"
                },
                "updated_at": {
                    "name": "updated_at",
                    "type": "JsonType"
                }
            },
            "required_args": []
        },
        "removeQuestionState": {
            "name": "removeQuestionState",
            "relation": "QuestionState",
            "is_list": false,
            "args": {
                "id": {
                    "name": "id",
                    "type": "ID!"
                }
            },
            "required_args": [
                "id"
            ]
        },
        "newStep": {
            "name": "newStep",
            "relation": "Step",
            "is_list": false,
            "args": {
                "name": {
                    "name": "name",
                    "type": "String"
                },
                "enabled": {
                    "name": "enabled",
                    "type": "Boolean"
                },
                "category_id": {
                    "name": "category_id",
                    "type": "Int"
                },
                "number": {
                    "name": "number",
                    "type": "Int"
                },
                "title": {
                    "name": "title",
                    "type": "String"
                },
                "bar_text_top": {
                    "name": "bar_text_top",
                    "type": "String"
                },
                "bar_text_bottom": {
                    "name": "bar_text_bottom",
                    "type": "String"
                },
                "position": {
                    "name": "position",
                    "type": "Int"
                },
                "show_title": {
                    "name": "show_title",
                    "type": "Boolean"
                },
                "code": {
                    "name": "code",
                    "type": "String"
                },
                "created_at": {
                    "name": "created_at",
                    "type": "JsonType"
                },
                "updated_at": {
                    "name": "updated_at",
                    "type": "JsonType"
                }
            },
            "required_args": []
        },
        "updateStep": {
            "name": "updateStep",
            "relation": "Step",
            "is_list": false,
            "args": {
                "id": {
                    "name": "id",
                    "type": "ID"
                },
                "name": {
                    "name": "name",
                    "type": "String"
                },
                "enabled": {
                    "name": "enabled",
                    "type": "Boolean"
                },
                "category_id": {
                    "name": "category_id",
                    "type": "Int"
                },
                "number": {
                    "name": "number",
                    "type": "Int"
                },
                "title": {
                    "name": "title",
                    "type": "String"
                },
                "bar_text_top": {
                    "name": "bar_text_top",
                    "type": "String"
                },
                "bar_text_bottom": {
                    "name": "bar_text_bottom",
                    "type": "String"
                },
                "position": {
                    "name": "position",
                    "type": "Int"
                },
                "show_title": {
                    "name": "show_title",
                    "type": "Boolean"
                },
                "code": {
                    "name": "code",
                    "type": "String"
                },
                "created_at": {
                    "name": "created_at",
                    "type": "JsonType"
                },
                "updated_at": {
                    "name": "updated_at",
                    "type": "JsonType"
                }
            },
            "required_args": []
        },
        "removeStep": {
            "name": "removeStep",
            "relation": "Step",
            "is_list": false,
            "args": {
                "id": {
                    "name": "id",
                    "type": "ID!"
                }
            },
            "required_args": [
                "id"
            ]
        },
        "attachStep": {
            "name": "attachStep",
            "relation": "Step",
            "is_list": false,
            "args": {
                "step_id": {
                    "name": "step_id",
                    "type": "ID"
                },
                "question_id": {
                    "name": "question_id",
                    "type": "ID"
                }
            },
            "required_args": []
        },
        "detachStep": {
            "name": "detachStep",
            "relation": "Step",
            "is_list": false,
            "args": {
                "step_id": {
                    "name": "step_id",
                    "type": "ID"
                },
                "question_id": {
                    "name": "question_id",
                    "type": "ID"
                }
            },
            "required_args": []
        },
        "pushStepState": {
            "name": "pushStepState",
            "relation": "StepState",
            "is_list": false,
            "args": {
                "state": {
                    "name": "state",
                    "type": "String"
                },
                "step_id": {
                    "name": "step_id",
                    "type": "Int"
                },
                "created_at": {
                    "name": "created_at",
                    "type": "JsonType"
                },
                "updated_at": {
                    "name": "updated_at",
                    "type": "JsonType"
                }
            },
            "required_args": []
        },
        "removeStepState": {
            "name": "removeStepState",
            "relation": "StepState",
            "is_list": false,
            "args": {
                "id": {
                    "name": "id",
                    "type": "ID!"
                }
            },
            "required_args": [
                "id"
            ]
        },
        "newScoreMap": {
            "name": "newScoreMap",
            "relation": "ScoreMap",
            "is_list": false,
            "args": {
                "name": {
                    "name": "name",
                    "type": "String"
                },
                "is_product": {
                    "name": "is_product",
                    "type": "Boolean"
                },
                "category_id": {
                    "name": "category_id",
                    "type": "Int"
                },
                "product_id": {
                    "name": "product_id",
                    "type": "Int"
                },
                "created_at": {
                    "name": "created_at",
                    "type": "JsonType"
                },
                "updated_at": {
                    "name": "updated_at",
                    "type": "JsonType"
                }
            },
            "required_args": []
        },
        "updateScoreMap": {
            "name": "updateScoreMap",
            "relation": "ScoreMap",
            "is_list": false,
            "args": {
                "id": {
                    "name": "id",
                    "type": "ID"
                },
                "name": {
                    "name": "name",
                    "type": "String"
                },
                "is_product": {
                    "name": "is_product",
                    "type": "Boolean"
                },
                "category_id": {
                    "name": "category_id",
                    "type": "Int"
                },
                "product_id": {
                    "name": "product_id",
                    "type": "Int"
                },
                "created_at": {
                    "name": "created_at",
                    "type": "JsonType"
                },
                "updated_at": {
                    "name": "updated_at",
                    "type": "JsonType"
                }
            },
            "required_args": []
        },
        "removeScoreMap": {
            "name": "removeScoreMap",
            "relation": "ScoreMap",
            "is_list": false,
            "args": {
                "id": {
                    "name": "id",
                    "type": "ID!"
                }
            },
            "required_args": [
                "id"
            ]
        },
        "removeRule": {
            "name": "removeRule",
            "relation": "ScoreRule",
            "is_list": false,
            "args": {
                "id": {
                    "name": "id",
                    "type": "ID!"
                }
            },
            "required_args": [
                "id"
            ]
        },
        "updateRule": {
            "name": "updateRule",
            "relation": "ScoreRule",
            "is_list": false,
            "args": {
                "id": {
                    "name": "id",
                    "type": "ID"
                },
                "name": {
                    "name": "name",
                    "type": "String"
                },
                "type": {
                    "name": "type",
                    "type": "String"
                },
                "enabled": {
                    "name": "enabled",
                    "type": "Boolean"
                },
                "score_map_id": {
                    "name": "score_map_id",
                    "type": "Int"
                },
                "field_id": {
                    "name": "field_id",
                    "type": "Int"
                },
                "dep_field_id": {
                    "name": "dep_field_id",
                    "type": "Int"
                },
                "condition": {
                    "name": "condition",
                    "type": "JsonType"
                },
                "values": {
                    "name": "values",
                    "type": "JsonType"
                },
                "created_at": {
                    "name": "created_at",
                    "type": "JsonType"
                },
                "updated_at": {
                    "name": "updated_at",
                    "type": "JsonType"
                }
            },
            "required_args": []
        },
        "newRule": {
            "name": "newRule",
            "relation": "ScoreRule",
            "is_list": false,
            "args": {
                "id": {
                    "name": "id",
                    "type": "ID"
                },
                "name": {
                    "name": "name",
                    "type": "String"
                },
                "type": {
                    "name": "type",
                    "type": "String"
                },
                "enabled": {
                    "name": "enabled",
                    "type": "Boolean"
                },
                "score_map_id": {
                    "name": "score_map_id",
                    "type": "Int"
                },
                "field_id": {
                    "name": "field_id",
                    "type": "Int"
                },
                "dep_field_id": {
                    "name": "dep_field_id",
                    "type": "Int"
                },
                "condition": {
                    "name": "condition",
                    "type": "JsonType"
                },
                "values": {
                    "name": "values",
                    "type": "JsonType"
                },
                "created_at": {
                    "name": "created_at",
                    "type": "JsonType"
                },
                "updated_at": {
                    "name": "updated_at",
                    "type": "JsonType"
                }
            },
            "required_args": []
        },
        "newLogicRule": {
            "name": "newLogicRule",
            "relation": "ScoreRule",
            "is_list": false,
            "args": {
                "name": {
                    "name": "name",
                    "type": "String"
                },
                "enabled": {
                    "name": "enabled",
                    "type": "Boolean!"
                },
                "field_id": {
                    "name": "field_id",
                    "type": "ID!"
                },
                "dep_field_id": {
                    "name": "dep_field_id",
                    "type": "ID"
                },
                "score_map_id": {
                    "name": "score_map_id",
                    "type": "ID!"
                },
                "condition": {
                    "name": "condition",
                    "type": "JsonType!"
                },
                "values": {
                    "name": "values",
                    "type": "JsonType!"
                }
            },
            "required_args": [
                "enabled",
                "field_id",
                "score_map_id",
                "condition",
                "values"
            ]
        },
        "newRangeRule": {
            "name": "newRangeRule",
            "relation": "ScoreRule",
            "is_list": false,
            "args": {
                "name": {
                    "name": "name",
                    "type": "String"
                },
                "enabled": {
                    "name": "enabled",
                    "type": "Boolean!"
                },
                "field_id": {
                    "name": "field_id",
                    "type": "ID!"
                },
                "dep_field_id": {
                    "name": "dep_field_id",
                    "type": "ID"
                },
                "score_map_id": {
                    "name": "score_map_id",
                    "type": "ID!"
                },
                "condition": {
                    "name": "condition",
                    "type": "JsonType!"
                },
                "values": {
                    "name": "values",
                    "type": "JsonType!"
                }
            },
            "required_args": [
                "enabled",
                "field_id",
                "score_map_id",
                "condition",
                "values"
            ]
        },
        "newListRule": {
            "name": "newListRule",
            "relation": "ScoreRule",
            "is_list": false,
            "args": {
                "name": {
                    "name": "name",
                    "type": "String"
                },
                "enabled": {
                    "name": "enabled",
                    "type": "Boolean!"
                },
                "field_id": {
                    "name": "field_id",
                    "type": "ID!"
                },
                "dep_field_id": {
                    "name": "dep_field_id",
                    "type": "ID"
                },
                "score_map_id": {
                    "name": "score_map_id",
                    "type": "ID!"
                },
                "condition": {
                    "name": "condition",
                    "type": "JsonType!"
                },
                "values": {
                    "name": "values",
                    "type": "JsonType!"
                }
            },
            "required_args": [
                "enabled",
                "field_id",
                "score_map_id",
                "condition",
                "values"
            ]
        },
        "newTreeLogicRule": {
            "name": "newTreeLogicRule",
            "relation": "ScoreRule",
            "is_list": false,
            "args": {
                "name": {
                    "name": "name",
                    "type": "String"
                },
                "enabled": {
                    "name": "enabled",
                    "type": "Boolean!"
                },
                "field_id": {
                    "name": "field_id",
                    "type": "ID!"
                },
                "dep_field_id": {
                    "name": "dep_field_id",
                    "type": "ID!"
                },
                "score_map_id": {
                    "name": "score_map_id",
                    "type": "ID!"
                },
                "condition": {
                    "name": "condition",
                    "type": "JsonType!"
                },
                "values": {
                    "name": "values",
                    "type": "JsonType!"
                }
            },
            "required_args": [
                "enabled",
                "field_id",
                "dep_field_id",
                "score_map_id",
                "condition",
                "values"
            ]
        },
        "newTreeRangeRule": {
            "name": "newTreeRangeRule",
            "relation": "ScoreRule",
            "is_list": false,
            "args": {
                "name": {
                    "name": "name",
                    "type": "String"
                },
                "enabled": {
                    "name": "enabled",
                    "type": "Boolean!"
                },
                "field_id": {
                    "name": "field_id",
                    "type": "ID!"
                },
                "dep_field_id": {
                    "name": "dep_field_id",
                    "type": "ID!"
                },
                "score_map_id": {
                    "name": "score_map_id",
                    "type": "ID!"
                },
                "condition": {
                    "name": "condition",
                    "type": "JsonType!"
                },
                "values": {
                    "name": "values",
                    "type": "JsonType!"
                }
            },
            "required_args": [
                "enabled",
                "field_id",
                "dep_field_id",
                "score_map_id",
                "condition",
                "values"
            ]
        },
        "newTreeListRule": {
            "name": "newTreeListRule",
            "relation": "ScoreRule",
            "is_list": false,
            "args": {
                "name": {
                    "name": "name",
                    "type": "String"
                },
                "enabled": {
                    "name": "enabled",
                    "type": "Boolean!"
                },
                "field_id": {
                    "name": "field_id",
                    "type": "ID!"
                },
                "dep_field_id": {
                    "name": "dep_field_id",
                    "type": "ID!"
                },
                "score_map_id": {
                    "name": "score_map_id",
                    "type": "ID!"
                },
                "condition": {
                    "name": "condition",
                    "type": "JsonType!"
                },
                "values": {
                    "name": "values",
                    "type": "JsonType!"
                }
            },
            "required_args": [
                "enabled",
                "field_id",
                "dep_field_id",
                "score_map_id",
                "condition",
                "values"
            ]
        },
        "removeFilter": {
            "name": "removeFilter",
            "relation": "ScoreFilter",
            "is_list": false,
            "args": {
                "id": {
                    "name": "id",
                    "type": "ID!"
                }
            },
            "required_args": [
                "id"
            ]
        },
        "updateFilter": {
            "name": "updateFilter",
            "relation": "ScoreFilter",
            "is_list": false,
            "args": {
                "id": {
                    "name": "id",
                    "type": "ID"
                },
                "name": {
                    "name": "name",
                    "type": "String"
                },
                "type": {
                    "name": "type",
                    "type": "String"
                },
                "enabled": {
                    "name": "enabled",
                    "type": "Boolean"
                },
                "score_map_id": {
                    "name": "score_map_id",
                    "type": "Int"
                },
                "field_id": {
                    "name": "field_id",
                    "type": "Int"
                },
                "dep_field_id": {
                    "name": "dep_field_id",
                    "type": "Int"
                },
                "condition": {
                    "name": "condition",
                    "type": "JsonType"
                },
                "created_at": {
                    "name": "created_at",
                    "type": "JsonType"
                },
                "updated_at": {
                    "name": "updated_at",
                    "type": "JsonType"
                }
            },
            "required_args": []
        },
        "newFilter": {
            "name": "newFilter",
            "relation": "ScoreFilter",
            "is_list": false,
            "args": {
                "id": {
                    "name": "id",
                    "type": "ID"
                },
                "name": {
                    "name": "name",
                    "type": "String"
                },
                "type": {
                    "name": "type",
                    "type": "String"
                },
                "enabled": {
                    "name": "enabled",
                    "type": "Boolean"
                },
                "score_map_id": {
                    "name": "score_map_id",
                    "type": "Int"
                },
                "field_id": {
                    "name": "field_id",
                    "type": "Int"
                },
                "dep_field_id": {
                    "name": "dep_field_id",
                    "type": "Int"
                },
                "condition": {
                    "name": "condition",
                    "type": "JsonType"
                },
                "created_at": {
                    "name": "created_at",
                    "type": "JsonType"
                },
                "updated_at": {
                    "name": "updated_at",
                    "type": "JsonType"
                }
            },
            "required_args": []
        },
        "newLogicFilter": {
            "name": "newLogicFilter",
            "relation": "ScoreFilter",
            "is_list": false,
            "args": {
                "name": {
                    "name": "name",
                    "type": "String"
                },
                "enabled": {
                    "name": "enabled",
                    "type": "Boolean!"
                },
                "field_id": {
                    "name": "field_id",
                    "type": "ID!"
                },
                "dep_field_id": {
                    "name": "dep_field_id",
                    "type": "ID"
                },
                "score_map_id": {
                    "name": "score_map_id",
                    "type": "ID!"
                },
                "condition": {
                    "name": "condition",
                    "type": "JsonType!"
                }
            },
            "required_args": [
                "enabled",
                "field_id",
                "score_map_id",
                "condition"
            ]
        },
        "newRangeFilter": {
            "name": "newRangeFilter",
            "relation": "ScoreFilter",
            "is_list": false,
            "args": {
                "name": {
                    "name": "name",
                    "type": "String"
                },
                "enabled": {
                    "name": "enabled",
                    "type": "Boolean!"
                },
                "field_id": {
                    "name": "field_id",
                    "type": "ID!"
                },
                "dep_field_id": {
                    "name": "dep_field_id",
                    "type": "ID"
                },
                "score_map_id": {
                    "name": "score_map_id",
                    "type": "ID!"
                },
                "condition": {
                    "name": "condition",
                    "type": "JsonType!"
                }
            },
            "required_args": [
                "enabled",
                "field_id",
                "score_map_id",
                "condition"
            ]
        },
        "newListFilter": {
            "name": "newListFilter",
            "relation": "ScoreFilter",
            "is_list": false,
            "args": {
                "name": {
                    "name": "name",
                    "type": "String"
                },
                "enabled": {
                    "name": "enabled",
                    "type": "Boolean!"
                },
                "field_id": {
                    "name": "field_id",
                    "type": "ID!"
                },
                "dep_field_id": {
                    "name": "dep_field_id",
                    "type": "ID"
                },
                "score_map_id": {
                    "name": "score_map_id",
                    "type": "ID!"
                },
                "condition": {
                    "name": "condition",
                    "type": "JsonType!"
                }
            },
            "required_args": [
                "enabled",
                "field_id",
                "score_map_id",
                "condition"
            ]
        },
        "newTreeLogicFilter": {
            "name": "newTreeLogicFilter",
            "relation": "ScoreFilter",
            "is_list": false,
            "args": {
                "name": {
                    "name": "name",
                    "type": "String"
                },
                "enabled": {
                    "name": "enabled",
                    "type": "Boolean!"
                },
                "field_id": {
                    "name": "field_id",
                    "type": "ID!"
                },
                "dep_field_id": {
                    "name": "dep_field_id",
                    "type": "ID"
                },
                "score_map_id": {
                    "name": "score_map_id",
                    "type": "ID!"
                },
                "condition": {
                    "name": "condition",
                    "type": "JsonType!"
                }
            },
            "required_args": [
                "enabled",
                "field_id",
                "score_map_id",
                "condition"
            ]
        },
        "newTreeRangeFilter": {
            "name": "newTreeRangeFilter",
            "relation": "ScoreFilter",
            "is_list": false,
            "args": {
                "name": {
                    "name": "name",
                    "type": "String"
                },
                "enabled": {
                    "name": "enabled",
                    "type": "Boolean!"
                },
                "field_id": {
                    "name": "field_id",
                    "type": "ID!"
                },
                "dep_field_id": {
                    "name": "dep_field_id",
                    "type": "ID"
                },
                "score_map_id": {
                    "name": "score_map_id",
                    "type": "ID!"
                },
                "condition": {
                    "name": "condition",
                    "type": "JsonType!"
                }
            },
            "required_args": [
                "enabled",
                "field_id",
                "score_map_id",
                "condition"
            ]
        },
        "newTreeListFilter": {
            "name": "newTreeListFilter",
            "relation": "ScoreFilter",
            "is_list": false,
            "args": {
                "name": {
                    "name": "name",
                    "type": "String"
                },
                "enabled": {
                    "name": "enabled",
                    "type": "Boolean!"
                },
                "field_id": {
                    "name": "field_id",
                    "type": "ID!"
                },
                "dep_field_id": {
                    "name": "dep_field_id",
                    "type": "ID"
                },
                "score_map_id": {
                    "name": "score_map_id",
                    "type": "ID!"
                },
                "condition": {
                    "name": "condition",
                    "type": "JsonType!"
                }
            },
            "required_args": [
                "enabled",
                "field_id",
                "score_map_id",
                "condition"
            ]
        },
        "newRank": {
            "name": "newRank",
            "relation": "RankType",
            "is_list": false,
            "args": {
                "title": {
                    "name": "title",
                    "type": "String"
                },
                "name": {
                    "name": "name",
                    "type": "String"
                },
                "default": {
                    "name": "default",
                    "type": "Boolean"
                },
                "created_at": {
                    "name": "created_at",
                    "type": "JsonType"
                },
                "updated_at": {
                    "name": "updated_at",
                    "type": "JsonType"
                }
            },
            "required_args": []
        },
        "updateRank": {
            "name": "updateRank",
            "relation": "RankType",
            "is_list": false,
            "args": {
                "id": {
                    "name": "id",
                    "type": "ID"
                },
                "title": {
                    "name": "title",
                    "type": "String"
                },
                "name": {
                    "name": "name",
                    "type": "String"
                },
                "default": {
                    "name": "default",
                    "type": "Boolean"
                },
                "created_at": {
                    "name": "created_at",
                    "type": "JsonType"
                },
                "updated_at": {
                    "name": "updated_at",
                    "type": "JsonType"
                }
            },
            "required_args": []
        },
        "removeRank": {
            "name": "removeRank",
            "relation": "RankType",
            "is_list": false,
            "args": {
                "id": {
                    "name": "id",
                    "type": "ID!"
                }
            },
            "required_args": [
                "id"
            ]
        },
        "newCategoryRank": {
            "name": "newCategoryRank",
            "relation": "CategoryRank",
            "is_list": false,
            "args": {
                "score": {
                    "name": "score",
                    "type": "Int"
                },
                "rank_id": {
                    "name": "rank_id",
                    "type": "Int"
                },
                "category_id": {
                    "name": "category_id",
                    "type": "Int"
                },
                "created_at": {
                    "name": "created_at",
                    "type": "JsonType"
                },
                "updated_at": {
                    "name": "updated_at",
                    "type": "JsonType"
                }
            },
            "required_args": []
        },
        "updateCategoryRank": {
            "name": "updateCategoryRank",
            "relation": "CategoryRank",
            "is_list": false,
            "args": {
                "id": {
                    "name": "id",
                    "type": "ID"
                },
                "score": {
                    "name": "score",
                    "type": "Int"
                },
                "rank_id": {
                    "name": "rank_id",
                    "type": "Int"
                },
                "category_id": {
                    "name": "category_id",
                    "type": "Int"
                },
                "created_at": {
                    "name": "created_at",
                    "type": "JsonType"
                },
                "updated_at": {
                    "name": "updated_at",
                    "type": "JsonType"
                }
            },
            "required_args": []
        },
        "removeCategoryRank": {
            "name": "removeCategoryRank",
            "relation": "CategoryRank",
            "is_list": false,
            "args": {
                "id": {
                    "name": "id",
                    "type": "ID!"
                }
            },
            "required_args": [
                "id"
            ]
        },
        "attachProduct": {
            "name": "attachProduct",
            "relation": "RankType",
            "is_list": false,
            "args": {
                "product_id": {
                    "name": "product_id",
                    "type": "ID"
                },
                "ore_id": {
                    "name": "ore_id",
                    "type": "ID"
                }
            },
            "required_args": []
        },
        "detachProduct": {
            "name": "detachProduct",
            "relation": "RankType",
            "is_list": false,
            "args": {
                "product_id": {
                    "name": "product_id",
                    "type": "ID"
                },
                "ore_id": {
                    "name": "ore_id",
                    "type": "ID"
                }
            },
            "required_args": []
        }
    },
    "queries": {
        "getUser": {
            "name": "getUser",
            "relation": "User",
            "is_list": false,
            "args": {
                "id": {
                    "name": "id",
                    "type": "ID"
                },
                "email": {
                    "name": "email",
                    "type": "String"
                }
            },
            "required_args": []
        },
        "getUsers": {
            "name": "getUsers",
            "relation": "User",
            "is_list": true,
            "args": {
                "id": {
                    "name": "id",
                    "type": "ID"
                },
                "name": {
                    "name": "name",
                    "type": "String"
                },
                "email": {
                    "name": "email",
                    "type": "String"
                },
                "search": {
                    "name": "search",
                    "type": "String"
                }
            },
            "required_args": []
        },
        "getCompanyTypes": {
            "name": "getCompanyTypes",
            "relation": "CompanyType",
            "is_list": true,
            "args": {
                "id": {
                    "name": "id",
                    "type": "ID"
                },
                "name": {
                    "name": "name",
                    "type": "String"
                },
                "search": {
                    "name": "search",
                    "type": "String"
                }
            },
            "required_args": []
        },
        "getCompanyType": {
            "name": "getCompanyType",
            "relation": "CompanyType",
            "is_list": false,
            "args": {
                "id": {
                    "name": "id",
                    "type": "ID"
                },
                "name": {
                    "name": "name",
                    "type": "String"
                }
            },
            "required_args": []
        },
        "getCompany": {
            "name": "getCompany",
            "relation": "Company",
            "is_list": false,
            "args": {
                "id": {
                    "name": "id",
                    "type": "ID"
                },
                "name": {
                    "name": "name",
                    "type": "String"
                },
                "enabled": {
                    "name": "enabled",
                    "type": "Boolean"
                },
                "description": {
                    "name": "description",
                    "type": "String"
                },
                "type_id": {
                    "name": "type_id",
                    "type": "Int"
                },
                "created_at": {
                    "name": "created_at",
                    "type": "JsonType"
                },
                "updated_at": {
                    "name": "updated_at",
                    "type": "JsonType"
                }
            },
            "required_args": []
        },
        "getCompanies": {
            "name": "getCompanies",
            "relation": "Company",
            "is_list": true,
            "args": {
                "id": {
                    "name": "id",
                    "type": "ID"
                },
                "name": {
                    "name": "name",
                    "type": "String"
                },
                "enabled": {
                    "name": "enabled",
                    "type": "Boolean"
                },
                "description": {
                    "name": "description",
                    "type": "String"
                },
                "type_id": {
                    "name": "type_id",
                    "type": "Int"
                },
                "created_at": {
                    "name": "created_at",
                    "type": "JsonType"
                },
                "updated_at": {
                    "name": "updated_at",
                    "type": "JsonType"
                },
                "search": {
                    "name": "search",
                    "type": "String"
                }
            },
            "required_args": []
        },
        "getProductTypes": {
            "name": "getProductTypes",
            "relation": "ProductType",
            "is_list": true,
            "args": {
                "id": {
                    "name": "id",
                    "type": "ID"
                },
                "name": {
                    "name": "name",
                    "type": "String"
                },
                "search": {
                    "name": "search",
                    "type": "String"
                }
            },
            "required_args": []
        },
        "getProductType": {
            "name": "getProductType",
            "relation": "ProductType",
            "is_list": false,
            "args": {
                "id": {
                    "name": "id",
                    "type": "ID"
                },
                "name": {
                    "name": "name",
                    "type": "String"
                }
            },
            "required_args": []
        },
        "getProduct": {
            "name": "getProduct",
            "relation": "Product",
            "is_list": false,
            "args": {
                "id": {
                    "name": "id",
                    "type": "ID"
                },
                "name": {
                    "name": "name",
                    "type": "String"
                },
                "category_id": {
                    "name": "category_id",
                    "type": "Int"
                },
                "type_id": {
                    "name": "type_id",
                    "type": "Int"
                },
                "company_id": {
                    "name": "company_id",
                    "type": "Int"
                },
                "description": {
                    "name": "description",
                    "type": "String"
                },
                "enabled": {
                    "name": "enabled",
                    "type": "Boolean"
                },
                "score": {
                    "name": "score",
                    "type": "Int"
                },
                "created_at": {
                    "name": "created_at",
                    "type": "JsonType"
                },
                "updated_at": {
                    "name": "updated_at",
                    "type": "JsonType"
                }
            },
            "required_args": []
        },
        "getProducts": {
            "name": "getProducts",
            "relation": "Product",
            "is_list": true,
            "args": {
                "id": {
                    "name": "id",
                    "type": "ID"
                },
                "name": {
                    "name": "name",
                    "type": "String"
                },
                "category_id": {
                    "name": "category_id",
                    "type": "Int"
                },
                "type_id": {
                    "name": "type_id",
                    "type": "Int"
                },
                "company_id": {
                    "name": "company_id",
                    "type": "Int"
                },
                "description": {
                    "name": "description",
                    "type": "String"
                },
                "enabled": {
                    "name": "enabled",
                    "type": "Boolean"
                },
                "score": {
                    "name": "score",
                    "type": "Int"
                },
                "created_at": {
                    "name": "created_at",
                    "type": "JsonType"
                },
                "updated_at": {
                    "name": "updated_at",
                    "type": "JsonType"
                },
                "search": {
                    "name": "search",
                    "type": "String"
                }
            },
            "required_args": []
        },
        "getProductCategory": {
            "name": "getProductCategory",
            "relation": "ProductCategory",
            "is_list": false,
            "args": {
                "id": {
                    "name": "id",
                    "type": "ID"
                },
                "name": {
                    "name": "name",
                    "type": "String"
                }
            },
            "required_args": []
        },
        "getProductCategories": {
            "name": "getProductCategories",
            "relation": "ProductCategory",
            "is_list": true,
            "args": {
                "id": {
                    "name": "id",
                    "type": "ID"
                },
                "name": {
                    "name": "name",
                    "type": "String"
                },
                "search": {
                    "name": "search",
                    "type": "String"
                }
            },
            "required_args": []
        },
        "getAnswers": {
            "name": "getAnswers",
            "relation": "Answer",
            "is_list": true,
            "args": {
                "id": {
                    "name": "id",
                    "type": "ID"
                },
                "name": {
                    "name": "name",
                    "type": "String"
                },
                "enabled": {
                    "name": "enabled",
                    "type": "Boolean"
                },
                "value": {
                    "name": "value",
                    "type": "String"
                },
                "values": {
                    "name": "values",
                    "type": "JsonType"
                },
                "title": {
                    "name": "title",
                    "type": "String"
                },
                "placeholder": {
                    "name": "placeholder",
                    "type": "String"
                },
                "label": {
                    "name": "label",
                    "type": "String"
                },
                "position": {
                    "name": "position",
                    "type": "Int"
                },
                "type_id": {
                    "name": "type_id",
                    "type": "Int"
                },
                "field_id": {
                    "name": "field_id",
                    "type": "Int"
                },
                "question_id": {
                    "name": "question_id",
                    "type": "Int"
                },
                "is_currency": {
                    "name": "is_currency",
                    "type": "Boolean"
                },
                "is_month": {
                    "name": "is_month",
                    "type": "Boolean"
                },
                "is_iin": {
                    "name": "is_iin",
                    "type": "Boolean"
                },
                "is_mail": {
                    "name": "is_mail",
                    "type": "Boolean"
                },
                "is_phone": {
                    "name": "is_phone",
                    "type": "Boolean"
                },
                "created_at": {
                    "name": "created_at",
                    "type": "JsonType"
                },
                "updated_at": {
                    "name": "updated_at",
                    "type": "JsonType"
                },
                "search": {
                    "name": "search",
                    "type": "String"
                }
            },
            "required_args": []
        },
        "getAnswer": {
            "name": "getAnswer",
            "relation": "Answer",
            "is_list": false,
            "args": {
                "id": {
                    "name": "id",
                    "type": "ID"
                },
                "name": {
                    "name": "name",
                    "type": "String"
                },
                "enabled": {
                    "name": "enabled",
                    "type": "Boolean"
                },
                "value": {
                    "name": "value",
                    "type": "String"
                },
                "values": {
                    "name": "values",
                    "type": "JsonType"
                },
                "title": {
                    "name": "title",
                    "type": "String"
                },
                "placeholder": {
                    "name": "placeholder",
                    "type": "String"
                },
                "label": {
                    "name": "label",
                    "type": "String"
                },
                "position": {
                    "name": "position",
                    "type": "Int"
                },
                "type_id": {
                    "name": "type_id",
                    "type": "Int"
                },
                "field_id": {
                    "name": "field_id",
                    "type": "Int"
                },
                "question_id": {
                    "name": "question_id",
                    "type": "Int"
                },
                "is_currency": {
                    "name": "is_currency",
                    "type": "Boolean"
                },
                "is_month": {
                    "name": "is_month",
                    "type": "Boolean"
                },
                "is_iin": {
                    "name": "is_iin",
                    "type": "Boolean"
                },
                "is_mail": {
                    "name": "is_mail",
                    "type": "Boolean"
                },
                "is_phone": {
                    "name": "is_phone",
                    "type": "Boolean"
                },
                "created_at": {
                    "name": "created_at",
                    "type": "JsonType"
                },
                "updated_at": {
                    "name": "updated_at",
                    "type": "JsonType"
                }
            },
            "required_args": []
        },
        "getAnswerTypes": {
            "name": "getAnswerTypes",
            "relation": "AnswerType",
            "is_list": true,
            "args": {
                "id": {
                    "name": "id",
                    "type": "ID"
                },
                "name": {
                    "name": "name",
                    "type": "String"
                }
            },
            "required_args": []
        },
        "getAnswerType": {
            "name": "getAnswerType",
            "relation": "AnswerType",
            "is_list": false,
            "args": {
                "id": {
                    "name": "id",
                    "type": "ID"
                },
                "name": {
                    "name": "name",
                    "type": "String"
                }
            },
            "required_args": []
        },
        "getQuestionAction": {
            "name": "getQuestionAction",
            "relation": "QuestionActionType",
            "is_list": false,
            "args": {
                "id": {
                    "name": "id",
                    "type": "ID"
                },
                "answer_id": {
                    "name": "question_id",
                    "type": "Int"
                },
                "question_id": {
                    "name": "question_id",
                    "type": "Int"
                },
                "category_id": {
                    "name": "category_id",
                    "type": "Int"
                },
                "action": {
                    "name": "action",
                    "type": "String"
                },
                "created_at": {
                    "name": "created_at",
                    "type": "JsonType"
                },
                "updated_at": {
                    "name": "updated_at",
                    "type": "JsonType"
                }
            },
            "required_args": []
        },
        "getQuestionActions": {
            "name": "getQuestionActions",
            "relation": "QuestionActionType",
            "is_list": true,
            "args": {
                "id": {
                    "name": "id",
                    "type": "ID"
                },
                "answer_id": {
                    "name": "question_id",
                    "type": "Int"
                },
                "question_id": {
                    "name": "question_id",
                    "type": "Int"
                },
                "category_id": {
                    "name": "category_id",
                    "type": "Int"
                },
                "action": {
                    "name": "action",
                    "type": "String"
                },
                "created_at": {
                    "name": "created_at",
                    "type": "JsonType"
                },
                "updated_at": {
                    "name": "updated_at",
                    "type": "JsonType"
                }
            },
            "required_args": []
        },
        "getStepAction": {
            "name": "getStepAction",
            "relation": "StepAction",
            "is_list": false,
            "args": {
                "id": {
                    "name": "id",
                    "type": "ID"
                },
                "answer_id": {
                    "name": "question_id",
                    "type": "Int"
                },
                "step_id": {
                    "name": "step_id",
                    "type": "Int"
                },
                "action": {
                    "name": "action",
                    "type": "String"
                },
                "created_at": {
                    "name": "created_at",
                    "type": "JsonType"
                },
                "updated_at": {
                    "name": "updated_at",
                    "type": "JsonType"
                }
            },
            "required_args": []
        },
        "getStepActions": {
            "name": "getStepActions",
            "relation": "StepAction",
            "is_list": true,
            "args": {
                "id": {
                    "name": "id",
                    "type": "ID"
                },
                "answer_id": {
                    "name": "question_id",
                    "type": "Int"
                },
                "step_id": {
                    "name": "step_id",
                    "type": "Int"
                },
                "action": {
                    "name": "action",
                    "type": "String"
                },
                "created_at": {
                    "name": "created_at",
                    "type": "JsonType"
                },
                "updated_at": {
                    "name": "updated_at",
                    "type": "JsonType"
                }
            },
            "required_args": []
        },
        "getQuestions": {
            "name": "getQuestions",
            "relation": "Question",
            "is_list": true,
            "args": {
                "id": {
                    "name": "id",
                    "type": "ID"
                },
                "name": {
                    "name": "name",
                    "type": "String"
                },
                "question_code": {
                    "name": "question_code",
                    "type": "String"
                },
                "enabled": {
                    "name": "enabled",
                    "type": "Boolean"
                },
                "type_id": {
                    "name": "type_id",
                    "type": "Int"
                },
                "field_id": {
                    "name": "field_id",
                    "type": "Int"
                },
                "position": {
                    "name": "position",
                    "type": "Int"
                },
                "created_at": {
                    "name": "created_at",
                    "type": "JsonType"
                },
                "updated_at": {
                    "name": "updated_at",
                    "type": "JsonType"
                },
                "search": {
                    "name": "search",
                    "type": "String"
                }
            },
            "required_args": []
        },
        "getQuestion": {
            "name": "getQuestion",
            "relation": "Question",
            "is_list": false,
            "args": {
                "id": {
                    "name": "id",
                    "type": "ID"
                },
                "name": {
                    "name": "name",
                    "type": "String"
                },
                "question_code": {
                    "name": "question_code",
                    "type": "String"
                },
                "enabled": {
                    "name": "enabled",
                    "type": "Boolean"
                },
                "type_id": {
                    "name": "type_id",
                    "type": "Int"
                },
                "field_id": {
                    "name": "field_id",
                    "type": "Int"
                },
                "position": {
                    "name": "position",
                    "type": "Int"
                },
                "created_at": {
                    "name": "created_at",
                    "type": "JsonType"
                },
                "updated_at": {
                    "name": "updated_at",
                    "type": "JsonType"
                }
            },
            "required_args": []
        },
        "getQuestionTypes": {
            "name": "getQuestionTypes",
            "relation": "QuestionType",
            "is_list": true,
            "args": {
                "id": {
                    "name": "id",
                    "type": "ID"
                },
                "name": {
                    "name": "name",
                    "type": "String"
                },
                "search": {
                    "name": "search",
                    "type": "String"
                }
            },
            "required_args": []
        },
        "getQuestionType": {
            "name": "getQuestionType",
            "relation": "QuestionType",
            "is_list": false,
            "args": {
                "id": {
                    "name": "id",
                    "type": "ID"
                },
                "name": {
                    "name": "name",
                    "type": "String"
                }
            },
            "required_args": []
        },
        "getQuestionState": {
            "name": "getQuestionState",
            "relation": "QuestionState",
            "is_list": false,
            "args": {
                "id": {
                    "name": "id",
                    "type": "ID"
                },
                "state": {
                    "name": "state",
                    "type": "String"
                },
                "question_id": {
                    "name": "question_id",
                    "type": "Int"
                },
                "created_at": {
                    "name": "created_at",
                    "type": "JsonType"
                },
                "updated_at": {
                    "name": "updated_at",
                    "type": "JsonType"
                }
            },
            "required_args": []
        },
        "getQuestionStates": {
            "name": "getQuestionStates",
            "relation": "QuestionState",
            "is_list": true,
            "args": {
                "id": {
                    "name": "id",
                    "type": "ID"
                },
                "state": {
                    "name": "state",
                    "type": "String"
                },
                "question_id": {
                    "name": "question_id",
                    "type": "Int"
                },
                "created_at": {
                    "name": "created_at",
                    "type": "JsonType"
                },
                "updated_at": {
                    "name": "updated_at",
                    "type": "JsonType"
                }
            },
            "required_args": []
        },
        "getFields": {
            "name": "getFields",
            "relation": "Field",
            "is_list": true,
            "args": {
                "id": {
                    "name": "id",
                    "type": "ID"
                },
                "title": {
                    "name": "title",
                    "type": "String"
                },
                "name": {
                    "name": "name",
                    "type": "String"
                },
                "order": {
                    "name": "order",
                    "type": "Int"
                },
                "description": {
                    "name": "description",
                    "type": "String"
                },
                "enabled": {
                    "name": "enabled",
                    "type": "Boolean"
                },
                "calculated": {
                    "name": "calculated",
                    "type": "Boolean"
                },
                "system": {
                    "name": "system",
                    "type": "Boolean"
                },
                "created_at": {
                    "name": "created_at",
                    "type": "JsonType"
                },
                "updated_at": {
                    "name": "updated_at",
                    "type": "JsonType"
                },
                "search": {
                    "name": "search",
                    "type": "String"
                },
                "order_by": {
                    "name": "order_by",
                    "type": "String"
                }
            },
            "required_args": []
        },
        "getField": {
            "name": "getField",
            "relation": "Field",
            "is_list": false,
            "args": {
                "id": {
                    "name": "id",
                    "type": "ID"
                },
                "title": {
                    "name": "title",
                    "type": "String"
                },
                "name": {
                    "name": "name",
                    "type": "String"
                },
                "order": {
                    "name": "order",
                    "type": "Int"
                },
                "description": {
                    "name": "description",
                    "type": "String"
                },
                "enabled": {
                    "name": "enabled",
                    "type": "Boolean"
                },
                "calculated": {
                    "name": "calculated",
                    "type": "Boolean"
                },
                "system": {
                    "name": "system",
                    "type": "Boolean"
                },
                "created_at": {
                    "name": "created_at",
                    "type": "JsonType"
                },
                "updated_at": {
                    "name": "updated_at",
                    "type": "JsonType"
                }
            },
            "required_args": []
        },
        "getSteps": {
            "name": "getSteps",
            "relation": "Step",
            "is_list": true,
            "args": {
                "id": {
                    "name": "id",
                    "type": "ID"
                },
                "name": {
                    "name": "name",
                    "type": "String"
                },
                "enabled": {
                    "name": "enabled",
                    "type": "Boolean"
                },
                "category_id": {
                    "name": "category_id",
                    "type": "Int"
                },
                "number": {
                    "name": "number",
                    "type": "Int"
                },
                "title": {
                    "name": "title",
                    "type": "String"
                },
                "bar_text_top": {
                    "name": "bar_text_top",
                    "type": "String"
                },
                "bar_text_bottom": {
                    "name": "bar_text_bottom",
                    "type": "String"
                },
                "position": {
                    "name": "position",
                    "type": "Int"
                },
                "show_title": {
                    "name": "show_title",
                    "type": "Boolean"
                },
                "code": {
                    "name": "code",
                    "type": "String"
                },
                "created_at": {
                    "name": "created_at",
                    "type": "JsonType"
                },
                "updated_at": {
                    "name": "updated_at",
                    "type": "JsonType"
                },
                "search": {
                    "name": "search",
                    "type": "String"
                }
            },
            "required_args": []
        },
        "getStep": {
            "name": "getStep",
            "relation": "Step",
            "is_list": false,
            "args": {
                "id": {
                    "name": "id",
                    "type": "ID"
                },
                "name": {
                    "name": "name",
                    "type": "String"
                },
                "enabled": {
                    "name": "enabled",
                    "type": "Boolean"
                },
                "category_id": {
                    "name": "category_id",
                    "type": "Int"
                },
                "number": {
                    "name": "number",
                    "type": "Int"
                },
                "title": {
                    "name": "title",
                    "type": "String"
                },
                "bar_text_top": {
                    "name": "bar_text_top",
                    "type": "String"
                },
                "bar_text_bottom": {
                    "name": "bar_text_bottom",
                    "type": "String"
                },
                "position": {
                    "name": "position",
                    "type": "Int"
                },
                "show_title": {
                    "name": "show_title",
                    "type": "Boolean"
                },
                "code": {
                    "name": "code",
                    "type": "String"
                },
                "created_at": {
                    "name": "created_at",
                    "type": "JsonType"
                },
                "updated_at": {
                    "name": "updated_at",
                    "type": "JsonType"
                }
            },
            "required_args": []
        },
        "getScoreMaps": {
            "name": "getScoreMaps",
            "relation": "ScoreMap",
            "is_list": true,
            "args": {
                "id": {
                    "name": "id",
                    "type": "ID"
                },
                "name": {
                    "name": "name",
                    "type": "String"
                },
                "is_product": {
                    "name": "is_product",
                    "type": "Boolean"
                },
                "category_id": {
                    "name": "category_id",
                    "type": "Int"
                },
                "product_id": {
                    "name": "product_id",
                    "type": "Int"
                },
                "created_at": {
                    "name": "created_at",
                    "type": "JsonType"
                },
                "updated_at": {
                    "name": "updated_at",
                    "type": "JsonType"
                },
                "search": {
                    "name": "search",
                    "type": "String"
                }
            },
            "required_args": []
        },
        "getScoreMap": {
            "name": "getScoreMap",
            "relation": "ScoreMap",
            "is_list": false,
            "args": {
                "id": {
                    "name": "id",
                    "type": "ID"
                },
                "name": {
                    "name": "name",
                    "type": "String"
                },
                "is_product": {
                    "name": "is_product",
                    "type": "Boolean"
                },
                "category_id": {
                    "name": "category_id",
                    "type": "Int"
                },
                "product_id": {
                    "name": "product_id",
                    "type": "Int"
                },
                "created_at": {
                    "name": "created_at",
                    "type": "JsonType"
                },
                "updated_at": {
                    "name": "updated_at",
                    "type": "JsonType"
                }
            },
            "required_args": []
        },
        "getScoreRules": {
            "name": "getScoreRules",
            "relation": "ScoreRule",
            "is_list": true,
            "args": {
                "id": {
                    "name": "id",
                    "type": "ID"
                },
                "name": {
                    "name": "name",
                    "type": "String"
                },
                "type": {
                    "name": "type",
                    "type": "String"
                },
                "enabled": {
                    "name": "enabled",
                    "type": "Boolean"
                },
                "score_map_id": {
                    "name": "score_map_id",
                    "type": "Int"
                },
                "field_id": {
                    "name": "field_id",
                    "type": "Int"
                },
                "dep_field_id": {
                    "name": "dep_field_id",
                    "type": "Int"
                },
                "condition": {
                    "name": "condition",
                    "type": "JsonType"
                },
                "values": {
                    "name": "values",
                    "type": "JsonType"
                },
                "created_at": {
                    "name": "created_at",
                    "type": "JsonType"
                },
                "updated_at": {
                    "name": "updated_at",
                    "type": "JsonType"
                },
                "search": {
                    "name": "search",
                    "type": "String"
                }
            },
            "required_args": []
        },
        "getScoreRule": {
            "name": "getScoreRule",
            "relation": "ScoreRule",
            "is_list": false,
            "args": {
                "id": {
                    "name": "id",
                    "type": "ID"
                },
                "name": {
                    "name": "name",
                    "type": "String"
                },
                "type": {
                    "name": "type",
                    "type": "String"
                },
                "enabled": {
                    "name": "enabled",
                    "type": "Boolean"
                },
                "score_map_id": {
                    "name": "score_map_id",
                    "type": "Int"
                },
                "field_id": {
                    "name": "field_id",
                    "type": "Int"
                },
                "dep_field_id": {
                    "name": "dep_field_id",
                    "type": "Int"
                },
                "condition": {
                    "name": "condition",
                    "type": "JsonType"
                },
                "values": {
                    "name": "values",
                    "type": "JsonType"
                },
                "created_at": {
                    "name": "created_at",
                    "type": "JsonType"
                },
                "updated_at": {
                    "name": "updated_at",
                    "type": "JsonType"
                }
            },
            "required_args": []
        },
        "getScoreFilters": {
            "name": "getScoreFilters",
            "relation": "ScoreFilter",
            "is_list": true,
            "args": {
                "id": {
                    "name": "id",
                    "type": "ID"
                },
                "name": {
                    "name": "name",
                    "type": "String"
                },
                "type": {
                    "name": "type",
                    "type": "String"
                },
                "enabled": {
                    "name": "enabled",
                    "type": "Boolean"
                },
                "score_map_id": {
                    "name": "score_map_id",
                    "type": "Int"
                },
                "field_id": {
                    "name": "field_id",
                    "type": "Int"
                },
                "dep_field_id": {
                    "name": "dep_field_id",
                    "type": "Int"
                },
                "condition": {
                    "name": "condition",
                    "type": "JsonType"
                },
                "created_at": {
                    "name": "created_at",
                    "type": "JsonType"
                },
                "updated_at": {
                    "name": "updated_at",
                    "type": "JsonType"
                },
                "search": {
                    "name": "search",
                    "type": "String"
                }
            },
            "required_args": []
        },
        "getScoreFilter": {
            "name": "getScoreFilter",
            "relation": "ScoreFilter",
            "is_list": false,
            "args": {
                "id": {
                    "name": "id",
                    "type": "ID"
                },
                "name": {
                    "name": "name",
                    "type": "String"
                },
                "type": {
                    "name": "type",
                    "type": "String"
                },
                "enabled": {
                    "name": "enabled",
                    "type": "Boolean"
                },
                "score_map_id": {
                    "name": "score_map_id",
                    "type": "Int"
                },
                "field_id": {
                    "name": "field_id",
                    "type": "Int"
                },
                "dep_field_id": {
                    "name": "dep_field_id",
                    "type": "Int"
                },
                "condition": {
                    "name": "condition",
                    "type": "JsonType"
                },
                "created_at": {
                    "name": "created_at",
                    "type": "JsonType"
                },
                "updated_at": {
                    "name": "updated_at",
                    "type": "JsonType"
                }
            },
            "required_args": []
        },
        "checkRule": {
            "name": "checkRule",
            "relation": null,
            "is_list": false,
            "args": {
                "id": {
                    "name": "id",
                    "type": "ID!"
                },
                "fields": {
                    "name": "fields",
                    "type": "JsonType!"
                }
            },
            "required_args": [
                "id",
                "fields"
            ]
        },
        "checkFilter": {
            "name": "checkFilter",
            "relation": null,
            "is_list": false,
            "args": {
                "id": {
                    "name": "id",
                    "type": "ID!"
                },
                "fields": {
                    "name": "fields",
                    "type": "JsonType!"
                }
            },
            "required_args": [
                "id",
                "fields"
            ]
        },
        "getRank": {
            "name": "getRank",
            "relation": "RankType",
            "is_list": false,
            "args": {
                "id": {
                    "name": "id",
                    "type": "ID"
                },
                "title": {
                    "name": "title",
                    "type": "String"
                },
                "name": {
                    "name": "name",
                    "type": "String"
                },
                "default": {
                    "name": "default",
                    "type": "Boolean"
                },
                "created_at": {
                    "name": "created_at",
                    "type": "JsonType"
                },
                "updated_at": {
                    "name": "updated_at",
                    "type": "JsonType"
                }
            },
            "required_args": []
        },
        "getRanks": {
            "name": "getRanks",
            "relation": "RankType",
            "is_list": true,
            "args": {
                "id": {
                    "name": "id",
                    "type": "ID"
                },
                "title": {
                    "name": "title",
                    "type": "String"
                },
                "name": {
                    "name": "name",
                    "type": "String"
                },
                "default": {
                    "name": "default",
                    "type": "Boolean"
                },
                "created_at": {
                    "name": "created_at",
                    "type": "JsonType"
                },
                "updated_at": {
                    "name": "updated_at",
                    "type": "JsonType"
                },
                "search": {
                    "name": "search",
                    "type": "String"
                }
            },
            "required_args": []
        },
        "getCategoryRank": {
            "name": "getCategoryRank",
            "relation": "CategoryRank",
            "is_list": false,
            "args": {
                "id": {
                    "name": "id",
                    "type": "ID"
                }
            },
            "required_args": []
        },
        "getCategoryRanks": {
            "name": "getCategoryRanks",
            "relation": "CategoryRank",
            "is_list": true,
            "args": {
                "id": {
                    "name": "id",
                    "type": "ID"
                },
                "score": {
                    "name": "score",
                    "type": "Int"
                },
                "rank_id": {
                    "name": "rank_id",
                    "type": "Int"
                },
                "category_id": {
                    "name": "category_id",
                    "type": "Int"
                },
                "created_at": {
                    "name": "created_at",
                    "type": "JsonType"
                },
                "updated_at": {
                    "name": "updated_at",
                    "type": "JsonType"
                },
                "search": {
                    "name": "search",
                    "type": "String"
                }
            },
            "required_args": []
        },
        "getScoreReport": {
            "name": "getScoreReport",
            "relation": "ScoreResultReport",
            "is_list": false,
            "args": {
                "id": {
                    "name": "id",
                    "type": "ID"
                },
                "category_id": {
                    "name": "category_id",
                    "type": "ID"
                },
                "page": {
                    "name": "page",
                    "type": "Int"
                },
                "date_start": {
                    "name": "date_start",
                    "type": "String"
                },
                "date_end": {
                    "name": "date_end",
                    "type": "String"
                },
                "search": {
                    "name": "search",
                    "type": "String"
                }
            },
            "required_args": []
        }
    }
};

export default scheme;