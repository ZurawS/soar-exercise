import { SoarData } from '../app/models/SoarData.model';

const TestDataPlaceholder: SoarData = {
  CreatorUserId: null,
  Events: [
    {
      _fields: {
        BaseEventIds: [],
        ParentEventId: 0,
        DeviceVendor: 'Google Chronicle',
        DeviceProduct: 'RULE',
        DeviceEventClassId: 'USER_UNCATEGORIZED',
      },
      _rawDataFields: {
        event_metadata_productLogId: 'df1d9081adc94a799b12c7a6ec3131e1',
        event_metadata_eventTimestamp: '2024-02-02T10:05:38.976048Z',
        event_metadata_eventType: 'USER_UNCATEGORIZED',
        event_metadata_vendorName: 'Google',
        event_metadata_productName: 'Security Command Center',
        event_metadata_productEventType:
          'Discovery: Service Account Self-Investigation',
        event_metadata_description: 'Event Threat Detection',
        event_metadata_ingestedTimestamp: '2024-02-02T10:05:42.296892Z',
        event_metadata_id: 'AAAAAMwloZsG07Q1JEgbmeba2UEAAAAADgAAAAAAAAA=',
        event_metadata_logType: 'GCP_SECURITYCENTER_THREAT',
        event_metadata_baseLabels_logTypes_1: 'GCP_SECURITYCENTER_THREAT',
        event_metadata_baseLabels_allowScopedAccess: 'True',
        event_metadata_enrichmentLabels_logTypes_1: 'GCP_IAM_ANALYSIS',
        event_metadata_enrichmentLabels_logTypes_2: 'GCP_IAM_CONTEXT',
        event_metadata_enrichmentLabels_allowScopedAccess: 'True',
        event_principal_hostname: 'gce-internal-ip',
        event_principal_user_userid: '100282268471516296206',
        event_principal_user_userDisplayName:
          'A SA to run the vm that refresh threats and resources',
        event_principal_user_emailAddresses_1:
          'sa-cron-vm@scce-lab-401713.iam.gserviceaccount.com',
        event_principal_user_emailAddresses_2:
          'sa-cron-vm@scce-lab-401713.iam.gserviceaccount.com',
        event_principal_user_emailAddresses_3:
          'sa-cron-vm@scce-lab-401713.iam.gserviceaccount.com',
        event_principal_user_emailAddresses_4:
          'service-429213313266@compute-system.iam.gserviceaccount.com',
        event_principal_user_emailAddresses_5:
          'terraform-sa@scce-lab-401713.iam.gserviceaccount.com',
        event_principal_user_productObjectId: '100282268471516296206',
        event_principal_user_attribute_cloud_environment:
          'GOOGLE_CLOUD_PLATFORM',
        event_principal_user_attribute_roles_1_name:
          'roles/storage.objectAdmin',
        event_principal_user_attribute_roles_1_type: 'SERVICE_ACCOUNT',
        event_principal_user_accountType: 'SERVICE_ACCOUNT_TYPE',
        event_principal_resource_name: '-',
        event_principal_asset_hostname: 'gce-internal-ip',
        event_target_application: 'iam.googleapis.com',
        event_target_resource_name:
          '//iam.googleapis.com/projects/dummyProject/serviceAccounts/108132278076916519438',
        event_target_resource_productObjectId: '505272050297586702',
        event_target_resourceAncestors_1_name:
          'organizations/dummyOrganization/sources/505272050297586702',
        event_target_resourceAncestors_2_name:
          '//cloudresourcemanager.googleapis.com/projects/dummyProject//console.cloud.google.com/security/command-center/findingsv2;name=organizations%2FdummyOrganization%2Fsources%2F505272050297586702%2Ffindings%2Fdf1d9081adc94a799b12c7a6ec3131e1',
        event_securityResult_2_alertState: 'ALERTING',
        event_network_http_userAgent:
          'google-cloud-sdk gcloud/462.0.1 command/gcloud.iam.service-accounts.add-iam-policy-binding invocation-id/4e9999a137444f2a8313e67d180c8399 environment/GCE environment-version/None client-os/LINUX client-os-ver/5.10.0 client-pltf-arch/x86_64 interactive/True from-script/False python/3.11.7 term/xterm-256color (Linux 5.10.0-26-cloud-amd64),gzip(gfe)',
        event_network_http_parsedUserAgent_family: 'USER_DEFINED',
        type: 'GCTI_FINDING',
        detection_1_ruleName:
          'SCC: Discovery: Service Account Self-Investigation with Resource Creation',
        detection_1_summary: 'Rule Detection',
        detection_1_description:
          'Detection of an IAM service account credential that is used to investigate the roles and permissions associated with that same service account',
        detection_1_severity: 'HIGH',
        detection_1_urlBackToProduct:
          'https://gglwl.backstory.chronicle.security/alert?alertId=de_bd51e7b7-3370-44c0-c738-2f8bcf5b3dd6',
        detection_1_ruleId: 'ur_c512c6b6-56fa-41d5-aeae-b01b2d52cfe8',
        detection_1_alertState: 'ALERTING',
        detection_1_ruleType: 'MULTI_EVENT',
        detection_1_detectionFields_1_key: 'service_account',
        detection_1_detectionFields_1_value:
          'sa-cron-vm@scce-lab-401713.iam.gserviceaccount.com',
        detection_1_detectionFields_1_source:
          'udm.principal.user.email_addresses',
        detection_1_ruleLabels_1_key: 'reference',
        detection_1_ruleLabels_1_value:
          'https://cloud.google.com/security-command-center/docs/how-to-investigate-threats#service_account_self-investigation',
        detection_1_ruleLabels_2_key: 'rule_name',
        detection_1_ruleLabels_2_value:
          'SCC: Discovery: Service Account Self-Investigation with Resource Creation',
        detection_1_outcomes_1_key: 'roles',
        detection_1_outcomes_1_value: 'roles/storage.objectAdmin',
        detection_1_outcomes_2_key: 'group_memberships',
        detection_1_outcomes_3_key: 'ip',
        detection_1_outcomes_3_source: 'udm.principal.ip',
        detection_1_outcomes_4_key: 'principal_email_address',
        detection_1_outcomes_4_value:
          'sa-cron-vm@scce-lab-401713.iam.gserviceaccount.com',
        detection_1_outcomes_4_source: 'udm.principal.user.email_addresses',
        detection_1_outcomes_5_key: 'risk_score',
        detection_1_outcomes_5_value: '90',
        detection_1_outcomes_6_key: 'vendor_name',
        detection_1_outcomes_6_value: 'Google',
        detection_1_outcomes_7_key: 'product_name',
        detection_1_outcomes_7_value: 'Security Command Center',
        detection_1_ruleSet: '92f84c0d-678c-c2ba-fd76-9baa399885a2',
        detection_1_ruleSetDisplayName:
          'CDIR SCC Enhanced Defense Discovery Alerts',
        detection_1_riskScore: '90',
        detection_1_rulesetCategoryDisplayName: 'Cloud Threats',
        createdTime: '2024-02-02T11:05:32.43988Z',
        lastUpdatedTime: '2024-02-02T11:05:32.43988Z',
        id: 'de_bd51e7b7-3370-44c0-c738-2f8bcf5b3dd6',
        timeWindow_startTime: '2024-02-02T09:36:00Z',
        timeWindow_endTime: '2024-02-02T10:06:00Z',
        detectionTime: '2024-02-02T10:06:00Z',
        tags_1: 'TA0007',
        tags_2: 'T1069.003',
        alert_type: 'RULE',
        event_type: 'USER_UNCATEGORIZED',
        event_category: 'USER',
        event_principal_user_emailAddresses:
          'sa-cron-vm@scce-lab-401713.iam.gserviceaccount.com',
        event_principal_user_attribute_labels_sourceProperties_properties_serviceAccountGetsOwnIamPolicy_callerUserAgent:
          'google-cloud-sdk gcloud/462.0.1 command/gcloud.iam.service-accounts.add-iam-policy-binding environment/GCE environment-version/None client-os/LINUX client-os-ver/5.10.0 client-pltf-arch/x86_64 interactive/True from-script/False python/3.11.7 term/xterm-256color (Linux 5.10.0-26-cloud-amd64),gzip(gfe)',
        event_principal_user_attribute_labels_access_principalSubject:
          'terraform-sa@scce-lab-401713.iam.gserviceaccount.com',
        event_target_resource_attribute_labels_finding_id:
          'df1d9081adc94a799b12c7a6ec3131e1',
        event_target_resource_attribute_labels_source_id: '505272050297586702',
        event_target_labels_access_methodName:
          'google.iam.admin.v1.GetIAMPolicy',
        event_securityResult_detectionFields_mute: 'UNDEFINED',
        event_securityResult_detectionFields_primary_tactic: 'DISCOVERY',
        event_securityResult_detectionFields_primary_technique:
          'CLOUD_GROUPS, PERMISSION_GROUPS_DISCOVERY',
        'event_securityResult_detectionFields_Cloud Logging Query Link':
          'https://console.cloud.google.com/logs/query;query=timestamp%3D%222024-02-02T10:05:34.971369713Z%22%0AinsertId%3D%22mhgk2ae2wk6r%22?project=scce-lab-401713',
        event_securityResult_detectionFields_sourceProperties_detectionCategory_indicator:
          'audit_log',
        event_securityResult_detectionFields_sourceProperties_detectionCategory_technique:
          'discovery',
        event_securityResult_detectionFields_securityMarks_name:
          'organizations/dummyOrganization/sources/505272050297586702/findings/df1d9081adc94a799b12c7a6ec3131e1/securityMarks',
        'event_securityResult_detectionFields_MITRE Link':
          'https://attack.mitre.org/techniques/T1069/003/',
        event_securityResult_detectionFields_createTime:
          '2024-02-02T10:05:39.101Z',
        event_securityResult_detectionFields_sourceProperties_detectionCategory_subRuleName:
          'service_account_gets_own_iam_policy',
        event_securityResult_detectionFields_state: 'ACTIVE',
        detection_detectionFields_service_account:
          'sa-cron-vm@scce-lab-401713.iam.gserviceaccount.com',
        detection_ruleLabels_reference:
          'https://cloud.google.com/security-command-center/docs/how-to-investigate-threats#service_account_self-investigation',
        detection_ruleLabels_rule_name:
          'SCC: Discovery: Service Account Self-Investigation with Resource Creation',
        detection_outcomes_roles: 'roles/storage.objectAdmin',
        detection_outcomes_principal_email_address:
          'sa-cron-vm@scce-lab-401713.iam.gserviceaccount.com',
        detection_outcomes_risk_score: '90',
        detection_outcomes_vendor_name: 'Google',
        detection_outcomes_product_name: 'Security Command Center',
      },
      Environment: null,
      SourceSystemName: null,
      Extensions: [],
    },
    {
      _fields: {
        BaseEventIds: [],
        ParentEventId: 0,
        DeviceVendor: 'Google Chronicle',
        DeviceProduct: 'RULE',
        DeviceEventClassId: 'USER_UNCATEGORIZED',
      },
      _rawDataFields: {
        event_metadata_productLogId: 'df1d9081adc94a799b12c7a6ec3131e1',
        event_metadata_eventTimestamp: '2024-02-02T10:05:38.976048Z',
        event_metadata_eventType: 'USER_UNCATEGORIZED',
        event_metadata_vendorName: 'Google',
        event_metadata_productName: 'Security Command Center',
        event_metadata_productEventType:
          'Discovery: Service Account Self-Investigation',
        event_metadata_description: 'Event Threat Detection',
        event_metadata_ingestedTimestamp: '2024-02-02T10:05:42.296892Z',
        event_metadata_id: 'AAAAAMwloZsG07Q1JEgbmeba2UEAAAAADgAAAAAAAAA=',
        event_metadata_logType: 'GCP_SECURITYCENTER_THREAT',
        event_metadata_baseLabels_logTypes_1: 'GCP_SECURITYCENTER_THREAT',
        event_metadata_baseLabels_allowScopedAccess: 'True',
        event_metadata_enrichmentLabels_logTypes_1: 'GCP_IAM_ANALYSIS',
        event_metadata_enrichmentLabels_logTypes_2: 'GCP_IAM_CONTEXT',
        event_metadata_enrichmentLabels_allowScopedAccess: 'True',
        event_principal_hostname: 'gce-internal-ip',
        event_principal_user_userid: '100282268471516296206',
        event_principal_user_userDisplayName:
          'A SA to run the vm that refresh threats and resources',
        event_principal_user_emailAddresses_1:
          'sa-cron-vm@scce-lab-401713.iam.gserviceaccount.com',
        event_principal_user_emailAddresses_2:
          'sa-cron-vm@scce-lab-401713.iam.gserviceaccount.com',
        event_principal_user_emailAddresses_3:
          'sa-cron-vm@scce-lab-401713.iam.gserviceaccount.com',
        event_principal_user_emailAddresses_4:
          'service-429213313266@compute-system.iam.gserviceaccount.com',
        event_principal_user_emailAddresses_5:
          'terraform-sa@scce-lab-401713.iam.gserviceaccount.com',
        event_principal_user_productObjectId: '100282268471516296206',
        event_principal_user_attribute_cloud_environment:
          'GOOGLE_CLOUD_PLATFORM',
        event_principal_user_attribute_roles_1_name:
          'roles/storage.objectAdmin',
        event_principal_user_attribute_roles_1_type: 'SERVICE_ACCOUNT',
        event_principal_user_accountType: 'SERVICE_ACCOUNT_TYPE',
        event_principal_resource_name: '-',
        event_principal_asset_hostname: 'gce-internal-ip',
        event_target_application: 'iam.googleapis.com',
        event_target_resource_name:
          '//iam.googleapis.com/projects/dummyProject/serviceAccounts/108132278076916519438',
        event_target_resource_productObjectId: '505272050297586702',
        event_target_resourceAncestors_1_name:
          'organizations/dummyOrganization/sources/505272050297586702',
        event_target_resourceAncestors_2_name:
          '//cloudresourcemanager.googleapis.com/projects/dummyProject//console.cloud.google.com/security/command-center/findingsv2;name=organizations%2FdummyOrganization%2Fsources%2F505272050297586702%2Ffindings%2Fdf1d9081adc94a799b12c7a6ec3131e1',
        event_securityResult_2_alertState: 'ALERTING',
        event_network_http_userAgent:
          'google-cloud-sdk gcloud/462.0.1 command/gcloud.iam.service-accounts.add-iam-policy-binding invocation-id/4e9999a137444f2a8313e67d180c8399 environment/GCE environment-version/None client-os/LINUX client-os-ver/5.10.0 client-pltf-arch/x86_64 interactive/True from-script/False python/3.11.7 term/xterm-256color (Linux 5.10.0-26-cloud-amd64),gzip(gfe)',
        event_network_http_parsedUserAgent_family: 'USER_DEFINED',
        type: 'GCTI_FINDING',
        detection_1_ruleName:
          'SCC: Discovery: Service Account Self-Investigation with Resource Creation',
        detection_1_summary: 'Rule Detection',
        detection_1_description:
          'Detection of an IAM service account credential that is used to investigate the roles and permissions associated with that same service account',
        detection_1_severity: 'HIGH',
        detection_1_urlBackToProduct:
          'https://gglwl.backstory.chronicle.security/alert?alertId=de_bd51e7b7-3370-44c0-c738-2f8bcf5b3dd6',
        detection_1_ruleId: 'ur_c512c6b6-56fa-41d5-aeae-b01b2d52cfe8',
        detection_1_alertState: 'ALERTING',
        detection_1_ruleType: 'MULTI_EVENT',
        detection_1_detectionFields_1_key: 'service_account',
        detection_1_detectionFields_1_value:
          'sa-cron-vm@scce-lab-401713.iam.gserviceaccount.com',
        detection_1_detectionFields_1_source:
          'udm.principal.user.email_addresses',
        detection_1_ruleLabels_1_key: 'reference',
        detection_1_ruleLabels_1_value:
          'https://cloud.google.com/security-command-center/docs/how-to-investigate-threats#service_account_self-investigation',
        detection_1_ruleLabels_2_key: 'rule_name',
        detection_1_ruleLabels_2_value:
          'SCC: Discovery: Service Account Self-Investigation with Resource Creation',
        detection_1_outcomes_1_key: 'roles',
        detection_1_outcomes_1_value: 'roles/storage.objectAdmin',
        detection_1_outcomes_2_key: 'group_memberships',
        detection_1_outcomes_3_key: 'ip',
        detection_1_outcomes_3_source: 'udm.principal.ip',
        detection_1_outcomes_4_key: 'principal_email_address',
        detection_1_outcomes_4_value:
          'sa-cron-vm@scce-lab-401713.iam.gserviceaccount.com',
        detection_1_outcomes_4_source: 'udm.principal.user.email_addresses',
        detection_1_outcomes_5_key: 'risk_score',
        detection_1_outcomes_5_value: '90',
        detection_1_outcomes_6_key: 'vendor_name',
        detection_1_outcomes_6_value: 'Google',
        detection_1_outcomes_7_key: 'product_name',
        detection_1_outcomes_7_value: 'Security Command Center',
        detection_1_ruleSet: '92f84c0d-678c-c2ba-fd76-9baa399885a2',
        detection_1_ruleSetDisplayName:
          'CDIR SCC Enhanced Defense Discovery Alerts',
        detection_1_riskScore: '90',
        detection_1_rulesetCategoryDisplayName: 'Cloud Threats',
        createdTime: '2024-02-02T11:05:32.43988Z',
        lastUpdatedTime: '2024-02-02T11:05:32.43988Z',
        id: 'de_bd51e7b7-3370-44c0-c738-2f8bcf5b3dd6',
        timeWindow_startTime: '2024-02-02T09:36:00Z',
        timeWindow_endTime: '2024-02-02T10:06:00Z',
        detectionTime: '2024-02-02T10:06:00Z',
        tags_1: 'TA0007',
        tags_2: 'T1069.003',
        alert_type: 'RULE',
        event_type: 'USER_UNCATEGORIZED',
        event_category: 'USER',
        event_principal_user_emailAddresses:
          'sa-cron-vm@scce-lab-401713.iam.gserviceaccount.com',
        event_principal_user_attribute_labels_sourceProperties_properties_serviceAccountGetsOwnIamPolicy_callerUserAgent:
          'google-cloud-sdk gcloud/462.0.1 command/gcloud.iam.service-accounts.add-iam-policy-binding environment/GCE environment-version/None client-os/LINUX client-os-ver/5.10.0 client-pltf-arch/x86_64 interactive/True from-script/False python/3.11.7 term/xterm-256color (Linux 5.10.0-26-cloud-amd64),gzip(gfe)',
        event_principal_user_attribute_labels_access_principalSubject:
          'terraform-sa@scce-lab-401713.iam.gserviceaccount.com',
        event_target_resource_attribute_labels_finding_id:
          'df1d9081adc94a799b12c7a6ec3131e1',
        event_target_resource_attribute_labels_source_id: '505272050297586702',
        event_target_labels_access_methodName:
          'google.iam.admin.v1.GetIAMPolicy',
        event_securityResult_detectionFields_mute: 'UNDEFINED',
        event_securityResult_detectionFields_primary_tactic: 'DISCOVERY',
        event_securityResult_detectionFields_primary_technique:
          'CLOUD_GROUPS, PERMISSION_GROUPS_DISCOVERY',
        'event_securityResult_detectionFields_Cloud Logging Query Link':
          'https://console.cloud.google.com/logs/query;query=timestamp%3D%222024-02-02T10:05:34.971369713Z%22%0AinsertId%3D%22mhgk2ae2wk6r%22?project=scce-lab-401713',
        event_securityResult_detectionFields_sourceProperties_detectionCategory_indicator:
          'audit_log',
        event_securityResult_detectionFields_sourceProperties_detectionCategory_technique:
          'discovery',
        event_securityResult_detectionFields_securityMarks_name:
          'organizations/dummyOrganization/sources/505272050297586702/findings/df1d9081adc94a799b12c7a6ec3131e1/securityMarks',
        'event_securityResult_detectionFields_MITRE Link':
          'https://attack.mitre.org/techniques/T1069/003/',
        event_securityResult_detectionFields_createTime:
          '2024-02-02T10:05:39.101Z',
        event_securityResult_detectionFields_sourceProperties_detectionCategory_subRuleName:
          'service_account_gets_own_iam_policy',
        event_securityResult_detectionFields_state: 'ACTIVE',
        detection_detectionFields_service_account:
          'sa-cron-vm@scce-lab-401713.iam.gserviceaccount.com',
        detection_ruleLabels_reference:
          'https://cloud.google.com/security-command-center/docs/how-to-investigate-threats#service_account_self-investigation',
        detection_ruleLabels_rule_name:
          'SCC: Discovery: Service Account Self-Investigation with Resource Creation',
        detection_outcomes_roles: 'roles/storage.objectAdmin',
        detection_outcomes_principal_email_address:
          'sa-cron-vm@scce-lab-401713.iam.gserviceaccount.com',
        detection_outcomes_risk_score: '90',
        detection_outcomes_vendor_name: 'Google',
        detection_outcomes_product_name: 'Security Command Center',
      },
      Environment: null,
      SourceSystemName: null,
      Extensions: [],
    },
    {
      _fields: {
        BaseEventIds: [],
        ParentEventId: 0,
        DeviceVendor: 'Google Chronicle',
        DeviceProduct: 'RULE',
        DeviceEventClassId: 'USER_UNCATEGORIZED',
      },
      _rawDataFields: {
        event_metadata_productLogId: 'df1d9081adc94a799b12c7a6ec3131e1',
        event_metadata_eventTimestamp: '2024-02-02T10:05:38.976048Z',
        event_metadata_eventType: 'USER_UNCATEGORIZED',
        event_metadata_vendorName: 'Google',
        event_metadata_productName: 'Security Command Center',
        event_metadata_productEventType:
          'Discovery: Service Account Self-Investigation',
        event_metadata_description: 'Event Threat Detection',
        event_metadata_ingestedTimestamp: '2024-02-02T10:05:42.296892Z',
        event_metadata_id: 'AAAAAMwloZsG07Q1JEgbmeba2UEAAAAADgAAAAAAAAA=',
        event_metadata_logType: 'GCP_SECURITYCENTER_THREAT',
        event_metadata_baseLabels_logTypes_1: 'GCP_SECURITYCENTER_THREAT',
        event_metadata_baseLabels_allowScopedAccess: 'True',
        event_metadata_enrichmentLabels_logTypes_1: 'GCP_IAM_ANALYSIS',
        event_metadata_enrichmentLabels_logTypes_2: 'GCP_IAM_CONTEXT',
        event_metadata_enrichmentLabels_allowScopedAccess: 'True',
        event_principal_hostname: 'gce-internal-ip',
        event_principal_user_userid: '100282268471516296206',
        event_principal_user_userDisplayName:
          'A SA to run the vm that refresh threats and resources',
        event_principal_user_emailAddresses_1:
          'sa-cron-vm@scce-lab-401713.iam.gserviceaccount.com',
        event_principal_user_emailAddresses_2:
          'sa-cron-vm@scce-lab-401713.iam.gserviceaccount.com',
        event_principal_user_emailAddresses_3:
          'sa-cron-vm@scce-lab-401713.iam.gserviceaccount.com',
        event_principal_user_emailAddresses_4:
          'service-429213313266@compute-system.iam.gserviceaccount.com',
        event_principal_user_emailAddresses_5:
          'terraform-sa@scce-lab-401713.iam.gserviceaccount.com',
        event_principal_user_productObjectId: '100282268471516296206',
        event_principal_user_attribute_cloud_environment:
          'GOOGLE_CLOUD_PLATFORM',
        event_principal_user_attribute_roles_1_name:
          'roles/storage.objectAdmin',
        event_principal_user_attribute_roles_1_type: 'SERVICE_ACCOUNT',
        event_principal_user_accountType: 'SERVICE_ACCOUNT_TYPE',
        event_principal_resource_name: '-',
        event_principal_asset_hostname: 'gce-internal-ip',
        event_target_application: 'iam.googleapis.com',
        event_target_resource_name:
          '//iam.googleapis.com/projects/dummyProject/serviceAccounts/108132278076916519438',
        event_target_resource_productObjectId: '505272050297586702',
        event_target_resourceAncestors_1_name:
          'organizations/dummyOrganization/sources/505272050297586702',
        event_target_resourceAncestors_2_name:
          '//cloudresourcemanager.googleapis.com/projects/dummyProject//console.cloud.google.com/security/command-center/findingsv2;name=organizations%2FdummyOrganization%2Fsources%2F505272050297586702%2Ffindings%2Fdf1d9081adc94a799b12c7a6ec3131e1',
        event_securityResult_2_alertState: 'ALERTING',
        event_network_http_userAgent:
          'google-cloud-sdk gcloud/462.0.1 command/gcloud.iam.service-accounts.add-iam-policy-binding invocation-id/4e9999a137444f2a8313e67d180c8399 environment/GCE environment-version/None client-os/LINUX client-os-ver/5.10.0 client-pltf-arch/x86_64 interactive/True from-script/False python/3.11.7 term/xterm-256color (Linux 5.10.0-26-cloud-amd64),gzip(gfe)',
        event_network_http_parsedUserAgent_family: 'USER_DEFINED',
        type: 'GCTI_FINDING',
        detection_1_ruleName:
          'SCC: Discovery: Service Account Self-Investigation with Resource Creation',
        detection_1_summary: 'Rule Detection',
        detection_1_description:
          'Detection of an IAM service account credential that is used to investigate the roles and permissions associated with that same service account',
        detection_1_severity: 'HIGH',
        detection_1_urlBackToProduct:
          'https://gglwl.backstory.chronicle.security/alert?alertId=de_bd51e7b7-3370-44c0-c738-2f8bcf5b3dd6',
        detection_1_ruleId: 'ur_c512c6b6-56fa-41d5-aeae-b01b2d52cfe8',
        detection_1_alertState: 'ALERTING',
        detection_1_ruleType: 'MULTI_EVENT',
        detection_1_detectionFields_1_key: 'service_account',
        detection_1_detectionFields_1_value:
          'sa-cron-vm@scce-lab-401713.iam.gserviceaccount.com',
        detection_1_detectionFields_1_source:
          'udm.principal.user.email_addresses',
        detection_1_ruleLabels_1_key: 'reference',
        detection_1_ruleLabels_1_value:
          'https://cloud.google.com/security-command-center/docs/how-to-investigate-threats#service_account_self-investigation',
        detection_1_ruleLabels_2_key: 'rule_name',
        detection_1_ruleLabels_2_value:
          'SCC: Discovery: Service Account Self-Investigation with Resource Creation',
        detection_1_outcomes_1_key: 'roles',
        detection_1_outcomes_1_value: 'roles/storage.objectAdmin',
        detection_1_outcomes_2_key: 'group_memberships',
        detection_1_outcomes_3_key: 'ip',
        detection_1_outcomes_3_source: 'udm.principal.ip',
        detection_1_outcomes_4_key: 'principal_email_address',
        detection_1_outcomes_4_value:
          'sa-cron-vm@scce-lab-401713.iam.gserviceaccount.com',
        detection_1_outcomes_4_source: 'udm.principal.user.email_addresses',
        detection_1_outcomes_5_key: 'risk_score',
        detection_1_outcomes_5_value: '90',
        detection_1_outcomes_6_key: 'vendor_name',
        detection_1_outcomes_6_value: 'Google',
        detection_1_outcomes_7_key: 'product_name',
        detection_1_outcomes_7_value: 'Security Command Center',
        detection_1_ruleSet: '92f84c0d-678c-c2ba-fd76-9baa399885a2',
        detection_1_ruleSetDisplayName:
          'CDIR SCC Enhanced Defense Discovery Alerts',
        detection_1_riskScore: '90',
        detection_1_rulesetCategoryDisplayName: 'Cloud Threats',
        createdTime: '2024-02-02T11:05:32.43988Z',
        lastUpdatedTime: '2024-02-02T11:05:32.43988Z',
        id: 'de_bd51e7b7-3370-44c0-c738-2f8bcf5b3dd6',
        timeWindow_startTime: '2024-02-02T09:36:00Z',
        timeWindow_endTime: '2024-02-02T10:06:00Z',
        detectionTime: '2024-02-02T10:06:00Z',
        tags_1: 'TA0007',
        tags_2: 'T1069.003',
        alert_type: 'RULE',
        event_type: 'USER_UNCATEGORIZED',
        event_category: 'USER',
        event_principal_user_emailAddresses:
          'sa-cron-vm@scce-lab-401713.iam.gserviceaccount.com',
        event_principal_user_attribute_labels_sourceProperties_properties_serviceAccountGetsOwnIamPolicy_callerUserAgent:
          'google-cloud-sdk gcloud/462.0.1 command/gcloud.iam.service-accounts.add-iam-policy-binding environment/GCE environment-version/None client-os/LINUX client-os-ver/5.10.0 client-pltf-arch/x86_64 interactive/True from-script/False python/3.11.7 term/xterm-256color (Linux 5.10.0-26-cloud-amd64),gzip(gfe)',
        event_principal_user_attribute_labels_access_principalSubject:
          'terraform-sa@scce-lab-401713.iam.gserviceaccount.com',
        event_target_resource_attribute_labels_finding_id:
          'df1d9081adc94a799b12c7a6ec3131e1',
        event_target_resource_attribute_labels_source_id: '505272050297586702',
        event_target_labels_access_methodName:
          'google.iam.admin.v1.GetIAMPolicy',
        event_securityResult_detectionFields_mute: 'UNDEFINED',
        event_securityResult_detectionFields_primary_tactic: 'DISCOVERY',
        event_securityResult_detectionFields_primary_technique:
          'CLOUD_GROUPS, PERMISSION_GROUPS_DISCOVERY',
        'event_securityResult_detectionFields_Cloud Logging Query Link':
          'https://console.cloud.google.com/logs/query;query=timestamp%3D%222024-02-02T10:05:34.971369713Z%22%0AinsertId%3D%22mhgk2ae2wk6r%22?project=scce-lab-401713',
        event_securityResult_detectionFields_sourceProperties_detectionCategory_indicator:
          'audit_log',
        event_securityResult_detectionFields_sourceProperties_detectionCategory_technique:
          'discovery',
        event_securityResult_detectionFields_securityMarks_name:
          'organizations/dummyOrganization/sources/505272050297586702/findings/df1d9081adc94a799b12c7a6ec3131e1/securityMarks',
        'event_securityResult_detectionFields_MITRE Link':
          'https://attack.mitre.org/techniques/T1069/003/',
        event_securityResult_detectionFields_createTime:
          '2024-02-02T10:05:39.101Z',
        event_securityResult_detectionFields_sourceProperties_detectionCategory_subRuleName:
          'service_account_gets_own_iam_policy',
        event_securityResult_detectionFields_state: 'ACTIVE',
        detection_detectionFields_service_account:
          'sa-cron-vm@scce-lab-401713.iam.gserviceaccount.com',
        detection_ruleLabels_reference:
          'https://cloud.google.com/security-command-center/docs/how-to-investigate-threats#service_account_self-investigation',
        detection_ruleLabels_rule_name:
          'SCC: Discovery: Service Account Self-Investigation with Resource Creation',
        detection_outcomes_roles: 'roles/storage.objectAdmin',
        detection_outcomes_principal_email_address:
          'sa-cron-vm@scce-lab-401713.iam.gserviceaccount.com',
        detection_outcomes_risk_score: '90',
        detection_outcomes_vendor_name: 'Google',
        detection_outcomes_product_name: 'Security Command Center',
      },
      Environment: null,
      SourceSystemName: null,
      Extensions: [],
    },
    {
      _fields: {
        BaseEventIds: [],
        ParentEventId: 0,
        DeviceVendor: 'Google Chronicle',
        DeviceProduct: 'RULE',
        DeviceEventClassId: 'USER_UNCATEGORIZED',
      },
      _rawDataFields: {
        event_metadata_productLogId: 'df1d9081adc94a799b12c7a6ec3131e1',
        event_metadata_eventTimestamp: '2024-02-02T10:05:38.976048Z',
        event_metadata_eventType: 'USER_UNCATEGORIZED',
        event_metadata_vendorName: 'Google',
        event_metadata_productName: 'Security Command Center',
        event_metadata_productEventType:
          'Discovery: Service Account Self-Investigation',
        event_metadata_description: 'Event Threat Detection',
        event_metadata_ingestedTimestamp: '2024-02-02T10:05:42.296892Z',
        event_metadata_id: 'AAAAAMwloZsG07Q1JEgbmeba2UEAAAAADgAAAAAAAAA=',
        event_metadata_logType: 'GCP_SECURITYCENTER_THREAT',
        event_metadata_baseLabels_logTypes_1: 'GCP_SECURITYCENTER_THREAT',
        event_metadata_baseLabels_allowScopedAccess: 'True',
        event_metadata_enrichmentLabels_logTypes_1: 'GCP_IAM_ANALYSIS',
        event_metadata_enrichmentLabels_logTypes_2: 'GCP_IAM_CONTEXT',
        event_metadata_enrichmentLabels_allowScopedAccess: 'True',
        event_principal_hostname: 'gce-internal-ip',
        event_principal_user_userid: '100282268471516296206',
        event_principal_user_userDisplayName:
          'A SA to run the vm that refresh threats and resources',
        event_principal_user_emailAddresses_1:
          'sa-cron-vm@scce-lab-401713.iam.gserviceaccount.com',
        event_principal_user_emailAddresses_2:
          'sa-cron-vm@scce-lab-401713.iam.gserviceaccount.com',
        event_principal_user_emailAddresses_3:
          'sa-cron-vm@scce-lab-401713.iam.gserviceaccount.com',
        event_principal_user_emailAddresses_4:
          'service-429213313266@compute-system.iam.gserviceaccount.com',
        event_principal_user_emailAddresses_5:
          'terraform-sa@scce-lab-401713.iam.gserviceaccount.com',
        event_principal_user_productObjectId: '100282268471516296206',
        event_principal_user_attribute_cloud_environment:
          'GOOGLE_CLOUD_PLATFORM',
        event_principal_user_attribute_roles_1_name:
          'roles/storage.objectAdmin',
        event_principal_user_attribute_roles_1_type: 'SERVICE_ACCOUNT',
        event_principal_user_accountType: 'SERVICE_ACCOUNT_TYPE',
        event_principal_resource_name: '-',
        event_principal_asset_hostname: 'gce-internal-ip',
        event_target_application: 'iam.googleapis.com',
        event_target_resource_name:
          '//iam.googleapis.com/projects/dummyProject/serviceAccounts/108132278076916519438',
        event_target_resource_productObjectId: '505272050297586702',
        event_target_resourceAncestors_1_name:
          'organizations/dummyOrganization/sources/505272050297586702',
        event_target_resourceAncestors_2_name:
          '//cloudresourcemanager.googleapis.com/projects/dummyProject//console.cloud.google.com/security/command-center/findingsv2;name=organizations%2FdummyOrganization%2Fsources%2F505272050297586702%2Ffindings%2Fdf1d9081adc94a799b12c7a6ec3131e1',
        event_securityResult_2_alertState: 'ALERTING',
        event_network_http_userAgent:
          'google-cloud-sdk gcloud/462.0.1 command/gcloud.iam.service-accounts.add-iam-policy-binding invocation-id/4e9999a137444f2a8313e67d180c8399 environment/GCE environment-version/None client-os/LINUX client-os-ver/5.10.0 client-pltf-arch/x86_64 interactive/True from-script/False python/3.11.7 term/xterm-256color (Linux 5.10.0-26-cloud-amd64),gzip(gfe)',
        event_network_http_parsedUserAgent_family: 'USER_DEFINED',
        type: 'GCTI_FINDING',
        detection_1_ruleName:
          'SCC: Discovery: Service Account Self-Investigation with Resource Creation',
        detection_1_summary: 'Rule Detection',
        detection_1_description:
          'Detection of an IAM service account credential that is used to investigate the roles and permissions associated with that same service account',
        detection_1_severity: 'HIGH',
        detection_1_urlBackToProduct:
          'https://gglwl.backstory.chronicle.security/alert?alertId=de_bd51e7b7-3370-44c0-c738-2f8bcf5b3dd6',
        detection_1_ruleId: 'ur_c512c6b6-56fa-41d5-aeae-b01b2d52cfe8',
        detection_1_alertState: 'ALERTING',
        detection_1_ruleType: 'MULTI_EVENT',
        detection_1_detectionFields_1_key: 'service_account',
        detection_1_detectionFields_1_value:
          'sa-cron-vm@scce-lab-401713.iam.gserviceaccount.com',
        detection_1_detectionFields_1_source:
          'udm.principal.user.email_addresses',
        detection_1_ruleLabels_1_key: 'reference',
        detection_1_ruleLabels_1_value:
          'https://cloud.google.com/security-command-center/docs/how-to-investigate-threats#service_account_self-investigation',
        detection_1_ruleLabels_2_key: 'rule_name',
        detection_1_ruleLabels_2_value:
          'SCC: Discovery: Service Account Self-Investigation with Resource Creation',
        detection_1_outcomes_1_key: 'roles',
        detection_1_outcomes_1_value: 'roles/storage.objectAdmin',
        detection_1_outcomes_2_key: 'group_memberships',
        detection_1_outcomes_3_key: 'ip',
        detection_1_outcomes_3_source: 'udm.principal.ip',
        detection_1_outcomes_4_key: 'principal_email_address',
        detection_1_outcomes_4_value:
          'sa-cron-vm@scce-lab-401713.iam.gserviceaccount.com',
        detection_1_outcomes_4_source: 'udm.principal.user.email_addresses',
        detection_1_outcomes_5_key: 'risk_score',
        detection_1_outcomes_5_value: '90',
        detection_1_outcomes_6_key: 'vendor_name',
        detection_1_outcomes_6_value: 'Google',
        detection_1_outcomes_7_key: 'product_name',
        detection_1_outcomes_7_value: 'Security Command Center',
        detection_1_ruleSet: '92f84c0d-678c-c2ba-fd76-9baa399885a2',
        detection_1_ruleSetDisplayName:
          'CDIR SCC Enhanced Defense Discovery Alerts',
        detection_1_riskScore: '90',
        detection_1_rulesetCategoryDisplayName: 'Cloud Threats',
        createdTime: '2024-02-02T11:05:32.43988Z',
        lastUpdatedTime: '2024-02-02T11:05:32.43988Z',
        id: 'de_bd51e7b7-3370-44c0-c738-2f8bcf5b3dd6',
        timeWindow_startTime: '2024-02-02T09:36:00Z',
        timeWindow_endTime: '2024-02-02T10:06:00Z',
        detectionTime: '2024-02-02T10:06:00Z',
        tags_1: 'TA0007',
        tags_2: 'T1069.003',
        alert_type: 'RULE',
        event_type: 'USER_UNCATEGORIZED',
        event_category: 'USER',
        event_principal_user_emailAddresses:
          'service-429213313266@compute-system.iam.gserviceaccount.com',
        event_principal_user_attribute_labels_sourceProperties_properties_serviceAccountGetsOwnIamPolicy_callerUserAgent:
          'google-cloud-sdk gcloud/462.0.1 command/gcloud.iam.service-accounts.add-iam-policy-binding environment/GCE environment-version/None client-os/LINUX client-os-ver/5.10.0 client-pltf-arch/x86_64 interactive/True from-script/False python/3.11.7 term/xterm-256color (Linux 5.10.0-26-cloud-amd64),gzip(gfe)',
        event_principal_user_attribute_labels_access_principalSubject:
          'terraform-sa@scce-lab-401713.iam.gserviceaccount.com',
        event_target_resource_attribute_labels_finding_id:
          'df1d9081adc94a799b12c7a6ec3131e1',
        event_target_resource_attribute_labels_source_id: '505272050297586702',
        event_target_labels_access_methodName:
          'google.iam.admin.v1.GetIAMPolicy',
        event_securityResult_detectionFields_mute: 'UNDEFINED',
        event_securityResult_detectionFields_primary_tactic: 'DISCOVERY',
        event_securityResult_detectionFields_primary_technique:
          'CLOUD_GROUPS, PERMISSION_GROUPS_DISCOVERY',
        'event_securityResult_detectionFields_Cloud Logging Query Link':
          'https://console.cloud.google.com/logs/query;query=timestamp%3D%222024-02-02T10:05:34.971369713Z%22%0AinsertId%3D%22mhgk2ae2wk6r%22?project=scce-lab-401713',
        event_securityResult_detectionFields_sourceProperties_detectionCategory_indicator:
          'audit_log',
        event_securityResult_detectionFields_sourceProperties_detectionCategory_technique:
          'discovery',
        event_securityResult_detectionFields_securityMarks_name:
          'organizations/dummyOrganization/sources/505272050297586702/findings/df1d9081adc94a799b12c7a6ec3131e1/securityMarks',
        'event_securityResult_detectionFields_MITRE Link':
          'https://attack.mitre.org/techniques/T1069/003/',
        event_securityResult_detectionFields_createTime:
          '2024-02-02T10:05:39.101Z',
        event_securityResult_detectionFields_sourceProperties_detectionCategory_subRuleName:
          'service_account_gets_own_iam_policy',
        event_securityResult_detectionFields_state: 'ACTIVE',
        detection_detectionFields_service_account:
          'sa-cron-vm@scce-lab-401713.iam.gserviceaccount.com',
        detection_ruleLabels_reference:
          'https://cloud.google.com/security-command-center/docs/how-to-investigate-threats#service_account_self-investigation',
        detection_ruleLabels_rule_name:
          'SCC: Discovery: Service Account Self-Investigation with Resource Creation',
        detection_outcomes_roles: 'roles/storage.objectAdmin',
        detection_outcomes_principal_email_address:
          'sa-cron-vm@scce-lab-401713.iam.gserviceaccount.com',
        detection_outcomes_risk_score: '90',
        detection_outcomes_vendor_name: 'Google',
        detection_outcomes_product_name: 'Security Command Center',
      },
      Environment: null,
      SourceSystemName: null,
      Extensions: [],
    },
    {
      _fields: {
        BaseEventIds: [],
        ParentEventId: 0,
        DeviceVendor: 'Google Chronicle',
        DeviceProduct: 'RULE',
        DeviceEventClassId: 'USER_UNCATEGORIZED',
      },
      _rawDataFields: {
        event_metadata_productLogId: 'df1d9081adc94a799b12c7a6ec3131e1',
        event_metadata_eventTimestamp: '2024-02-02T10:05:38.976048Z',
        event_metadata_eventType: 'USER_UNCATEGORIZED',
        event_metadata_vendorName: 'Google',
        event_metadata_productName: 'Security Command Center',
        event_metadata_productEventType:
          'Discovery: Service Account Self-Investigation',
        event_metadata_description: 'Event Threat Detection',
        event_metadata_ingestedTimestamp: '2024-02-02T10:05:42.296892Z',
        event_metadata_id: 'AAAAAMwloZsG07Q1JEgbmeba2UEAAAAADgAAAAAAAAA=',
        event_metadata_logType: 'GCP_SECURITYCENTER_THREAT',
        event_metadata_baseLabels_logTypes_1: 'GCP_SECURITYCENTER_THREAT',
        event_metadata_baseLabels_allowScopedAccess: 'True',
        event_metadata_enrichmentLabels_logTypes_1: 'GCP_IAM_ANALYSIS',
        event_metadata_enrichmentLabels_logTypes_2: 'GCP_IAM_CONTEXT',
        event_metadata_enrichmentLabels_allowScopedAccess: 'True',
        event_principal_hostname: 'gce-internal-ip',
        event_principal_user_userid: '100282268471516296206',
        event_principal_user_userDisplayName:
          'A SA to run the vm that refresh threats and resources',
        event_principal_user_emailAddresses_1:
          'sa-cron-vm@scce-lab-401713.iam.gserviceaccount.com',
        event_principal_user_emailAddresses_2:
          'sa-cron-vm@scce-lab-401713.iam.gserviceaccount.com',
        event_principal_user_emailAddresses_3:
          'sa-cron-vm@scce-lab-401713.iam.gserviceaccount.com',
        event_principal_user_emailAddresses_4:
          'service-429213313266@compute-system.iam.gserviceaccount.com',
        event_principal_user_emailAddresses_5:
          'terraform-sa@scce-lab-401713.iam.gserviceaccount.com',
        event_principal_user_productObjectId: '100282268471516296206',
        event_principal_user_attribute_cloud_environment:
          'GOOGLE_CLOUD_PLATFORM',
        event_principal_user_attribute_roles_1_name:
          'roles/storage.objectAdmin',
        event_principal_user_attribute_roles_1_type: 'SERVICE_ACCOUNT',
        event_principal_user_accountType: 'SERVICE_ACCOUNT_TYPE',
        event_principal_resource_name: '-',
        event_principal_asset_hostname: 'gce-internal-ip',
        event_target_application: 'iam.googleapis.com',
        event_target_resource_name:
          '//iam.googleapis.com/projects/dummyProject/serviceAccounts/108132278076916519438',
        event_target_resource_productObjectId: '505272050297586702',
        event_target_resourceAncestors_1_name:
          'organizations/dummyOrganization/sources/505272050297586702',
        event_target_resourceAncestors_2_name:
          '//cloudresourcemanager.googleapis.com/projects/dummyProject//console.cloud.google.com/security/command-center/findingsv2;name=organizations%2FdummyOrganization%2Fsources%2F505272050297586702%2Ffindings%2Fdf1d9081adc94a799b12c7a6ec3131e1',
        event_securityResult_2_alertState: 'ALERTING',
        event_network_http_userAgent:
          'google-cloud-sdk gcloud/462.0.1 command/gcloud.iam.service-accounts.add-iam-policy-binding invocation-id/4e9999a137444f2a8313e67d180c8399 environment/GCE environment-version/None client-os/LINUX client-os-ver/5.10.0 client-pltf-arch/x86_64 interactive/True from-script/False python/3.11.7 term/xterm-256color (Linux 5.10.0-26-cloud-amd64),gzip(gfe)',
        event_network_http_parsedUserAgent_family: 'USER_DEFINED',
        type: 'GCTI_FINDING',
        detection_1_ruleName:
          'SCC: Discovery: Service Account Self-Investigation with Resource Creation',
        detection_1_summary: 'Rule Detection',
        detection_1_description:
          'Detection of an IAM service account credential that is used to investigate the roles and permissions associated with that same service account',
        detection_1_severity: 'HIGH',
        detection_1_urlBackToProduct:
          'https://gglwl.backstory.chronicle.security/alert?alertId=de_bd51e7b7-3370-44c0-c738-2f8bcf5b3dd6',
        detection_1_ruleId: 'ur_c512c6b6-56fa-41d5-aeae-b01b2d52cfe8',
        detection_1_alertState: 'ALERTING',
        detection_1_ruleType: 'MULTI_EVENT',
        detection_1_detectionFields_1_key: 'service_account',
        detection_1_detectionFields_1_value:
          'sa-cron-vm@scce-lab-401713.iam.gserviceaccount.com',
        detection_1_detectionFields_1_source:
          'udm.principal.user.email_addresses',
        detection_1_ruleLabels_1_key: 'reference',
        detection_1_ruleLabels_1_value:
          'https://cloud.google.com/security-command-center/docs/how-to-investigate-threats#service_account_self-investigation',
        detection_1_ruleLabels_2_key: 'rule_name',
        detection_1_ruleLabels_2_value:
          'SCC: Discovery: Service Account Self-Investigation with Resource Creation',
        detection_1_outcomes_1_key: 'roles',
        detection_1_outcomes_1_value: 'roles/storage.objectAdmin',
        detection_1_outcomes_2_key: 'group_memberships',
        detection_1_outcomes_3_key: 'ip',
        detection_1_outcomes_3_source: 'udm.principal.ip',
        detection_1_outcomes_4_key: 'principal_email_address',
        detection_1_outcomes_4_value:
          'sa-cron-vm@scce-lab-401713.iam.gserviceaccount.com',
        detection_1_outcomes_4_source: 'udm.principal.user.email_addresses',
        detection_1_outcomes_5_key: 'risk_score',
        detection_1_outcomes_5_value: '90',
        detection_1_outcomes_6_key: 'vendor_name',
        detection_1_outcomes_6_value: 'Google',
        detection_1_outcomes_7_key: 'product_name',
        detection_1_outcomes_7_value: 'Security Command Center',
        detection_1_ruleSet: '92f84c0d-678c-c2ba-fd76-9baa399885a2',
        detection_1_ruleSetDisplayName:
          'CDIR SCC Enhanced Defense Discovery Alerts',
        detection_1_riskScore: '90',
        detection_1_rulesetCategoryDisplayName: 'Cloud Threats',
        createdTime: '2024-02-02T11:05:32.43988Z',
        lastUpdatedTime: '2024-02-02T11:05:32.43988Z',
        id: 'de_bd51e7b7-3370-44c0-c738-2f8bcf5b3dd6',
        timeWindow_startTime: '2024-02-02T09:36:00Z',
        timeWindow_endTime: '2024-02-02T10:06:00Z',
        detectionTime: '2024-02-02T10:06:00Z',
        tags_1: 'TA0007',
        tags_2: 'T1069.003',
        alert_type: 'RULE',
        event_type: 'USER_UNCATEGORIZED',
        event_category: 'USER',
        event_principal_user_emailAddresses:
          'terraform-sa@scce-lab-401713.iam.gserviceaccount.com',
        event_principal_user_attribute_labels_sourceProperties_properties_serviceAccountGetsOwnIamPolicy_callerUserAgent:
          'google-cloud-sdk gcloud/462.0.1 command/gcloud.iam.service-accounts.add-iam-policy-binding environment/GCE environment-version/None client-os/LINUX client-os-ver/5.10.0 client-pltf-arch/x86_64 interactive/True from-script/False python/3.11.7 term/xterm-256color (Linux 5.10.0-26-cloud-amd64),gzip(gfe)',
        event_principal_user_attribute_labels_access_principalSubject:
          'terraform-sa@scce-lab-401713.iam.gserviceaccount.com',
        event_target_resource_attribute_labels_finding_id:
          'df1d9081adc94a799b12c7a6ec3131e1',
        event_target_resource_attribute_labels_source_id: '505272050297586702',
        event_target_labels_access_methodName:
          'google.iam.admin.v1.GetIAMPolicy',
        event_securityResult_detectionFields_mute: 'UNDEFINED',
        event_securityResult_detectionFields_primary_tactic: 'DISCOVERY',
        event_securityResult_detectionFields_primary_technique:
          'CLOUD_GROUPS, PERMISSION_GROUPS_DISCOVERY',
        'event_securityResult_detectionFields_Cloud Logging Query Link':
          'https://console.cloud.google.com/logs/query;query=timestamp%3D%222024-02-02T10:05:34.971369713Z%22%0AinsertId%3D%22mhgk2ae2wk6r%22?project=scce-lab-401713',
        event_securityResult_detectionFields_sourceProperties_detectionCategory_indicator:
          'audit_log',
        event_securityResult_detectionFields_sourceProperties_detectionCategory_technique:
          'discovery',
        event_securityResult_detectionFields_securityMarks_name:
          'organizations/dummyOrganization/sources/505272050297586702/findings/df1d9081adc94a799b12c7a6ec3131e1/securityMarks',
        'event_securityResult_detectionFields_MITRE Link':
          'https://attack.mitre.org/techniques/T1069/003/',
        event_securityResult_detectionFields_createTime:
          '2024-02-02T10:05:39.101Z',
        event_securityResult_detectionFields_sourceProperties_detectionCategory_subRuleName:
          'service_account_gets_own_iam_policy',
        event_securityResult_detectionFields_state: 'ACTIVE',
        detection_detectionFields_service_account:
          'sa-cron-vm@scce-lab-401713.iam.gserviceaccount.com',
        detection_ruleLabels_reference:
          'https://cloud.google.com/security-command-center/docs/how-to-investigate-threats#service_account_self-investigation',
        detection_ruleLabels_rule_name:
          'SCC: Discovery: Service Account Self-Investigation with Resource Creation',
        detection_outcomes_roles: 'roles/storage.objectAdmin',
        detection_outcomes_principal_email_address:
          'sa-cron-vm@scce-lab-401713.iam.gserviceaccount.com',
        detection_outcomes_risk_score: '90',
        detection_outcomes_vendor_name: 'Google',
        detection_outcomes_product_name: 'Security Command Center',
      },
      Environment: null,
      SourceSystemName: null,
      Extensions: [],
    },
    {
      _fields: {
        BaseEventIds: [],
        ParentEventId: 0,
        DeviceVendor: 'Google Chronicle',
        DeviceProduct: 'RULE',
        DeviceEventClassId: 'USER_RESOURCE_UPDATE_CONTENT',
      },
      _rawDataFields: {
        event_metadata_productLogId: '134lxvmd6o95',
        event_metadata_eventTimestamp: '2024-02-02T10:02:16.538770547Z',
        event_metadata_collectedTimestamp: '2024-02-02T10:02:17.450808223Z',
        event_metadata_eventType: 'USER_RESOURCE_UPDATE_CONTENT',
        event_metadata_vendorName: 'Google Cloud Platform',
        event_metadata_productName: 'Google Cloud Platform',
        event_metadata_productEventType:
          'google.container.v1.ClusterManager.UpdateCluster',
        event_metadata_description: 'UPDATE_CLUSTER',
        event_metadata_urlBackToProduct:
          'projects/dummyProject/logs/cloudaudit.googleapis.com%2Factivity',
        event_metadata_ingestedTimestamp: '2024-02-02T10:02:18.507623Z',
        event_metadata_id: 'AAAAACQHVEjD2KLpndxPGyQvrtEAAAAADgAAAAAAAAA=',
        event_metadata_logType: 'GCP_CLOUDAUDIT',
        event_metadata_baseLabels_logTypes_1: 'GCP_CLOUDAUDIT',
        event_metadata_baseLabels_allowScopedAccess: 'True',
        event_metadata_enrichmentLabels_logTypes_1: 'GCP_IAM_ANALYSIS',
        event_metadata_enrichmentLabels_logTypes_2: 'GCP_IAM_CONTEXT',
        event_metadata_enrichmentLabels_allowScopedAccess: 'True',
        'event_additional_requestMetadata.callerIp_0':
          'Request came from a GCE VM in a different organization. : REPLACED',
        event_additional_request_time: '2024-02-02T10:02:16.274561046Z',
        event_additional_res_operation_type: 'UPDATE_CLUSTER',
        event_additional_request_attributes_time:
          '2024-02-02T10:02:16.274561046Z',
        event_additional_operation_producer: 'container.googleapis.com',
        event_additional_res_start_time: '2024-02-02T10:02:16.45958843Z',
        'event_additional_requestMetadata.callerIsGceClient_1':
          'Request originated from a GCE VM or an on-prem VM behind a VPN, and the log was enhanced with additional information : REPLACED',
        event_additional_operation_first: 'true',
        event_additional_operation_id:
          'operation-1706868136459-e66107f7-2a00-4327-84e1-9c5318eddbdf',
        event_additional_res_status: 'RUNNING',
        event_additional_type:
          'type.googleapis.com/google.cloud.audit.AuditLog',
        event_principal_hostname: 'gce-internal-ip',
        event_principal_user_userid:
          'terraform-sa@scce-lab-401713.iam.gserviceaccount.com',
        event_principal_user_userDisplayName:
          'A SA to run the vm that refresh threats and resources',
        event_principal_user_emailAddresses_1:
          'sa-cron-vm@scce-lab-401713.iam.gserviceaccount.com',
        event_principal_user_emailAddresses_2:
          'sa-cron-vm@scce-lab-401713.iam.gserviceaccount.com',
        event_principal_user_emailAddresses_3:
          'terraform-sa@scce-lab-401713.iam.gserviceaccount.com',
        event_principal_user_emailAddresses_4:
          'sa-cron-vm@scce-lab-401713.iam.gserviceaccount.com',
        event_principal_user_productObjectId: '100282268471516296206',
        event_principal_user_attribute_cloud_environment:
          'GOOGLE_CLOUD_PLATFORM',
        event_principal_user_attribute_roles_1_name:
          'roles/storage.objectAdmin',
        event_principal_user_attribute_roles_1_type: 'SERVICE_ACCOUNT',
        event_principal_user_attribute_permissions_1_name:
          'container.clusters.update',
        event_principal_resource_resourceSubtype:
          'container.googleapis.com/Cluster',
        event_principal_asset_hostname: 'gce-internal-ip',
        event_target_user_userid:
          'terraform-sa@scce-lab-401713.iam.gserviceaccount.com',
        event_target_url:
          'https://container.googleapis.com/v1alpha1/projects/dummyProject/locations/europe-west2/clusters/my-gke-cluster-ephemeral',
        event_target_application: 'container.googleapis.com',
        event_target_location_name: 'europe-west2',
        event_target_resource_name:
          'projects/dummyProject/locations/europe-west2/clusters/my-gke-cluster-ephemeral',
        event_target_resource_resourceType: 'CLUSTER',
        event_target_resource_resourceSubtype: 'gke_cluster',
        event_target_resource_attribute_cloud_availabilityZone: 'europe-west2',
        event_target_cloud_project_name: 'scce-lab-401713',
        event_target_resourceAncestors_1_resourceType: 'CLUSTER',
        event_target_resourceAncestors_2_name: 'scce-lab-401713',
        event_target_resourceAncestors_2_resourceType: 'CLOUD_PROJECT',
        event_target_resourceAncestors_3_name:
          'projects/dummyProject/locations/europe-west2/clusters/my-gke-cluster-ephemeral',
        event_target_resourceAncestors_3_resourceSubtype:
          'container.googleapis.com/Cluster',
        event_about_1_url:
          'https://container.googleapis.com/v1alpha1/projects/dummyProject/locations/europe-west2/operations/operation-1706868136459-e66107f7-2a00-4327-84e1-9c5318eddbdf',
        event_securityResult_1_categoryDetails_1:
          'projects/dummyProject/logs/cloudaudit.googleapis.com%2Factivity',
        event_securityResult_1_action_1: 'ALLOW',
        event_securityResult_1_severity: 'INFORMATIONAL',
        event_network_http_userAgent:
          'google-api-go-client/0.5 Terraform/1.7.2 (+https://www.terraform.io) Terraform-Plugin-SDK/2.10.1 terraform-provider-google/5.11.0,gzip(gfe)',
        event_network_http_parsedUserAgent_family: 'USER_DEFINED',
        type: 'GCTI_FINDING',
        detection_1_ruleName:
          'SCC: Discovery: Service Account Self-Investigation with Resource Creation',
        detection_1_summary: 'Rule Detection',
        detection_1_description:
          'Detection of an IAM service account credential that is used to investigate the roles and permissions associated with that same service account',
        detection_1_severity: 'HIGH',
        detection_1_urlBackToProduct:
          'https://gglwl.backstory.chronicle.security/alert?alertId=de_bd51e7b7-3370-44c0-c738-2f8bcf5b3dd6',
        detection_1_ruleId: 'ur_c512c6b6-56fa-41d5-aeae-b01b2d52cfe8',
        detection_1_alertState: 'ALERTING',
        detection_1_ruleType: 'MULTI_EVENT',
        detection_1_detectionFields_1_key: 'service_account',
        detection_1_detectionFields_1_value:
          'sa-cron-vm@scce-lab-401713.iam.gserviceaccount.com',
        detection_1_detectionFields_1_source:
          'udm.principal.user.email_addresses',
        detection_1_ruleLabels_1_key: 'reference',
        detection_1_ruleLabels_1_value:
          'https://cloud.google.com/security-command-center/docs/how-to-investigate-threats#service_account_self-investigation',
        detection_1_ruleLabels_2_key: 'rule_name',
        detection_1_ruleLabels_2_value:
          'SCC: Discovery: Service Account Self-Investigation with Resource Creation',
        detection_1_outcomes_1_key: 'roles',
        detection_1_outcomes_1_value: 'roles/storage.objectAdmin',
        detection_1_outcomes_2_key: 'group_memberships',
        detection_1_outcomes_3_key: 'ip',
        detection_1_outcomes_3_source: 'udm.principal.ip',
        detection_1_outcomes_4_key: 'principal_email_address',
        detection_1_outcomes_4_value:
          'sa-cron-vm@scce-lab-401713.iam.gserviceaccount.com',
        detection_1_outcomes_4_source: 'udm.principal.user.email_addresses',
        detection_1_outcomes_5_key: 'risk_score',
        detection_1_outcomes_5_value: '90',
        detection_1_outcomes_6_key: 'vendor_name',
        detection_1_outcomes_6_value: 'Google',
        detection_1_outcomes_7_key: 'product_name',
        detection_1_outcomes_7_value: 'Security Command Center',
        detection_1_ruleSet: '92f84c0d-678c-c2ba-fd76-9baa399885a2',
        detection_1_ruleSetDisplayName:
          'CDIR SCC Enhanced Defense Discovery Alerts',
        detection_1_riskScore: '90',
        detection_1_rulesetCategoryDisplayName: 'Cloud Threats',
        createdTime: '2024-02-02T11:05:32.43988Z',
        lastUpdatedTime: '2024-02-02T11:05:32.43988Z',
        id: 'de_bd51e7b7-3370-44c0-c738-2f8bcf5b3dd6',
        timeWindow_startTime: '2024-02-02T09:36:00Z',
        timeWindow_endTime: '2024-02-02T10:06:00Z',
        detectionTime: '2024-02-02T10:06:00Z',
        tags_1: 'TA0007',
        tags_2: 'T1069.003',
        alert_type: 'RULE',
        event_type: 'USER_RESOURCE_UPDATE_CONTENT',
        event_category: 'USER',
        event_principal_user_emailAddresses:
          'sa-cron-vm@scce-lab-401713.iam.gserviceaccount.com',
        event_principal_user_attribute_labels_authorization_granted: 'true',
        event_principal_user_attribute_labels_authorization_info_resourceService:
          'container.googleapis.com',
        'event_principal_labels_requestMetadata.callerIp':
          'Request came from a GCE VM in a different organization. : REPLACED',
        'event_principal_labels_requestMetadata.callerIsGceClient':
          'Request originated from a GCE VM or an on-prem VM behind a VPN, and the log was enhanced with additional information : REPLACED',
        event_principal_labels_request_attributes_time:
          '2024-02-02T10:02:16.274561046Z',
        event_target_resource_attribute_labels_cls_name:
          'my-gke-cluster-ephemeral',
        event_target_resource_attribute_labels_request_type:
          'type.googleapis.com/google.container.v1alpha1.UpdateClusterRequest',
        event_target_resource_attribute_labels_req_name:
          'projects/dummyProject/locations/europe-west2/clusters/my-gke-cluster-ephemeral',
        event_target_resource_attribute_labels_response_operation_type:
          'UPDATE_CLUSTER',
        event_target_resource_attribute_labels_response_status: 'RUNNING',
        event_target_resource_attribute_labels_res_name:
          'operation-1706868136459-e66107f7-2a00-4327-84e1-9c5318eddbdf',
        event_target_resource_attribute_labels_res_type:
          'type.googleapis.com/google.container.v1alpha1.Operation',
        event_about_labels_type:
          'type.googleapis.com/google.cloud.audit.AuditLog',
        event_about_labels_res_operation_type: 'UPDATE_CLUSTER',
        event_about_labels_res_start_time: '2024-02-02T10:02:16.45958843Z',
        event_about_labels_res_status: 'RUNNING',
        event_about_labels_request_time: '2024-02-02T10:02:16.274561046Z',
        event_about_labels_operation_first: 'true',
        event_about_labels_operation_id:
          'operation-1706868136459-e66107f7-2a00-4327-84e1-9c5318eddbdf',
        event_about_labels_operation_producer: 'container.googleapis.com',
        event_securityResult_detectionFields_resource_name:
          'projects/dummyProject/locations/europe-west2/clusters/my-gke-cluster-ephemeral',
        event_securityResult_detectionFields_resource:
          'projects/dummyProject/locations/europe-west2/clusters/my-gke-cluster-ephemeral',
        detection_detectionFields_service_account:
          'sa-cron-vm@scce-lab-401713.iam.gserviceaccount.com',
        detection_ruleLabels_reference:
          'https://cloud.google.com/security-command-center/docs/how-to-investigate-threats#service_account_self-investigation',
        detection_ruleLabels_rule_name:
          'SCC: Discovery: Service Account Self-Investigation with Resource Creation',
        detection_outcomes_roles: 'roles/storage.objectAdmin',
        detection_outcomes_principal_email_address:
          'sa-cron-vm@scce-lab-401713.iam.gserviceaccount.com',
        detection_outcomes_risk_score: '90',
        detection_outcomes_vendor_name: 'Google',
        detection_outcomes_product_name: 'Security Command Center',
      },
      Environment: null,
      SourceSystemName: null,
      Extensions: [],
    },
    {
      _fields: {
        BaseEventIds: [],
        ParentEventId: 0,
        DeviceVendor: 'Google Chronicle',
        DeviceProduct: 'RULE',
        DeviceEventClassId: 'USER_RESOURCE_UPDATE_CONTENT',
      },
      _rawDataFields: {
        event_metadata_productLogId: '134lxvmd6o95',
        event_metadata_eventTimestamp: '2024-02-02T10:02:16.538770547Z',
        event_metadata_collectedTimestamp: '2024-02-02T10:02:17.450808223Z',
        event_metadata_eventType: 'USER_RESOURCE_UPDATE_CONTENT',
        event_metadata_vendorName: 'Google Cloud Platform',
        event_metadata_productName: 'Google Cloud Platform',
        event_metadata_productEventType:
          'google.container.v1.ClusterManager.UpdateCluster',
        event_metadata_description: 'UPDATE_CLUSTER',
        event_metadata_urlBackToProduct:
          'projects/dummyProject/logs/cloudaudit.googleapis.com%2Factivity',
        event_metadata_ingestedTimestamp: '2024-02-02T10:02:18.507623Z',
        event_metadata_id: 'AAAAACQHVEjD2KLpndxPGyQvrtEAAAAADgAAAAAAAAA=',
        event_metadata_logType: 'GCP_CLOUDAUDIT',
        event_metadata_baseLabels_logTypes_1: 'GCP_CLOUDAUDIT',
        event_metadata_baseLabels_allowScopedAccess: 'True',
        event_metadata_enrichmentLabels_logTypes_1: 'GCP_IAM_ANALYSIS',
        event_metadata_enrichmentLabels_logTypes_2: 'GCP_IAM_CONTEXT',
        event_metadata_enrichmentLabels_allowScopedAccess: 'True',
        'event_additional_requestMetadata.callerIp_0':
          'Request came from a GCE VM in a different organization. : REPLACED',
        event_additional_request_time: '2024-02-02T10:02:16.274561046Z',
        event_additional_res_operation_type: 'UPDATE_CLUSTER',
        event_additional_request_attributes_time:
          '2024-02-02T10:02:16.274561046Z',
        event_additional_operation_producer: 'container.googleapis.com',
        event_additional_res_start_time: '2024-02-02T10:02:16.45958843Z',
        'event_additional_requestMetadata.callerIsGceClient_1':
          'Request originated from a GCE VM or an on-prem VM behind a VPN, and the log was enhanced with additional information : REPLACED',
        event_additional_operation_first: 'true',
        event_additional_operation_id:
          'operation-1706868136459-e66107f7-2a00-4327-84e1-9c5318eddbdf',
        event_additional_res_status: 'RUNNING',
        event_additional_type:
          'type.googleapis.com/google.cloud.audit.AuditLog',
        event_principal_hostname: 'gce-internal-ip',
        event_principal_user_userid:
          'terraform-sa@scce-lab-401713.iam.gserviceaccount.com',
        event_principal_user_userDisplayName:
          'A SA to run the vm that refresh threats and resources',
        event_principal_user_emailAddresses_1:
          'sa-cron-vm@scce-lab-401713.iam.gserviceaccount.com',
        event_principal_user_emailAddresses_2:
          'sa-cron-vm@scce-lab-401713.iam.gserviceaccount.com',
        event_principal_user_emailAddresses_3:
          'terraform-sa@scce-lab-401713.iam.gserviceaccount.com',
        event_principal_user_emailAddresses_4:
          'sa-cron-vm@scce-lab-401713.iam.gserviceaccount.com',
        event_principal_user_productObjectId: '100282268471516296206',
        event_principal_user_attribute_cloud_environment:
          'GOOGLE_CLOUD_PLATFORM',
        event_principal_user_attribute_roles_1_name:
          'roles/storage.objectAdmin',
        event_principal_user_attribute_roles_1_type: 'SERVICE_ACCOUNT',
        event_principal_user_attribute_permissions_1_name:
          'container.clusters.update',
        event_principal_resource_resourceSubtype:
          'container.googleapis.com/Cluster',
        event_principal_asset_hostname: 'gce-internal-ip',
        event_target_user_userid:
          'terraform-sa@scce-lab-401713.iam.gserviceaccount.com',
        event_target_url:
          'https://container.googleapis.com/v1alpha1/projects/dummyProject/locations/europe-west2/clusters/my-gke-cluster-ephemeral',
        event_target_application: 'container.googleapis.com',
        event_target_location_name: 'europe-west2',
        event_target_resource_name:
          'projects/dummyProject/locations/europe-west2/clusters/my-gke-cluster-ephemeral',
        event_target_resource_resourceType: 'CLUSTER',
        event_target_resource_resourceSubtype: 'gke_cluster',
        event_target_resource_attribute_cloud_availabilityZone: 'europe-west2',
        event_target_cloud_project_name: 'scce-lab-401713',
        event_target_resourceAncestors_1_resourceType: 'CLUSTER',
        event_target_resourceAncestors_2_name: 'scce-lab-401713',
        event_target_resourceAncestors_2_resourceType: 'CLOUD_PROJECT',
        event_target_resourceAncestors_3_name:
          'projects/dummyProject/locations/europe-west2/clusters/my-gke-cluster-ephemeral',
        event_target_resourceAncestors_3_resourceSubtype:
          'container.googleapis.com/Cluster',
        event_about_1_url:
          'https://container.googleapis.com/v1alpha1/projects/dummyProject/locations/europe-west2/operations/operation-1706868136459-e66107f7-2a00-4327-84e1-9c5318eddbdf',
        event_securityResult_1_categoryDetails_1:
          'projects/dummyProject/logs/cloudaudit.googleapis.com%2Factivity',
        event_securityResult_1_action_1: 'ALLOW',
        event_securityResult_1_severity: 'INFORMATIONAL',
        event_network_http_userAgent:
          'google-api-go-client/0.5 Terraform/1.7.2 (+https://www.terraform.io) Terraform-Plugin-SDK/2.10.1 terraform-provider-google/5.11.0,gzip(gfe)',
        event_network_http_parsedUserAgent_family: 'USER_DEFINED',
        type: 'GCTI_FINDING',
        detection_1_ruleName:
          'SCC: Discovery: Service Account Self-Investigation with Resource Creation',
        detection_1_summary: 'Rule Detection',
        detection_1_description:
          'Detection of an IAM service account credential that is used to investigate the roles and permissions associated with that same service account',
        detection_1_severity: 'HIGH',
        detection_1_urlBackToProduct:
          'https://gglwl.backstory.chronicle.security/alert?alertId=de_bd51e7b7-3370-44c0-c738-2f8bcf5b3dd6',
        detection_1_ruleId: 'ur_c512c6b6-56fa-41d5-aeae-b01b2d52cfe8',
        detection_1_alertState: 'ALERTING',
        detection_1_ruleType: 'MULTI_EVENT',
        detection_1_detectionFields_1_key: 'service_account',
        detection_1_detectionFields_1_value:
          'sa-cron-vm@scce-lab-401713.iam.gserviceaccount.com',
        detection_1_detectionFields_1_source:
          'udm.principal.user.email_addresses',
        detection_1_ruleLabels_1_key: 'reference',
        detection_1_ruleLabels_1_value:
          'https://cloud.google.com/security-command-center/docs/how-to-investigate-threats#service_account_self-investigation',
        detection_1_ruleLabels_2_key: 'rule_name',
        detection_1_ruleLabels_2_value:
          'SCC: Discovery: Service Account Self-Investigation with Resource Creation',
        detection_1_outcomes_1_key: 'roles',
        detection_1_outcomes_1_value: 'roles/storage.objectAdmin',
        detection_1_outcomes_2_key: 'group_memberships',
        detection_1_outcomes_3_key: 'ip',
        detection_1_outcomes_3_source: 'udm.principal.ip',
        detection_1_outcomes_4_key: 'principal_email_address',
        detection_1_outcomes_4_value:
          'sa-cron-vm@scce-lab-401713.iam.gserviceaccount.com',
        detection_1_outcomes_4_source: 'udm.principal.user.email_addresses',
        detection_1_outcomes_5_key: 'risk_score',
        detection_1_outcomes_5_value: '90',
        detection_1_outcomes_6_key: 'vendor_name',
        detection_1_outcomes_6_value: 'Google',
        detection_1_outcomes_7_key: 'product_name',
        detection_1_outcomes_7_value: 'Security Command Center',
        detection_1_ruleSet: '92f84c0d-678c-c2ba-fd76-9baa399885a2',
        detection_1_ruleSetDisplayName:
          'CDIR SCC Enhanced Defense Discovery Alerts',
        detection_1_riskScore: '90',
        detection_1_rulesetCategoryDisplayName: 'Cloud Threats',
        createdTime: '2024-02-02T11:05:32.43988Z',
        lastUpdatedTime: '2024-02-02T11:05:32.43988Z',
        id: 'de_bd51e7b7-3370-44c0-c738-2f8bcf5b3dd6',
        timeWindow_startTime: '2024-02-02T09:36:00Z',
        timeWindow_endTime: '2024-02-02T10:06:00Z',
        detectionTime: '2024-02-02T10:06:00Z',
        tags_1: 'TA0007',
        tags_2: 'T1069.003',
        alert_type: 'RULE',
        event_type: 'USER_RESOURCE_UPDATE_CONTENT',
        event_category: 'USER',
        event_principal_user_emailAddresses:
          'sa-cron-vm@scce-lab-401713.iam.gserviceaccount.com',
        event_principal_user_attribute_labels_authorization_granted: 'true',
        event_principal_user_attribute_labels_authorization_info_resourceService:
          'container.googleapis.com',
        'event_principal_labels_requestMetadata.callerIp':
          'Request came from a GCE VM in a different organization. : REPLACED',
        'event_principal_labels_requestMetadata.callerIsGceClient':
          'Request originated from a GCE VM or an on-prem VM behind a VPN, and the log was enhanced with additional information : REPLACED',
        event_principal_labels_request_attributes_time:
          '2024-02-02T10:02:16.274561046Z',
        event_target_resource_attribute_labels_cls_name:
          'my-gke-cluster-ephemeral',
        event_target_resource_attribute_labels_request_type:
          'type.googleapis.com/google.container.v1alpha1.UpdateClusterRequest',
        event_target_resource_attribute_labels_req_name:
          'projects/dummyProject/locations/europe-west2/clusters/my-gke-cluster-ephemeral',
        event_target_resource_attribute_labels_response_operation_type:
          'UPDATE_CLUSTER',
        event_target_resource_attribute_labels_response_status: 'RUNNING',
        event_target_resource_attribute_labels_res_name:
          'operation-1706868136459-e66107f7-2a00-4327-84e1-9c5318eddbdf',
        event_target_resource_attribute_labels_res_type:
          'type.googleapis.com/google.container.v1alpha1.Operation',
        event_about_labels_type:
          'type.googleapis.com/google.cloud.audit.AuditLog',
        event_about_labels_res_operation_type: 'UPDATE_CLUSTER',
        event_about_labels_res_start_time: '2024-02-02T10:02:16.45958843Z',
        event_about_labels_res_status: 'RUNNING',
        event_about_labels_request_time: '2024-02-02T10:02:16.274561046Z',
        event_about_labels_operation_first: 'true',
        event_about_labels_operation_id:
          'operation-1706868136459-e66107f7-2a00-4327-84e1-9c5318eddbdf',
        event_about_labels_operation_producer: 'container.googleapis.com',
        event_securityResult_detectionFields_resource_name:
          'projects/dummyProject/locations/europe-west2/clusters/my-gke-cluster-ephemeral',
        event_securityResult_detectionFields_resource:
          'projects/dummyProject/locations/europe-west2/clusters/my-gke-cluster-ephemeral',
        detection_detectionFields_service_account:
          'sa-cron-vm@scce-lab-401713.iam.gserviceaccount.com',
        detection_ruleLabels_reference:
          'https://cloud.google.com/security-command-center/docs/how-to-investigate-threats#service_account_self-investigation',
        detection_ruleLabels_rule_name:
          'SCC: Discovery: Service Account Self-Investigation with Resource Creation',
        detection_outcomes_roles: 'roles/storage.objectAdmin',
        detection_outcomes_principal_email_address:
          'sa-cron-vm@scce-lab-401713.iam.gserviceaccount.com',
        detection_outcomes_risk_score: '90',
        detection_outcomes_vendor_name: 'Google',
        detection_outcomes_product_name: 'Security Command Center',
      },
      Environment: null,
      SourceSystemName: null,
      Extensions: [],
    },
    {
      _fields: {
        BaseEventIds: [],
        ParentEventId: 0,
        DeviceVendor: 'Google Chronicle',
        DeviceProduct: 'RULE',
        DeviceEventClassId: 'USER_RESOURCE_UPDATE_CONTENT',
      },
      _rawDataFields: {
        event_metadata_productLogId: '134lxvmd6o95',
        event_metadata_eventTimestamp: '2024-02-02T10:02:16.538770547Z',
        event_metadata_collectedTimestamp: '2024-02-02T10:02:17.450808223Z',
        event_metadata_eventType: 'USER_RESOURCE_UPDATE_CONTENT',
        event_metadata_vendorName: 'Google Cloud Platform',
        event_metadata_productName: 'Google Cloud Platform',
        event_metadata_productEventType:
          'google.container.v1.ClusterManager.UpdateCluster',
        event_metadata_description: 'UPDATE_CLUSTER',
        event_metadata_urlBackToProduct:
          'projects/dummyProject/logs/cloudaudit.googleapis.com%2Factivity',
        event_metadata_ingestedTimestamp: '2024-02-02T10:02:18.507623Z',
        event_metadata_id: 'AAAAACQHVEjD2KLpndxPGyQvrtEAAAAADgAAAAAAAAA=',
        event_metadata_logType: 'GCP_CLOUDAUDIT',
        event_metadata_baseLabels_logTypes_1: 'GCP_CLOUDAUDIT',
        event_metadata_baseLabels_allowScopedAccess: 'True',
        event_metadata_enrichmentLabels_logTypes_1: 'GCP_IAM_ANALYSIS',
        event_metadata_enrichmentLabels_logTypes_2: 'GCP_IAM_CONTEXT',
        event_metadata_enrichmentLabels_allowScopedAccess: 'True',
        'event_additional_requestMetadata.callerIp_0':
          'Request came from a GCE VM in a different organization. : REPLACED',
        event_additional_request_time: '2024-02-02T10:02:16.274561046Z',
        event_additional_res_operation_type: 'UPDATE_CLUSTER',
        event_additional_request_attributes_time:
          '2024-02-02T10:02:16.274561046Z',
        event_additional_operation_producer: 'container.googleapis.com',
        event_additional_res_start_time: '2024-02-02T10:02:16.45958843Z',
        'event_additional_requestMetadata.callerIsGceClient_1':
          'Request originated from a GCE VM or an on-prem VM behind a VPN, and the log was enhanced with additional information : REPLACED',
        event_additional_operation_first: 'true',
        event_additional_operation_id:
          'operation-1706868136459-e66107f7-2a00-4327-84e1-9c5318eddbdf',
        event_additional_res_status: 'RUNNING',
        event_additional_type:
          'type.googleapis.com/google.cloud.audit.AuditLog',
        event_principal_hostname: 'gce-internal-ip',
        event_principal_user_userid:
          'terraform-sa@scce-lab-401713.iam.gserviceaccount.com',
        event_principal_user_userDisplayName:
          'A SA to run the vm that refresh threats and resources',
        event_principal_user_emailAddresses_1:
          'sa-cron-vm@scce-lab-401713.iam.gserviceaccount.com',
        event_principal_user_emailAddresses_2:
          'sa-cron-vm@scce-lab-401713.iam.gserviceaccount.com',
        event_principal_user_emailAddresses_3:
          'terraform-sa@scce-lab-401713.iam.gserviceaccount.com',
        event_principal_user_emailAddresses_4:
          'sa-cron-vm@scce-lab-401713.iam.gserviceaccount.com',
        event_principal_user_productObjectId: '100282268471516296206',
        event_principal_user_attribute_cloud_environment:
          'GOOGLE_CLOUD_PLATFORM',
        event_principal_user_attribute_roles_1_name:
          'roles/storage.objectAdmin',
        event_principal_user_attribute_roles_1_type: 'SERVICE_ACCOUNT',
        event_principal_user_attribute_permissions_1_name:
          'container.clusters.update',
        event_principal_resource_resourceSubtype:
          'container.googleapis.com/Cluster',
        event_principal_asset_hostname: 'gce-internal-ip',
        event_target_user_userid:
          'terraform-sa@scce-lab-401713.iam.gserviceaccount.com',
        event_target_url:
          'https://container.googleapis.com/v1alpha1/projects/dummyProject/locations/europe-west2/clusters/my-gke-cluster-ephemeral',
        event_target_application: 'container.googleapis.com',
        event_target_location_name: 'europe-west2',
        event_target_resource_name:
          'projects/dummyProject/locations/europe-west2/clusters/my-gke-cluster-ephemeral',
        event_target_resource_resourceType: 'CLUSTER',
        event_target_resource_resourceSubtype: 'gke_cluster',
        event_target_resource_attribute_cloud_availabilityZone: 'europe-west2',
        event_target_cloud_project_name: 'scce-lab-401713',
        event_target_resourceAncestors_1_resourceType: 'CLUSTER',
        event_target_resourceAncestors_2_name: 'scce-lab-401713',
        event_target_resourceAncestors_2_resourceType: 'CLOUD_PROJECT',
        event_target_resourceAncestors_3_name:
          'projects/dummyProject/locations/europe-west2/clusters/my-gke-cluster-ephemeral',
        event_target_resourceAncestors_3_resourceSubtype:
          'container.googleapis.com/Cluster',
        event_about_1_url:
          'https://container.googleapis.com/v1alpha1/projects/dummyProject/locations/europe-west2/operations/operation-1706868136459-e66107f7-2a00-4327-84e1-9c5318eddbdf',
        event_securityResult_1_categoryDetails_1:
          'projects/dummyProject/logs/cloudaudit.googleapis.com%2Factivity',
        event_securityResult_1_action_1: 'ALLOW',
        event_securityResult_1_severity: 'INFORMATIONAL',
        event_network_http_userAgent:
          'google-api-go-client/0.5 Terraform/1.7.2 (+https://www.terraform.io) Terraform-Plugin-SDK/2.10.1 terraform-provider-google/5.11.0,gzip(gfe)',
        event_network_http_parsedUserAgent_family: 'USER_DEFINED',
        type: 'GCTI_FINDING',
        detection_1_ruleName:
          'SCC: Discovery: Service Account Self-Investigation with Resource Creation',
        detection_1_summary: 'Rule Detection',
        detection_1_description:
          'Detection of an IAM service account credential that is used to investigate the roles and permissions associated with that same service account',
        detection_1_severity: 'HIGH',
        detection_1_urlBackToProduct:
          'https://gglwl.backstory.chronicle.security/alert?alertId=de_bd51e7b7-3370-44c0-c738-2f8bcf5b3dd6',
        detection_1_ruleId: 'ur_c512c6b6-56fa-41d5-aeae-b01b2d52cfe8',
        detection_1_alertState: 'ALERTING',
        detection_1_ruleType: 'MULTI_EVENT',
        detection_1_detectionFields_1_key: 'service_account',
        detection_1_detectionFields_1_value:
          'sa-cron-vm@scce-lab-401713.iam.gserviceaccount.com',
        detection_1_detectionFields_1_source:
          'udm.principal.user.email_addresses',
        detection_1_ruleLabels_1_key: 'reference',
        detection_1_ruleLabels_1_value:
          'https://cloud.google.com/security-command-center/docs/how-to-investigate-threats#service_account_self-investigation',
        detection_1_ruleLabels_2_key: 'rule_name',
        detection_1_ruleLabels_2_value:
          'SCC: Discovery: Service Account Self-Investigation with Resource Creation',
        detection_1_outcomes_1_key: 'roles',
        detection_1_outcomes_1_value: 'roles/storage.objectAdmin',
        detection_1_outcomes_2_key: 'group_memberships',
        detection_1_outcomes_3_key: 'ip',
        detection_1_outcomes_3_source: 'udm.principal.ip',
        detection_1_outcomes_4_key: 'principal_email_address',
        detection_1_outcomes_4_value:
          'sa-cron-vm@scce-lab-401713.iam.gserviceaccount.com',
        detection_1_outcomes_4_source: 'udm.principal.user.email_addresses',
        detection_1_outcomes_5_key: 'risk_score',
        detection_1_outcomes_5_value: '90',
        detection_1_outcomes_6_key: 'vendor_name',
        detection_1_outcomes_6_value: 'Google',
        detection_1_outcomes_7_key: 'product_name',
        detection_1_outcomes_7_value: 'Security Command Center',
        detection_1_ruleSet: '92f84c0d-678c-c2ba-fd76-9baa399885a2',
        detection_1_ruleSetDisplayName:
          'CDIR SCC Enhanced Defense Discovery Alerts',
        detection_1_riskScore: '90',
        detection_1_rulesetCategoryDisplayName: 'Cloud Threats',
        createdTime: '2024-02-02T11:05:32.43988Z',
        lastUpdatedTime: '2024-02-02T11:05:32.43988Z',
        id: 'de_bd51e7b7-3370-44c0-c738-2f8bcf5b3dd6',
        timeWindow_startTime: '2024-02-02T09:36:00Z',
        timeWindow_endTime: '2024-02-02T10:06:00Z',
        detectionTime: '2024-02-02T10:06:00Z',
        tags_1: 'TA0007',
        tags_2: 'T1069.003',
        alert_type: 'RULE',
        event_type: 'USER_RESOURCE_UPDATE_CONTENT',
        event_category: 'USER',
        event_principal_user_emailAddresses:
          'terraform-sa@scce-lab-401713.iam.gserviceaccount.com',
        event_principal_user_attribute_labels_authorization_granted: 'true',
        event_principal_user_attribute_labels_authorization_info_resourceService:
          'container.googleapis.com',
        'event_principal_labels_requestMetadata.callerIp':
          'Request came from a GCE VM in a different organization. : REPLACED',
        'event_principal_labels_requestMetadata.callerIsGceClient':
          'Request originated from a GCE VM or an on-prem VM behind a VPN, and the log was enhanced with additional information : REPLACED',
        event_principal_labels_request_attributes_time:
          '2024-02-02T10:02:16.274561046Z',
        event_target_resource_attribute_labels_cls_name:
          'my-gke-cluster-ephemeral',
        event_target_resource_attribute_labels_request_type:
          'type.googleapis.com/google.container.v1alpha1.UpdateClusterRequest',
        event_target_resource_attribute_labels_req_name:
          'projects/dummyProject/locations/europe-west2/clusters/my-gke-cluster-ephemeral',
        event_target_resource_attribute_labels_response_operation_type:
          'UPDATE_CLUSTER',
        event_target_resource_attribute_labels_response_status: 'RUNNING',
        event_target_resource_attribute_labels_res_name:
          'operation-1706868136459-e66107f7-2a00-4327-84e1-9c5318eddbdf',
        event_target_resource_attribute_labels_res_type:
          'type.googleapis.com/google.container.v1alpha1.Operation',
        event_about_labels_type:
          'type.googleapis.com/google.cloud.audit.AuditLog',
        event_about_labels_res_operation_type: 'UPDATE_CLUSTER',
        event_about_labels_res_start_time: '2024-02-02T10:02:16.45958843Z',
        event_about_labels_res_status: 'RUNNING',
        event_about_labels_request_time: '2024-02-02T10:02:16.274561046Z',
        event_about_labels_operation_first: 'true',
        event_about_labels_operation_id:
          'operation-1706868136459-e66107f7-2a00-4327-84e1-9c5318eddbdf',
        event_about_labels_operation_producer: 'container.googleapis.com',
        event_securityResult_detectionFields_resource_name:
          'projects/dummyProject/locations/europe-west2/clusters/my-gke-cluster-ephemeral',
        event_securityResult_detectionFields_resource:
          'projects/dummyProject/locations/europe-west2/clusters/my-gke-cluster-ephemeral',
        detection_detectionFields_service_account:
          'sa-cron-vm@scce-lab-401713.iam.gserviceaccount.com',
        detection_ruleLabels_reference:
          'https://cloud.google.com/security-command-center/docs/how-to-investigate-threats#service_account_self-investigation',
        detection_ruleLabels_rule_name:
          'SCC: Discovery: Service Account Self-Investigation with Resource Creation',
        detection_outcomes_roles: 'roles/storage.objectAdmin',
        detection_outcomes_principal_email_address:
          'sa-cron-vm@scce-lab-401713.iam.gserviceaccount.com',
        detection_outcomes_risk_score: '90',
        detection_outcomes_vendor_name: 'Google',
        detection_outcomes_product_name: 'Security Command Center',
      },
      Environment: null,
      SourceSystemName: null,
      Extensions: [],
    },
    {
      _fields: {
        BaseEventIds: [],
        ParentEventId: 0,
        DeviceVendor: 'Google Chronicle',
        DeviceProduct: 'RULE',
        DeviceEventClassId: 'USER_RESOURCE_UPDATE_CONTENT',
      },
      _rawDataFields: {
        event_metadata_productLogId: '134lxvmd6o95',
        event_metadata_eventTimestamp: '2024-02-02T10:02:16.538770547Z',
        event_metadata_collectedTimestamp: '2024-02-02T10:02:17.450808223Z',
        event_metadata_eventType: 'USER_RESOURCE_UPDATE_CONTENT',
        event_metadata_vendorName: 'Google Cloud Platform',
        event_metadata_productName: 'Google Cloud Platform',
        event_metadata_productEventType:
          'google.container.v1.ClusterManager.UpdateCluster',
        event_metadata_description: 'UPDATE_CLUSTER',
        event_metadata_urlBackToProduct:
          'projects/dummyProject/logs/cloudaudit.googleapis.com%2Factivity',
        event_metadata_ingestedTimestamp: '2024-02-02T10:02:18.507623Z',
        event_metadata_id: 'AAAAACQHVEjD2KLpndxPGyQvrtEAAAAADgAAAAAAAAA=',
        event_metadata_logType: 'GCP_CLOUDAUDIT',
        event_metadata_baseLabels_logTypes_1: 'GCP_CLOUDAUDIT',
        event_metadata_baseLabels_allowScopedAccess: 'True',
        event_metadata_enrichmentLabels_logTypes_1: 'GCP_IAM_ANALYSIS',
        event_metadata_enrichmentLabels_logTypes_2: 'GCP_IAM_CONTEXT',
        event_metadata_enrichmentLabels_allowScopedAccess: 'True',
        'event_additional_requestMetadata.callerIp_0':
          'Request came from a GCE VM in a different organization. : REPLACED',
        event_additional_request_time: '2024-02-02T10:02:16.274561046Z',
        event_additional_res_operation_type: 'UPDATE_CLUSTER',
        event_additional_request_attributes_time:
          '2024-02-02T10:02:16.274561046Z',
        event_additional_operation_producer: 'container.googleapis.com',
        event_additional_res_start_time: '2024-02-02T10:02:16.45958843Z',
        'event_additional_requestMetadata.callerIsGceClient_1':
          'Request originated from a GCE VM or an on-prem VM behind a VPN, and the log was enhanced with additional information : REPLACED',
        event_additional_operation_first: 'true',
        event_additional_operation_id:
          'operation-1706868136459-e66107f7-2a00-4327-84e1-9c5318eddbdf',
        event_additional_res_status: 'RUNNING',
        event_additional_type:
          'type.googleapis.com/google.cloud.audit.AuditLog',
        event_principal_hostname: 'gce-internal-ip',
        event_principal_user_userid:
          'terraform-sa@scce-lab-401713.iam.gserviceaccount.com',
        event_principal_user_userDisplayName:
          'A SA to run the vm that refresh threats and resources',
        event_principal_user_emailAddresses_1:
          'sa-cron-vm@scce-lab-401713.iam.gserviceaccount.com',
        event_principal_user_emailAddresses_2:
          'sa-cron-vm@scce-lab-401713.iam.gserviceaccount.com',
        event_principal_user_emailAddresses_3:
          'terraform-sa@scce-lab-401713.iam.gserviceaccount.com',
        event_principal_user_emailAddresses_4:
          'sa-cron-vm@scce-lab-401713.iam.gserviceaccount.com',
        event_principal_user_productObjectId: '100282268471516296206',
        event_principal_user_attribute_cloud_environment:
          'GOOGLE_CLOUD_PLATFORM',
        event_principal_user_attribute_roles_1_name:
          'roles/storage.objectAdmin',
        event_principal_user_attribute_roles_1_type: 'SERVICE_ACCOUNT',
        event_principal_user_attribute_permissions_1_name:
          'container.clusters.update',
        event_principal_resource_resourceSubtype:
          'container.googleapis.com/Cluster',
        event_principal_asset_hostname: 'gce-internal-ip',
        event_target_user_userid:
          'terraform-sa@scce-lab-401713.iam.gserviceaccount.com',
        event_target_url:
          'https://container.googleapis.com/v1alpha1/projects/dummyProject/locations/europe-west2/clusters/my-gke-cluster-ephemeral',
        event_target_application: 'container.googleapis.com',
        event_target_location_name: 'europe-west2',
        event_target_resource_name:
          'projects/dummyProject/locations/europe-west2/clusters/my-gke-cluster-ephemeral',
        event_target_resource_resourceType: 'CLUSTER',
        event_target_resource_resourceSubtype: 'gke_cluster',
        event_target_resource_attribute_cloud_availabilityZone: 'europe-west2',
        event_target_cloud_project_name: 'scce-lab-401713',
        event_target_resourceAncestors_1_resourceType: 'CLUSTER',
        event_target_resourceAncestors_2_name: 'scce-lab-401713',
        event_target_resourceAncestors_2_resourceType: 'CLOUD_PROJECT',
        event_target_resourceAncestors_3_name:
          'projects/dummyProject/locations/europe-west2/clusters/my-gke-cluster-ephemeral',
        event_target_resourceAncestors_3_resourceSubtype:
          'container.googleapis.com/Cluster',
        event_about_1_url:
          'https://container.googleapis.com/v1alpha1/projects/dummyProject/locations/europe-west2/operations/operation-1706868136459-e66107f7-2a00-4327-84e1-9c5318eddbdf',
        event_securityResult_1_categoryDetails_1:
          'projects/dummyProject/logs/cloudaudit.googleapis.com%2Factivity',
        event_securityResult_1_action_1: 'ALLOW',
        event_securityResult_1_severity: 'INFORMATIONAL',
        event_network_http_userAgent:
          'google-api-go-client/0.5 Terraform/1.7.2 (+https://www.terraform.io) Terraform-Plugin-SDK/2.10.1 terraform-provider-google/5.11.0,gzip(gfe)',
        event_network_http_parsedUserAgent_family: 'USER_DEFINED',
        type: 'GCTI_FINDING',
        detection_1_ruleName:
          'SCC: Discovery: Service Account Self-Investigation with Resource Creation',
        detection_1_summary: 'Rule Detection',
        detection_1_description:
          'Detection of an IAM service account credential that is used to investigate the roles and permissions associated with that same service account',
        detection_1_severity: 'HIGH',
        detection_1_urlBackToProduct:
          'https://gglwl.backstory.chronicle.security/alert?alertId=de_bd51e7b7-3370-44c0-c738-2f8bcf5b3dd6',
        detection_1_ruleId: 'ur_c512c6b6-56fa-41d5-aeae-b01b2d52cfe8',
        detection_1_alertState: 'ALERTING',
        detection_1_ruleType: 'MULTI_EVENT',
        detection_1_detectionFields_1_key: 'service_account',
        detection_1_detectionFields_1_value:
          'sa-cron-vm@scce-lab-401713.iam.gserviceaccount.com',
        detection_1_detectionFields_1_source:
          'udm.principal.user.email_addresses',
        detection_1_ruleLabels_1_key: 'reference',
        detection_1_ruleLabels_1_value:
          'https://cloud.google.com/security-command-center/docs/how-to-investigate-threats#service_account_self-investigation',
        detection_1_ruleLabels_2_key: 'rule_name',
        detection_1_ruleLabels_2_value:
          'SCC: Discovery: Service Account Self-Investigation with Resource Creation',
        detection_1_outcomes_1_key: 'roles',
        detection_1_outcomes_1_value: 'roles/storage.objectAdmin',
        detection_1_outcomes_2_key: 'group_memberships',
        detection_1_outcomes_3_key: 'ip',
        detection_1_outcomes_3_source: 'udm.principal.ip',
        detection_1_outcomes_4_key: 'principal_email_address',
        detection_1_outcomes_4_value:
          'sa-cron-vm@scce-lab-401713.iam.gserviceaccount.com',
        detection_1_outcomes_4_source: 'udm.principal.user.email_addresses',
        detection_1_outcomes_5_key: 'risk_score',
        detection_1_outcomes_5_value: '90',
        detection_1_outcomes_6_key: 'vendor_name',
        detection_1_outcomes_6_value: 'Google',
        detection_1_outcomes_7_key: 'product_name',
        detection_1_outcomes_7_value: 'Security Command Center',
        detection_1_ruleSet: '92f84c0d-678c-c2ba-fd76-9baa399885a2',
        detection_1_ruleSetDisplayName:
          'CDIR SCC Enhanced Defense Discovery Alerts',
        detection_1_riskScore: '90',
        detection_1_rulesetCategoryDisplayName: 'Cloud Threats',
        createdTime: '2024-02-02T11:05:32.43988Z',
        lastUpdatedTime: '2024-02-02T11:05:32.43988Z',
        id: 'de_bd51e7b7-3370-44c0-c738-2f8bcf5b3dd6',
        timeWindow_startTime: '2024-02-02T09:36:00Z',
        timeWindow_endTime: '2024-02-02T10:06:00Z',
        detectionTime: '2024-02-02T10:06:00Z',
        tags_1: 'TA0007',
        tags_2: 'T1069.003',
        alert_type: 'RULE',
        event_type: 'USER_RESOURCE_UPDATE_CONTENT',
        event_category: 'USER',
        event_principal_user_emailAddresses:
          'sa-cron-vm@scce-lab-401713.iam.gserviceaccount.com',
        event_principal_user_attribute_labels_authorization_granted: 'true',
        event_principal_user_attribute_labels_authorization_info_resourceService:
          'container.googleapis.com',
        'event_principal_labels_requestMetadata.callerIp':
          'Request came from a GCE VM in a different organization. : REPLACED',
        'event_principal_labels_requestMetadata.callerIsGceClient':
          'Request originated from a GCE VM or an on-prem VM behind a VPN, and the log was enhanced with additional information : REPLACED',
        event_principal_labels_request_attributes_time:
          '2024-02-02T10:02:16.274561046Z',
        event_target_resource_attribute_labels_cls_name:
          'my-gke-cluster-ephemeral',
        event_target_resource_attribute_labels_request_type:
          'type.googleapis.com/google.container.v1alpha1.UpdateClusterRequest',
        event_target_resource_attribute_labels_req_name:
          'projects/dummyProject/locations/europe-west2/clusters/my-gke-cluster-ephemeral',
        event_target_resource_attribute_labels_response_operation_type:
          'UPDATE_CLUSTER',
        event_target_resource_attribute_labels_response_status: 'RUNNING',
        event_target_resource_attribute_labels_res_name:
          'operation-1706868136459-e66107f7-2a00-4327-84e1-9c5318eddbdf',
        event_target_resource_attribute_labels_res_type:
          'type.googleapis.com/google.container.v1alpha1.Operation',
        event_about_labels_type:
          'type.googleapis.com/google.cloud.audit.AuditLog',
        event_about_labels_res_operation_type: 'UPDATE_CLUSTER',
        event_about_labels_res_start_time: '2024-02-02T10:02:16.45958843Z',
        event_about_labels_res_status: 'RUNNING',
        event_about_labels_request_time: '2024-02-02T10:02:16.274561046Z',
        event_about_labels_operation_first: 'true',
        event_about_labels_operation_id:
          'operation-1706868136459-e66107f7-2a00-4327-84e1-9c5318eddbdf',
        event_about_labels_operation_producer: 'container.googleapis.com',
        event_securityResult_detectionFields_resource_name:
          'projects/dummyProject/locations/europe-west2/clusters/my-gke-cluster-ephemeral',
        event_securityResult_detectionFields_resource:
          'projects/dummyProject/locations/europe-west2/clusters/my-gke-cluster-ephemeral',
        detection_detectionFields_service_account:
          'sa-cron-vm@scce-lab-401713.iam.gserviceaccount.com',
        detection_ruleLabels_reference:
          'https://cloud.google.com/security-command-center/docs/how-to-investigate-threats#service_account_self-investigation',
        detection_ruleLabels_rule_name:
          'SCC: Discovery: Service Account Self-Investigation with Resource Creation',
        detection_outcomes_roles: 'roles/storage.objectAdmin',
        detection_outcomes_principal_email_address:
          'sa-cron-vm@scce-lab-401713.iam.gserviceaccount.com',
        detection_outcomes_risk_score: '90',
        detection_outcomes_vendor_name: 'Google',
        detection_outcomes_product_name: 'Security Command Center',
      },
      Environment: null,
      SourceSystemName: null,
      Extensions: [],
    },
    {
      _fields: {
        BaseEventIds: [],
        ParentEventId: 0,
        DeviceVendor: 'Google Chronicle',
        DeviceProduct: 'RULE',
        DeviceEventClassId: 'RESOURCE_WRITTEN',
      },
      _rawDataFields: {
        event_metadata_productLogId: '-q2otole18xk3',
        event_metadata_eventTimestamp: '2024-02-02T10:02:16.230921Z',
        event_metadata_collectedTimestamp: '2024-02-02T10:02:17.591741205Z',
        event_metadata_eventType: 'RESOURCE_WRITTEN',
        event_metadata_vendorName: 'Google Cloud Platform',
        event_metadata_productName: 'Google Cloud SQL',
        event_metadata_productEventType: 'cloudsql.instances.update',
        event_metadata_description: 'sql#operation',
        event_metadata_urlBackToProduct:
          'projects/dummyProject/logs/cloudaudit.googleapis.com%2Factivity',
        event_metadata_ingestedTimestamp: '2024-02-02T10:02:18.766668Z',
        event_metadata_id: 'AAAAAMutKPzEHKN75CMZR8RfM+MAAAAADgAAAAAAAAA=',
        event_metadata_logType: 'GCP_CLOUDAUDIT',
        event_metadata_baseLabels_logTypes_1: 'GCP_CLOUDAUDIT',
        event_metadata_baseLabels_allowScopedAccess: 'True',
        event_metadata_enrichmentLabels_logTypes_1: 'GCP_IAM_ANALYSIS',
        event_metadata_enrichmentLabels_logTypes_2: 'GCP_IAM_CONTEXT',
        event_metadata_enrichmentLabels_allowScopedAccess: 'True',
        event_additional_operation_id: '10c1ef75-4f88-41e9-83b3-0b400000002d',
        event_additional_res_status: 'PENDING',
        'event_additional_requestMetadata.callerIsGceClient_1':
          'Request originated from a GCE VM or an on-prem VM behind a VPN, and the log was enhanced with additional information : REPLACED',
        event_additional_request_time: '2024-02-02T10:02:16.737834Z',
        event_additional_type:
          'type.googleapis.com/google.cloud.audit.AuditLog',
        event_additional_request_attributes_time: '2024-02-02T10:02:16.737834Z',
        event_additional_res_kind: 'sql#operation',
        event_additional_operation_first: 'true',
        event_additional_operation_producer: 'cloudsql.googleapis.com',
        'event_additional_requestMetadata.callerIp_0':
          'Request came from a GCE VM in a different organization. : REPLACED',
        event_additional_res_operation_type: 'UPDATE',
        event_principal_hostname: 'gce-internal-ip',
        event_principal_user_userid:
          'terraform-sa@scce-lab-401713.iam.gserviceaccount.com',
        event_principal_user_userDisplayName: 'Terraform Service account',
        event_principal_user_emailAddresses_1:
          'terraform-sa@scce-lab-401713.iam.gserviceaccount.com',
        event_principal_user_emailAddresses_2:
          'terraform-sa@scce-lab-401713.iam.gserviceaccount.com',
        event_principal_user_emailAddresses_3:
          'terraform-sa@scce-lab-401713.iam.gserviceaccount.com',
        event_principal_user_emailAddresses_4:
          'sa-cron-vm@scce-lab-401713.iam.gserviceaccount.com',
        event_principal_user_productObjectId: '109464150361893883794',
        event_principal_user_attribute_cloud_environment:
          'GOOGLE_CLOUD_PLATFORM',
        event_principal_user_attribute_roles_1_name:
          'roles/resourcemanager.organizationAdmin',
        event_principal_user_attribute_roles_1_type: 'SERVICE_ACCOUNT',
        event_principal_user_attribute_permissions_1_name:
          'cloudsql.instances.update',
        event_principal_user_attribute_permissions_1_type: 'ADMIN_WRITE',
        event_principal_resource_resourceSubtype:
          'sqladmin.googleapis.com/Instance',
        event_principal_asset_hostname: 'gce-internal-ip',
        event_target_user_userid:
          'terraform-sa@scce-lab-401713.iam.gserviceaccount.com',
        event_target_url:
          'https://sqladmin.googleapis.com/sql/v1beta4/projects/dummyProject/instances/mysql-scce',
        event_target_application: 'cloudsql.googleapis.com',
        event_target_location_countryOrRegion: 'europe-west2',
        event_target_resource_name:
          'projects/dummyProject/instances/mysql-scce',
        event_target_resource_resourceType: 'DATABASE',
        event_target_resource_resourceSubtype: 'cloudsql_database',
        event_target_resource_attribute_cloud_availabilityZone:
          'europe-west2-c',
        event_target_resource_attribute_labels_7_value: '7',
        event_target_resource_attribute_creationTime:
          '2024-02-02T10:02:16.687Z',
        event_target_cloud_project_name: 'scce-lab-401713',
        event_target_resourceAncestors_1_resourceType: 'DATABASE',
        event_target_resourceAncestors_2_name: 'scce-lab-401713',
        event_target_resourceAncestors_2_productObjectId:
          '12-206dc674-e575-4bc3-b379-fb7cc42309e0',
        event_target_resourceAncestors_3_name: 'scce-lab-401713',
        event_target_resourceAncestors_3_resourceType: 'CLOUD_PROJECT',
        event_target_resourceAncestors_4_name:
          'projects/dummyProject/instances/mysql-scce',
        event_target_resourceAncestors_4_resourceSubtype:
          'sqladmin.googleapis.com/Instance',
        event_about_1_url:
          'https://sqladmin.googleapis.com/sql/v1beta4/projects/dummyProject/operations/10c1ef75-4f88-41e9-83b3-0b400000002d',
        event_securityResult_1_categoryDetails_1:
          'projects/dummyProject/logs/cloudaudit.googleapis.com%2Factivity',
        event_securityResult_1_ruleName: 'ALWAYS',
        event_securityResult_1_action_1: 'ALLOW',
        event_securityResult_1_severity: 'INFORMATIONAL',
        event_securityResult_1_detectionFields_2_value: '34.89.84.44/32',
        type: 'GCTI_FINDING',
        detection_1_ruleName:
          'SCC: Discovery: Service Account Self-Investigation with Resource Creation',
        detection_1_summary: 'Rule Detection',
        detection_1_description:
          'Detection of an IAM service account credential that is used to investigate the roles and permissions associated with that same service account',
        detection_1_severity: 'HIGH',
        detection_1_urlBackToProduct:
          'https://gglwl.backstory.chronicle.security/alert?alertId=de_bd51e7b7-3370-44c0-c738-2f8bcf5b3dd6',
        detection_1_ruleId: 'ur_c512c6b6-56fa-41d5-aeae-b01b2d52cfe8',
        detection_1_alertState: 'ALERTING',
        detection_1_ruleType: 'MULTI_EVENT',
        detection_1_detectionFields_1_key: 'service_account',
        detection_1_detectionFields_1_value:
          'sa-cron-vm@scce-lab-401713.iam.gserviceaccount.com',
        detection_1_detectionFields_1_source:
          'udm.principal.user.email_addresses',
        detection_1_ruleLabels_1_key: 'reference',
        detection_1_ruleLabels_1_value:
          'https://cloud.google.com/security-command-center/docs/how-to-investigate-threats#service_account_self-investigation',
        detection_1_ruleLabels_2_key: 'rule_name',
        detection_1_ruleLabels_2_value:
          'SCC: Discovery: Service Account Self-Investigation with Resource Creation',
        detection_1_outcomes_1_key: 'roles',
        detection_1_outcomes_1_value: 'roles/storage.objectAdmin',
        detection_1_outcomes_2_key: 'group_memberships',
        detection_1_outcomes_3_key: 'ip',
        detection_1_outcomes_3_source: 'udm.principal.ip',
        detection_1_outcomes_4_key: 'principal_email_address',
        detection_1_outcomes_4_value:
          'sa-cron-vm@scce-lab-401713.iam.gserviceaccount.com',
        detection_1_outcomes_4_source: 'udm.principal.user.email_addresses',
        detection_1_outcomes_5_key: 'risk_score',
        detection_1_outcomes_5_value: '90',
        detection_1_outcomes_6_key: 'vendor_name',
        detection_1_outcomes_6_value: 'Google',
        detection_1_outcomes_7_key: 'product_name',
        detection_1_outcomes_7_value: 'Security Command Center',
        detection_1_ruleSet: '92f84c0d-678c-c2ba-fd76-9baa399885a2',
        detection_1_ruleSetDisplayName:
          'CDIR SCC Enhanced Defense Discovery Alerts',
        detection_1_riskScore: '90',
        detection_1_rulesetCategoryDisplayName: 'Cloud Threats',
        createdTime: '2024-02-02T11:05:32.43988Z',
        lastUpdatedTime: '2024-02-02T11:05:32.43988Z',
        id: 'de_bd51e7b7-3370-44c0-c738-2f8bcf5b3dd6',
        timeWindow_startTime: '2024-02-02T09:36:00Z',
        timeWindow_endTime: '2024-02-02T10:06:00Z',
        detectionTime: '2024-02-02T10:06:00Z',
        tags_1: 'TA0007',
        tags_2: 'T1069.003',
        alert_type: 'RULE',
        event_type: 'RESOURCE_WRITTEN',
        event_category: 'RESOURCE',
        event_principal_user_emailAddresses:
          'terraform-sa@scce-lab-401713.iam.gserviceaccount.com',
        event_principal_user_attribute_labels_authorization_granted: 'true',
        event_principal_user_attribute_labels_authorization_info_resourceService:
          'sqladmin.googleapis.com',
        'event_principal_labels_requestMetadata.callerIp':
          'Request came from a GCE VM in a different organization. : REPLACED',
        'event_principal_labels_requestMetadata.callerIsGceClient':
          'Request originated from a GCE VM or an on-prem VM behind a VPN, and the log was enhanced with additional information : REPLACED',
        event_principal_labels_request_attributes_time:
          '2024-02-02T10:02:16.737834Z',
        event_target_resource_attribute_labels_backup_config_retention_settings_retained_backups:
          '7',
        event_target_resource_attribute_labels_backup_config_retention_settings_unit:
          'COUNT',
        event_target_resource_attribute_labels_backup_config_binarylog_enabled:
          'false',
        event_target_resource_attribute_labels_backup_config_enabled: 'false',
        event_target_resource_attribute_labels_backup_config_point_in_time_recovery_enabled:
          'false',
        event_target_resource_attribute_labels_backup_config_start_time:
          '22:00',
        event_target_resource_attribute_labels_data_disk_size_gb: '10',
        event_target_resource_attribute_labels_data_disk_type: 'PD_SSD',
        event_target_resource_attribute_labels_pricing_plan: 'PER_USE',
        event_target_resource_attribute_labels_req_project: 'scce-lab-401713',
        event_target_resource_attribute_labels_resource_avaibilitytype: 'ZONAL',
        event_target_resource_attribute_labels_tier: 'db-f1-micro',
        event_target_resource_attribute_labels_storage_auto_resize: 'true',
        event_target_resource_attribute_labels_request_type:
          'type.googleapis.com/google.cloud.sql.v1beta4.SqlInstancesUpdateRequest',
        event_target_resource_attribute_labels_response_operation_type:
          'UPDATE',
        event_target_resource_attribute_labels_response_status: 'PENDING',
        event_target_resource_attribute_labels_res_name:
          '10c1ef75-4f88-41e9-83b3-0b400000002d',
        event_target_resource_attribute_labels_res_type:
          'type.googleapis.com/google.cloud.sql.v1beta4.Operation',
        event_target_asset_attribute_labels_target_id: 'mysql-scce',
        event_about_labels_type:
          'type.googleapis.com/google.cloud.audit.AuditLog',
        event_about_labels_res_kind: 'sql#operation',
        event_about_labels_res_operation_type: 'UPDATE',
        event_about_labels_res_status: 'PENDING',
        event_about_labels_request_time: '2024-02-02T10:02:16.737834Z',
        event_about_labels_operation_first: 'true',
        event_about_labels_operation_id: '10c1ef75-4f88-41e9-83b3-0b400000002d',
        event_about_labels_operation_producer: 'cloudsql.googleapis.com',
        event_securityResult_detectionFields_resource_name:
          'projects/dummyProject/instances/mysql-scce',
        event_securityResult_detectionFields_resource:
          'projects/dummyProject/instances/mysql-scce',
        detection_detectionFields_service_account:
          'sa-cron-vm@scce-lab-401713.iam.gserviceaccount.com',
        detection_ruleLabels_reference:
          'https://cloud.google.com/security-command-center/docs/how-to-investigate-threats#service_account_self-investigation',
        detection_ruleLabels_rule_name:
          'SCC: Discovery: Service Account Self-Investigation with Resource Creation',
        detection_outcomes_roles: 'roles/storage.objectAdmin',
        detection_outcomes_principal_email_address:
          'sa-cron-vm@scce-lab-401713.iam.gserviceaccount.com',
        detection_outcomes_risk_score: '90',
        detection_outcomes_vendor_name: 'Google',
        detection_outcomes_product_name: 'Security Command Center',
      },
      Environment: null,
      SourceSystemName: null,
      Extensions: [],
    },
    {
      _fields: {
        BaseEventIds: [],
        ParentEventId: 0,
        DeviceVendor: 'Google Chronicle',
        DeviceProduct: 'RULE',
        DeviceEventClassId: 'RESOURCE_WRITTEN',
      },
      _rawDataFields: {
        event_metadata_productLogId: '-q2otole18xk3',
        event_metadata_eventTimestamp: '2024-02-02T10:02:16.230921Z',
        event_metadata_collectedTimestamp: '2024-02-02T10:02:17.591741205Z',
        event_metadata_eventType: 'RESOURCE_WRITTEN',
        event_metadata_vendorName: 'Google Cloud Platform',
        event_metadata_productName: 'Google Cloud SQL',
        event_metadata_productEventType: 'cloudsql.instances.update',
        event_metadata_description: 'sql#operation',
        event_metadata_urlBackToProduct:
          'projects/dummyProject/logs/cloudaudit.googleapis.com%2Factivity',
        event_metadata_ingestedTimestamp: '2024-02-02T10:02:18.766668Z',
        event_metadata_id: 'AAAAAMutKPzEHKN75CMZR8RfM+MAAAAADgAAAAAAAAA=',
        event_metadata_logType: 'GCP_CLOUDAUDIT',
        event_metadata_baseLabels_logTypes_1: 'GCP_CLOUDAUDIT',
        event_metadata_baseLabels_allowScopedAccess: 'True',
        event_metadata_enrichmentLabels_logTypes_1: 'GCP_IAM_ANALYSIS',
        event_metadata_enrichmentLabels_logTypes_2: 'GCP_IAM_CONTEXT',
        event_metadata_enrichmentLabels_allowScopedAccess: 'True',
        event_additional_operation_id: '10c1ef75-4f88-41e9-83b3-0b400000002d',
        event_additional_res_status: 'PENDING',
        'event_additional_requestMetadata.callerIsGceClient_1':
          'Request originated from a GCE VM or an on-prem VM behind a VPN, and the log was enhanced with additional information : REPLACED',
        event_additional_request_time: '2024-02-02T10:02:16.737834Z',
        event_additional_type:
          'type.googleapis.com/google.cloud.audit.AuditLog',
        event_additional_request_attributes_time: '2024-02-02T10:02:16.737834Z',
        event_additional_res_kind: 'sql#operation',
        event_additional_operation_first: 'true',
        event_additional_operation_producer: 'cloudsql.googleapis.com',
        'event_additional_requestMetadata.callerIp_0':
          'Request came from a GCE VM in a different organization. : REPLACED',
        event_additional_res_operation_type: 'UPDATE',
        event_principal_hostname: 'gce-internal-ip',
        event_principal_user_userid:
          'terraform-sa@scce-lab-401713.iam.gserviceaccount.com',
        event_principal_user_userDisplayName: 'Terraform Service account',
        event_principal_user_emailAddresses_1:
          'terraform-sa@scce-lab-401713.iam.gserviceaccount.com',
        event_principal_user_emailAddresses_2:
          'terraform-sa@scce-lab-401713.iam.gserviceaccount.com',
        event_principal_user_emailAddresses_3:
          'terraform-sa@scce-lab-401713.iam.gserviceaccount.com',
        event_principal_user_emailAddresses_4:
          'sa-cron-vm@scce-lab-401713.iam.gserviceaccount.com',
        event_principal_user_productObjectId: '109464150361893883794',
        event_principal_user_attribute_cloud_environment:
          'GOOGLE_CLOUD_PLATFORM',
        event_principal_user_attribute_roles_1_name:
          'roles/resourcemanager.organizationAdmin',
        event_principal_user_attribute_roles_1_type: 'SERVICE_ACCOUNT',
        event_principal_user_attribute_permissions_1_name:
          'cloudsql.instances.update',
        event_principal_user_attribute_permissions_1_type: 'ADMIN_WRITE',
        event_principal_resource_resourceSubtype:
          'sqladmin.googleapis.com/Instance',
        event_principal_asset_hostname: 'gce-internal-ip',
        event_target_user_userid:
          'terraform-sa@scce-lab-401713.iam.gserviceaccount.com',
        event_target_url:
          'https://sqladmin.googleapis.com/sql/v1beta4/projects/dummyProject/instances/mysql-scce',
        event_target_application: 'cloudsql.googleapis.com',
        event_target_location_countryOrRegion: 'europe-west2',
        event_target_resource_name:
          'projects/dummyProject/instances/mysql-scce',
        event_target_resource_resourceType: 'DATABASE',
        event_target_resource_resourceSubtype: 'cloudsql_database',
        event_target_resource_attribute_cloud_availabilityZone:
          'europe-west2-c',
        event_target_resource_attribute_labels_7_value: '7',
        event_target_resource_attribute_creationTime:
          '2024-02-02T10:02:16.687Z',
        event_target_cloud_project_name: 'scce-lab-401713',
        event_target_resourceAncestors_1_resourceType: 'DATABASE',
        event_target_resourceAncestors_2_name: 'scce-lab-401713',
        event_target_resourceAncestors_2_productObjectId:
          '12-206dc674-e575-4bc3-b379-fb7cc42309e0',
        event_target_resourceAncestors_3_name: 'scce-lab-401713',
        event_target_resourceAncestors_3_resourceType: 'CLOUD_PROJECT',
        event_target_resourceAncestors_4_name:
          'projects/dummyProject/instances/mysql-scce',
        event_target_resourceAncestors_4_resourceSubtype:
          'sqladmin.googleapis.com/Instance',
        event_about_1_url:
          'https://sqladmin.googleapis.com/sql/v1beta4/projects/dummyProject/operations/10c1ef75-4f88-41e9-83b3-0b400000002d',
        event_securityResult_1_categoryDetails_1:
          'projects/dummyProject/logs/cloudaudit.googleapis.com%2Factivity',
        event_securityResult_1_ruleName: 'ALWAYS',
        event_securityResult_1_action_1: 'ALLOW',
        event_securityResult_1_severity: 'INFORMATIONAL',
        event_securityResult_1_detectionFields_2_value: '34.89.84.44/32',
        type: 'GCTI_FINDING',
        detection_1_ruleName:
          'SCC: Discovery: Service Account Self-Investigation with Resource Creation',
        detection_1_summary: 'Rule Detection',
        detection_1_description:
          'Detection of an IAM service account credential that is used to investigate the roles and permissions associated with that same service account',
        detection_1_severity: 'HIGH',
        detection_1_urlBackToProduct:
          'https://gglwl.backstory.chronicle.security/alert?alertId=de_bd51e7b7-3370-44c0-c738-2f8bcf5b3dd6',
        detection_1_ruleId: 'ur_c512c6b6-56fa-41d5-aeae-b01b2d52cfe8',
        detection_1_alertState: 'ALERTING',
        detection_1_ruleType: 'MULTI_EVENT',
        detection_1_detectionFields_1_key: 'service_account',
        detection_1_detectionFields_1_value:
          'sa-cron-vm@scce-lab-401713.iam.gserviceaccount.com',
        detection_1_detectionFields_1_source:
          'udm.principal.user.email_addresses',
        detection_1_ruleLabels_1_key: 'reference',
        detection_1_ruleLabels_1_value:
          'https://cloud.google.com/security-command-center/docs/how-to-investigate-threats#service_account_self-investigation',
        detection_1_ruleLabels_2_key: 'rule_name',
        detection_1_ruleLabels_2_value:
          'SCC: Discovery: Service Account Self-Investigation with Resource Creation',
        detection_1_outcomes_1_key: 'roles',
        detection_1_outcomes_1_value: 'roles/storage.objectAdmin',
        detection_1_outcomes_2_key: 'group_memberships',
        detection_1_outcomes_3_key: 'ip',
        detection_1_outcomes_3_source: 'udm.principal.ip',
        detection_1_outcomes_4_key: 'principal_email_address',
        detection_1_outcomes_4_value:
          'sa-cron-vm@scce-lab-401713.iam.gserviceaccount.com',
        detection_1_outcomes_4_source: 'udm.principal.user.email_addresses',
        detection_1_outcomes_5_key: 'risk_score',
        detection_1_outcomes_5_value: '90',
        detection_1_outcomes_6_key: 'vendor_name',
        detection_1_outcomes_6_value: 'Google',
        detection_1_outcomes_7_key: 'product_name',
        detection_1_outcomes_7_value: 'Security Command Center',
        detection_1_ruleSet: '92f84c0d-678c-c2ba-fd76-9baa399885a2',
        detection_1_ruleSetDisplayName:
          'CDIR SCC Enhanced Defense Discovery Alerts',
        detection_1_riskScore: '90',
        detection_1_rulesetCategoryDisplayName: 'Cloud Threats',
        createdTime: '2024-02-02T11:05:32.43988Z',
        lastUpdatedTime: '2024-02-02T11:05:32.43988Z',
        id: 'de_bd51e7b7-3370-44c0-c738-2f8bcf5b3dd6',
        timeWindow_startTime: '2024-02-02T09:36:00Z',
        timeWindow_endTime: '2024-02-02T10:06:00Z',
        detectionTime: '2024-02-02T10:06:00Z',
        tags_1: 'TA0007',
        tags_2: 'T1069.003',
        alert_type: 'RULE',
        event_type: 'RESOURCE_WRITTEN',
        event_category: 'RESOURCE',
        event_principal_user_emailAddresses:
          'terraform-sa@scce-lab-401713.iam.gserviceaccount.com',
        event_principal_user_attribute_labels_authorization_granted: 'true',
        event_principal_user_attribute_labels_authorization_info_resourceService:
          'sqladmin.googleapis.com',
        'event_principal_labels_requestMetadata.callerIp':
          'Request came from a GCE VM in a different organization. : REPLACED',
        'event_principal_labels_requestMetadata.callerIsGceClient':
          'Request originated from a GCE VM or an on-prem VM behind a VPN, and the log was enhanced with additional information : REPLACED',
        event_principal_labels_request_attributes_time:
          '2024-02-02T10:02:16.737834Z',
        event_target_resource_attribute_labels_backup_config_retention_settings_retained_backups:
          '7',
        event_target_resource_attribute_labels_backup_config_retention_settings_unit:
          'COUNT',
        event_target_resource_attribute_labels_backup_config_binarylog_enabled:
          'false',
        event_target_resource_attribute_labels_backup_config_enabled: 'false',
        event_target_resource_attribute_labels_backup_config_point_in_time_recovery_enabled:
          'false',
        event_target_resource_attribute_labels_backup_config_start_time:
          '22:00',
        event_target_resource_attribute_labels_data_disk_size_gb: '10',
        event_target_resource_attribute_labels_data_disk_type: 'PD_SSD',
        event_target_resource_attribute_labels_pricing_plan: 'PER_USE',
        event_target_resource_attribute_labels_req_project: 'scce-lab-401713',
        event_target_resource_attribute_labels_resource_avaibilitytype: 'ZONAL',
        event_target_resource_attribute_labels_tier: 'db-f1-micro',
        event_target_resource_attribute_labels_storage_auto_resize: 'true',
        event_target_resource_attribute_labels_request_type:
          'type.googleapis.com/google.cloud.sql.v1beta4.SqlInstancesUpdateRequest',
        event_target_resource_attribute_labels_response_operation_type:
          'UPDATE',
        event_target_resource_attribute_labels_response_status: 'PENDING',
        event_target_resource_attribute_labels_res_name:
          '10c1ef75-4f88-41e9-83b3-0b400000002d',
        event_target_resource_attribute_labels_res_type:
          'type.googleapis.com/google.cloud.sql.v1beta4.Operation',
        event_target_asset_attribute_labels_target_id: 'mysql-scce',
        event_about_labels_type:
          'type.googleapis.com/google.cloud.audit.AuditLog',
        event_about_labels_res_kind: 'sql#operation',
        event_about_labels_res_operation_type: 'UPDATE',
        event_about_labels_res_status: 'PENDING',
        event_about_labels_request_time: '2024-02-02T10:02:16.737834Z',
        event_about_labels_operation_first: 'true',
        event_about_labels_operation_id: '10c1ef75-4f88-41e9-83b3-0b400000002d',
        event_about_labels_operation_producer: 'cloudsql.googleapis.com',
        event_securityResult_detectionFields_resource_name:
          'projects/dummyProject/instances/mysql-scce',
        event_securityResult_detectionFields_resource:
          'projects/dummyProject/instances/mysql-scce',
        detection_detectionFields_service_account:
          'sa-cron-vm@scce-lab-401713.iam.gserviceaccount.com',
        detection_ruleLabels_reference:
          'https://cloud.google.com/security-command-center/docs/how-to-investigate-threats#service_account_self-investigation',
        detection_ruleLabels_rule_name:
          'SCC: Discovery: Service Account Self-Investigation with Resource Creation',
        detection_outcomes_roles: 'roles/storage.objectAdmin',
        detection_outcomes_principal_email_address:
          'sa-cron-vm@scce-lab-401713.iam.gserviceaccount.com',
        detection_outcomes_risk_score: '90',
        detection_outcomes_vendor_name: 'Google',
        detection_outcomes_product_name: 'Security Command Center',
      },
      Environment: null,
      SourceSystemName: null,
      Extensions: [],
    },
    {
      _fields: {
        BaseEventIds: [],
        ParentEventId: 0,
        DeviceVendor: 'Google Chronicle',
        DeviceProduct: 'RULE',
        DeviceEventClassId: 'RESOURCE_WRITTEN',
      },
      _rawDataFields: {
        event_metadata_productLogId: '-q2otole18xk3',
        event_metadata_eventTimestamp: '2024-02-02T10:02:16.230921Z',
        event_metadata_collectedTimestamp: '2024-02-02T10:02:17.591741205Z',
        event_metadata_eventType: 'RESOURCE_WRITTEN',
        event_metadata_vendorName: 'Google Cloud Platform',
        event_metadata_productName: 'Google Cloud SQL',
        event_metadata_productEventType: 'cloudsql.instances.update',
        event_metadata_description: 'sql#operation',
        event_metadata_urlBackToProduct:
          'projects/dummyProject/logs/cloudaudit.googleapis.com%2Factivity',
        event_metadata_ingestedTimestamp: '2024-02-02T10:02:18.766668Z',
        event_metadata_id: 'AAAAAMutKPzEHKN75CMZR8RfM+MAAAAADgAAAAAAAAA=',
        event_metadata_logType: 'GCP_CLOUDAUDIT',
        event_metadata_baseLabels_logTypes_1: 'GCP_CLOUDAUDIT',
        event_metadata_baseLabels_allowScopedAccess: 'True',
        event_metadata_enrichmentLabels_logTypes_1: 'GCP_IAM_ANALYSIS',
        event_metadata_enrichmentLabels_logTypes_2: 'GCP_IAM_CONTEXT',
        event_metadata_enrichmentLabels_allowScopedAccess: 'True',
        event_additional_operation_id: '10c1ef75-4f88-41e9-83b3-0b400000002d',
        event_additional_res_status: 'PENDING',
        'event_additional_requestMetadata.callerIsGceClient_1':
          'Request originated from a GCE VM or an on-prem VM behind a VPN, and the log was enhanced with additional information : REPLACED',
        event_additional_request_time: '2024-02-02T10:02:16.737834Z',
        event_additional_type:
          'type.googleapis.com/google.cloud.audit.AuditLog',
        event_additional_request_attributes_time: '2024-02-02T10:02:16.737834Z',
        event_additional_res_kind: 'sql#operation',
        event_additional_operation_first: 'true',
        event_additional_operation_producer: 'cloudsql.googleapis.com',
        'event_additional_requestMetadata.callerIp_0':
          'Request came from a GCE VM in a different organization. : REPLACED',
        event_additional_res_operation_type: 'UPDATE',
        event_principal_hostname: 'gce-internal-ip',
        event_principal_user_userid:
          'terraform-sa@scce-lab-401713.iam.gserviceaccount.com',
        event_principal_user_userDisplayName: 'Terraform Service account',
        event_principal_user_emailAddresses_1:
          'terraform-sa@scce-lab-401713.iam.gserviceaccount.com',
        event_principal_user_emailAddresses_2:
          'terraform-sa@scce-lab-401713.iam.gserviceaccount.com',
        event_principal_user_emailAddresses_3:
          'terraform-sa@scce-lab-401713.iam.gserviceaccount.com',
        event_principal_user_emailAddresses_4:
          'sa-cron-vm@scce-lab-401713.iam.gserviceaccount.com',
        event_principal_user_productObjectId: '109464150361893883794',
        event_principal_user_attribute_cloud_environment:
          'GOOGLE_CLOUD_PLATFORM',
        event_principal_user_attribute_roles_1_name:
          'roles/resourcemanager.organizationAdmin',
        event_principal_user_attribute_roles_1_type: 'SERVICE_ACCOUNT',
        event_principal_user_attribute_permissions_1_name:
          'cloudsql.instances.update',
        event_principal_user_attribute_permissions_1_type: 'ADMIN_WRITE',
        event_principal_resource_resourceSubtype:
          'sqladmin.googleapis.com/Instance',
        event_principal_asset_hostname: 'gce-internal-ip',
        event_target_user_userid:
          'terraform-sa@scce-lab-401713.iam.gserviceaccount.com',
        event_target_url:
          'https://sqladmin.googleapis.com/sql/v1beta4/projects/dummyProject/instances/mysql-scce',
        event_target_application: 'cloudsql.googleapis.com',
        event_target_location_countryOrRegion: 'europe-west2',
        event_target_resource_name:
          'projects/dummyProject/instances/mysql-scce',
        event_target_resource_resourceType: 'DATABASE',
        event_target_resource_resourceSubtype: 'cloudsql_database',
        event_target_resource_attribute_cloud_availabilityZone:
          'europe-west2-c',
        event_target_resource_attribute_labels_7_value: '7',
        event_target_resource_attribute_creationTime:
          '2024-02-02T10:02:16.687Z',
        event_target_cloud_project_name: 'scce-lab-401713',
        event_target_resourceAncestors_1_resourceType: 'DATABASE',
        event_target_resourceAncestors_2_name: 'scce-lab-401713',
        event_target_resourceAncestors_2_productObjectId:
          '12-206dc674-e575-4bc3-b379-fb7cc42309e0',
        event_target_resourceAncestors_3_name: 'scce-lab-401713',
        event_target_resourceAncestors_3_resourceType: 'CLOUD_PROJECT',
        event_target_resourceAncestors_4_name:
          'projects/dummyProject/instances/mysql-scce',
        event_target_resourceAncestors_4_resourceSubtype:
          'sqladmin.googleapis.com/Instance',
        event_about_1_url:
          'https://sqladmin.googleapis.com/sql/v1beta4/projects/dummyProject/operations/10c1ef75-4f88-41e9-83b3-0b400000002d',
        event_securityResult_1_categoryDetails_1:
          'projects/dummyProject/logs/cloudaudit.googleapis.com%2Factivity',
        event_securityResult_1_ruleName: 'ALWAYS',
        event_securityResult_1_action_1: 'ALLOW',
        event_securityResult_1_severity: 'INFORMATIONAL',
        event_securityResult_1_detectionFields_2_value: '34.89.84.44/32',
        type: 'GCTI_FINDING',
        detection_1_ruleName:
          'SCC: Discovery: Service Account Self-Investigation with Resource Creation',
        detection_1_summary: 'Rule Detection',
        detection_1_description:
          'Detection of an IAM service account credential that is used to investigate the roles and permissions associated with that same service account',
        detection_1_severity: 'HIGH',
        detection_1_urlBackToProduct:
          'https://gglwl.backstory.chronicle.security/alert?alertId=de_bd51e7b7-3370-44c0-c738-2f8bcf5b3dd6',
        detection_1_ruleId: 'ur_c512c6b6-56fa-41d5-aeae-b01b2d52cfe8',
        detection_1_alertState: 'ALERTING',
        detection_1_ruleType: 'MULTI_EVENT',
        detection_1_detectionFields_1_key: 'service_account',
        detection_1_detectionFields_1_value:
          'sa-cron-vm@scce-lab-401713.iam.gserviceaccount.com',
        detection_1_detectionFields_1_source:
          'udm.principal.user.email_addresses',
        detection_1_ruleLabels_1_key: 'reference',
        detection_1_ruleLabels_1_value:
          'https://cloud.google.com/security-command-center/docs/how-to-investigate-threats#service_account_self-investigation',
        detection_1_ruleLabels_2_key: 'rule_name',
        detection_1_ruleLabels_2_value:
          'SCC: Discovery: Service Account Self-Investigation with Resource Creation',
        detection_1_outcomes_1_key: 'roles',
        detection_1_outcomes_1_value: 'roles/storage.objectAdmin',
        detection_1_outcomes_2_key: 'group_memberships',
        detection_1_outcomes_3_key: 'ip',
        detection_1_outcomes_3_source: 'udm.principal.ip',
        detection_1_outcomes_4_key: 'principal_email_address',
        detection_1_outcomes_4_value:
          'sa-cron-vm@scce-lab-401713.iam.gserviceaccount.com',
        detection_1_outcomes_4_source: 'udm.principal.user.email_addresses',
        detection_1_outcomes_5_key: 'risk_score',
        detection_1_outcomes_5_value: '90',
        detection_1_outcomes_6_key: 'vendor_name',
        detection_1_outcomes_6_value: 'Google',
        detection_1_outcomes_7_key: 'product_name',
        detection_1_outcomes_7_value: 'Security Command Center',
        detection_1_ruleSet: '92f84c0d-678c-c2ba-fd76-9baa399885a2',
        detection_1_ruleSetDisplayName:
          'CDIR SCC Enhanced Defense Discovery Alerts',
        detection_1_riskScore: '90',
        detection_1_rulesetCategoryDisplayName: 'Cloud Threats',
        createdTime: '2024-02-02T11:05:32.43988Z',
        lastUpdatedTime: '2024-02-02T11:05:32.43988Z',
        id: 'de_bd51e7b7-3370-44c0-c738-2f8bcf5b3dd6',
        timeWindow_startTime: '2024-02-02T09:36:00Z',
        timeWindow_endTime: '2024-02-02T10:06:00Z',
        detectionTime: '2024-02-02T10:06:00Z',
        tags_1: 'TA0007',
        tags_2: 'T1069.003',
        alert_type: 'RULE',
        event_type: 'RESOURCE_WRITTEN',
        event_category: 'RESOURCE',
        event_principal_user_emailAddresses:
          'terraform-sa@scce-lab-401713.iam.gserviceaccount.com',
        event_principal_user_attribute_labels_authorization_granted: 'true',
        event_principal_user_attribute_labels_authorization_info_resourceService:
          'sqladmin.googleapis.com',
        'event_principal_labels_requestMetadata.callerIp':
          'Request came from a GCE VM in a different organization. : REPLACED',
        'event_principal_labels_requestMetadata.callerIsGceClient':
          'Request originated from a GCE VM or an on-prem VM behind a VPN, and the log was enhanced with additional information : REPLACED',
        event_principal_labels_request_attributes_time:
          '2024-02-02T10:02:16.737834Z',
        event_target_resource_attribute_labels_backup_config_retention_settings_retained_backups:
          '7',
        event_target_resource_attribute_labels_backup_config_retention_settings_unit:
          'COUNT',
        event_target_resource_attribute_labels_backup_config_binarylog_enabled:
          'false',
        event_target_resource_attribute_labels_backup_config_enabled: 'false',
        event_target_resource_attribute_labels_backup_config_point_in_time_recovery_enabled:
          'false',
        event_target_resource_attribute_labels_backup_config_start_time:
          '22:00',
        event_target_resource_attribute_labels_data_disk_size_gb: '10',
        event_target_resource_attribute_labels_data_disk_type: 'PD_SSD',
        event_target_resource_attribute_labels_pricing_plan: 'PER_USE',
        event_target_resource_attribute_labels_req_project: 'scce-lab-401713',
        event_target_resource_attribute_labels_resource_avaibilitytype: 'ZONAL',
        event_target_resource_attribute_labels_tier: 'db-f1-micro',
        event_target_resource_attribute_labels_storage_auto_resize: 'true',
        event_target_resource_attribute_labels_request_type:
          'type.googleapis.com/google.cloud.sql.v1beta4.SqlInstancesUpdateRequest',
        event_target_resource_attribute_labels_response_operation_type:
          'UPDATE',
        event_target_resource_attribute_labels_response_status: 'PENDING',
        event_target_resource_attribute_labels_res_name:
          '10c1ef75-4f88-41e9-83b3-0b400000002d',
        event_target_resource_attribute_labels_res_type:
          'type.googleapis.com/google.cloud.sql.v1beta4.Operation',
        event_target_asset_attribute_labels_target_id: 'mysql-scce',
        event_about_labels_type:
          'type.googleapis.com/google.cloud.audit.AuditLog',
        event_about_labels_res_kind: 'sql#operation',
        event_about_labels_res_operation_type: 'UPDATE',
        event_about_labels_res_status: 'PENDING',
        event_about_labels_request_time: '2024-02-02T10:02:16.737834Z',
        event_about_labels_operation_first: 'true',
        event_about_labels_operation_id: '10c1ef75-4f88-41e9-83b3-0b400000002d',
        event_about_labels_operation_producer: 'cloudsql.googleapis.com',
        event_securityResult_detectionFields_resource_name:
          'projects/dummyProject/instances/mysql-scce',
        event_securityResult_detectionFields_resource:
          'projects/dummyProject/instances/mysql-scce',
        detection_detectionFields_service_account:
          'sa-cron-vm@scce-lab-401713.iam.gserviceaccount.com',
        detection_ruleLabels_reference:
          'https://cloud.google.com/security-command-center/docs/how-to-investigate-threats#service_account_self-investigation',
        detection_ruleLabels_rule_name:
          'SCC: Discovery: Service Account Self-Investigation with Resource Creation',
        detection_outcomes_roles: 'roles/storage.objectAdmin',
        detection_outcomes_principal_email_address:
          'sa-cron-vm@scce-lab-401713.iam.gserviceaccount.com',
        detection_outcomes_risk_score: '90',
        detection_outcomes_vendor_name: 'Google',
        detection_outcomes_product_name: 'Security Command Center',
      },
      Environment: null,
      SourceSystemName: null,
      Extensions: [],
    },
    {
      _fields: {
        BaseEventIds: [],
        ParentEventId: 0,
        DeviceVendor: 'Google Chronicle',
        DeviceProduct: 'RULE',
        DeviceEventClassId: 'RESOURCE_WRITTEN',
      },
      _rawDataFields: {
        event_metadata_productLogId: '-q2otole18xk3',
        event_metadata_eventTimestamp: '2024-02-02T10:02:16.230921Z',
        event_metadata_collectedTimestamp: '2024-02-02T10:02:17.591741205Z',
        event_metadata_eventType: 'RESOURCE_WRITTEN',
        event_metadata_vendorName: 'Google Cloud Platform',
        event_metadata_productName: 'Google Cloud SQL',
        event_metadata_productEventType: 'cloudsql.instances.update',
        event_metadata_description: 'sql#operation',
        event_metadata_urlBackToProduct:
          'projects/dummyProject/logs/cloudaudit.googleapis.com%2Factivity',
        event_metadata_ingestedTimestamp: '2024-02-02T10:02:18.766668Z',
        event_metadata_id: 'AAAAAMutKPzEHKN75CMZR8RfM+MAAAAADgAAAAAAAAA=',
        event_metadata_logType: 'GCP_CLOUDAUDIT',
        event_metadata_baseLabels_logTypes_1: 'GCP_CLOUDAUDIT',
        event_metadata_baseLabels_allowScopedAccess: 'True',
        event_metadata_enrichmentLabels_logTypes_1: 'GCP_IAM_ANALYSIS',
        event_metadata_enrichmentLabels_logTypes_2: 'GCP_IAM_CONTEXT',
        event_metadata_enrichmentLabels_allowScopedAccess: 'True',
        event_additional_operation_id: '10c1ef75-4f88-41e9-83b3-0b400000002d',
        event_additional_res_status: 'PENDING',
        'event_additional_requestMetadata.callerIsGceClient_1':
          'Request originated from a GCE VM or an on-prem VM behind a VPN, and the log was enhanced with additional information : REPLACED',
        event_additional_request_time: '2024-02-02T10:02:16.737834Z',
        event_additional_type:
          'type.googleapis.com/google.cloud.audit.AuditLog',
        event_additional_request_attributes_time: '2024-02-02T10:02:16.737834Z',
        event_additional_res_kind: 'sql#operation',
        event_additional_operation_first: 'true',
        event_additional_operation_producer: 'cloudsql.googleapis.com',
        'event_additional_requestMetadata.callerIp_0':
          'Request came from a GCE VM in a different organization. : REPLACED',
        event_additional_res_operation_type: 'UPDATE',
        event_principal_hostname: 'gce-internal-ip',
        event_principal_user_userid:
          'terraform-sa@scce-lab-401713.iam.gserviceaccount.com',
        event_principal_user_userDisplayName: 'Terraform Service account',
        event_principal_user_emailAddresses_1:
          'terraform-sa@scce-lab-401713.iam.gserviceaccount.com',
        event_principal_user_emailAddresses_2:
          'terraform-sa@scce-lab-401713.iam.gserviceaccount.com',
        event_principal_user_emailAddresses_3:
          'terraform-sa@scce-lab-401713.iam.gserviceaccount.com',
        event_principal_user_emailAddresses_4:
          'sa-cron-vm@scce-lab-401713.iam.gserviceaccount.com',
        event_principal_user_productObjectId: '109464150361893883794',
        event_principal_user_attribute_cloud_environment:
          'GOOGLE_CLOUD_PLATFORM',
        event_principal_user_attribute_roles_1_name:
          'roles/resourcemanager.organizationAdmin',
        event_principal_user_attribute_roles_1_type: 'SERVICE_ACCOUNT',
        event_principal_user_attribute_permissions_1_name:
          'cloudsql.instances.update',
        event_principal_user_attribute_permissions_1_type: 'ADMIN_WRITE',
        event_principal_resource_resourceSubtype:
          'sqladmin.googleapis.com/Instance',
        event_principal_asset_hostname: 'gce-internal-ip',
        event_target_user_userid:
          'terraform-sa@scce-lab-401713.iam.gserviceaccount.com',
        event_target_url:
          'https://sqladmin.googleapis.com/sql/v1beta4/projects/dummyProject/instances/mysql-scce',
        event_target_application: 'cloudsql.googleapis.com',
        event_target_location_countryOrRegion: 'europe-west2',
        event_target_resource_name:
          'projects/dummyProject/instances/mysql-scce',
        event_target_resource_resourceType: 'DATABASE',
        event_target_resource_resourceSubtype: 'cloudsql_database',
        event_target_resource_attribute_cloud_availabilityZone:
          'europe-west2-c',
        event_target_resource_attribute_labels_7_value: '7',
        event_target_resource_attribute_creationTime:
          '2024-02-02T10:02:16.687Z',
        event_target_cloud_project_name: 'scce-lab-401713',
        event_target_resourceAncestors_1_resourceType: 'DATABASE',
        event_target_resourceAncestors_2_name: 'scce-lab-401713',
        event_target_resourceAncestors_2_productObjectId:
          '12-206dc674-e575-4bc3-b379-fb7cc42309e0',
        event_target_resourceAncestors_3_name: 'scce-lab-401713',
        event_target_resourceAncestors_3_resourceType: 'CLOUD_PROJECT',
        event_target_resourceAncestors_4_name:
          'projects/dummyProject/instances/mysql-scce',
        event_target_resourceAncestors_4_resourceSubtype:
          'sqladmin.googleapis.com/Instance',
        event_about_1_url:
          'https://sqladmin.googleapis.com/sql/v1beta4/projects/dummyProject/operations/10c1ef75-4f88-41e9-83b3-0b400000002d',
        event_securityResult_1_categoryDetails_1:
          'projects/dummyProject/logs/cloudaudit.googleapis.com%2Factivity',
        event_securityResult_1_ruleName: 'ALWAYS',
        event_securityResult_1_action_1: 'ALLOW',
        event_securityResult_1_severity: 'INFORMATIONAL',
        event_securityResult_1_detectionFields_2_value: '34.89.84.44/32',
        type: 'GCTI_FINDING',
        detection_1_ruleName:
          'SCC: Discovery: Service Account Self-Investigation with Resource Creation',
        detection_1_summary: 'Rule Detection',
        detection_1_description:
          'Detection of an IAM service account credential that is used to investigate the roles and permissions associated with that same service account',
        detection_1_severity: 'HIGH',
        detection_1_urlBackToProduct:
          'https://gglwl.backstory.chronicle.security/alert?alertId=de_bd51e7b7-3370-44c0-c738-2f8bcf5b3dd6',
        detection_1_ruleId: 'ur_c512c6b6-56fa-41d5-aeae-b01b2d52cfe8',
        detection_1_alertState: 'ALERTING',
        detection_1_ruleType: 'MULTI_EVENT',
        detection_1_detectionFields_1_key: 'service_account',
        detection_1_detectionFields_1_value:
          'sa-cron-vm@scce-lab-401713.iam.gserviceaccount.com',
        detection_1_detectionFields_1_source:
          'udm.principal.user.email_addresses',
        detection_1_ruleLabels_1_key: 'reference',
        detection_1_ruleLabels_1_value:
          'https://cloud.google.com/security-command-center/docs/how-to-investigate-threats#service_account_self-investigation',
        detection_1_ruleLabels_2_key: 'rule_name',
        detection_1_ruleLabels_2_value:
          'SCC: Discovery: Service Account Self-Investigation with Resource Creation',
        detection_1_outcomes_1_key: 'roles',
        detection_1_outcomes_1_value: 'roles/storage.objectAdmin',
        detection_1_outcomes_2_key: 'group_memberships',
        detection_1_outcomes_3_key: 'ip',
        detection_1_outcomes_3_source: 'udm.principal.ip',
        detection_1_outcomes_4_key: 'principal_email_address',
        detection_1_outcomes_4_value:
          'sa-cron-vm@scce-lab-401713.iam.gserviceaccount.com',
        detection_1_outcomes_4_source: 'udm.principal.user.email_addresses',
        detection_1_outcomes_5_key: 'risk_score',
        detection_1_outcomes_5_value: '90',
        detection_1_outcomes_6_key: 'vendor_name',
        detection_1_outcomes_6_value: 'Google',
        detection_1_outcomes_7_key: 'product_name',
        detection_1_outcomes_7_value: 'Security Command Center',
        detection_1_ruleSet: '92f84c0d-678c-c2ba-fd76-9baa399885a2',
        detection_1_ruleSetDisplayName:
          'CDIR SCC Enhanced Defense Discovery Alerts',
        detection_1_riskScore: '90',
        detection_1_rulesetCategoryDisplayName: 'Cloud Threats',
        createdTime: '2024-02-02T11:05:32.43988Z',
        lastUpdatedTime: '2024-02-02T11:05:32.43988Z',
        id: 'de_bd51e7b7-3370-44c0-c738-2f8bcf5b3dd6',
        timeWindow_startTime: '2024-02-02T09:36:00Z',
        timeWindow_endTime: '2024-02-02T10:06:00Z',
        detectionTime: '2024-02-02T10:06:00Z',
        tags_1: 'TA0007',
        tags_2: 'T1069.003',
        alert_type: 'RULE',
        event_type: 'RESOURCE_WRITTEN',
        event_category: 'RESOURCE',
        event_principal_user_emailAddresses:
          'sa-cron-vm@scce-lab-401713.iam.gserviceaccount.com',
        event_principal_user_attribute_labels_authorization_granted: 'true',
        event_principal_user_attribute_labels_authorization_info_resourceService:
          'sqladmin.googleapis.com',
        'event_principal_labels_requestMetadata.callerIp':
          'Request came from a GCE VM in a different organization. : REPLACED',
        'event_principal_labels_requestMetadata.callerIsGceClient':
          'Request originated from a GCE VM or an on-prem VM behind a VPN, and the log was enhanced with additional information : REPLACED',
        event_principal_labels_request_attributes_time:
          '2024-02-02T10:02:16.737834Z',
        event_target_resource_attribute_labels_backup_config_retention_settings_retained_backups:
          '7',
        event_target_resource_attribute_labels_backup_config_retention_settings_unit:
          'COUNT',
        event_target_resource_attribute_labels_backup_config_binarylog_enabled:
          'false',
        event_target_resource_attribute_labels_backup_config_enabled: 'false',
        event_target_resource_attribute_labels_backup_config_point_in_time_recovery_enabled:
          'false',
        event_target_resource_attribute_labels_backup_config_start_time:
          '22:00',
        event_target_resource_attribute_labels_data_disk_size_gb: '10',
        event_target_resource_attribute_labels_data_disk_type: 'PD_SSD',
        event_target_resource_attribute_labels_pricing_plan: 'PER_USE',
        event_target_resource_attribute_labels_req_project: 'scce-lab-401713',
        event_target_resource_attribute_labels_resource_avaibilitytype: 'ZONAL',
        event_target_resource_attribute_labels_tier: 'db-f1-micro',
        event_target_resource_attribute_labels_storage_auto_resize: 'true',
        event_target_resource_attribute_labels_request_type:
          'type.googleapis.com/google.cloud.sql.v1beta4.SqlInstancesUpdateRequest',
        event_target_resource_attribute_labels_response_operation_type:
          'UPDATE',
        event_target_resource_attribute_labels_response_status: 'PENDING',
        event_target_resource_attribute_labels_res_name:
          '10c1ef75-4f88-41e9-83b3-0b400000002d',
        event_target_resource_attribute_labels_res_type:
          'type.googleapis.com/google.cloud.sql.v1beta4.Operation',
        event_target_asset_attribute_labels_target_id: 'mysql-scce',
        event_about_labels_type:
          'type.googleapis.com/google.cloud.audit.AuditLog',
        event_about_labels_res_kind: 'sql#operation',
        event_about_labels_res_operation_type: 'UPDATE',
        event_about_labels_res_status: 'PENDING',
        event_about_labels_request_time: '2024-02-02T10:02:16.737834Z',
        event_about_labels_operation_first: 'true',
        event_about_labels_operation_id: '10c1ef75-4f88-41e9-83b3-0b400000002d',
        event_about_labels_operation_producer: 'cloudsql.googleapis.com',
        event_securityResult_detectionFields_resource_name:
          'projects/dummyProject/instances/mysql-scce',
        event_securityResult_detectionFields_resource:
          'projects/dummyProject/instances/mysql-scce',
        detection_detectionFields_service_account:
          'sa-cron-vm@scce-lab-401713.iam.gserviceaccount.com',
        detection_ruleLabels_reference:
          'https://cloud.google.com/security-command-center/docs/how-to-investigate-threats#service_account_self-investigation',
        detection_ruleLabels_rule_name:
          'SCC: Discovery: Service Account Self-Investigation with Resource Creation',
        detection_outcomes_roles: 'roles/storage.objectAdmin',
        detection_outcomes_principal_email_address:
          'sa-cron-vm@scce-lab-401713.iam.gserviceaccount.com',
        detection_outcomes_risk_score: '90',
        detection_outcomes_vendor_name: 'Google',
        detection_outcomes_product_name: 'Security Command Center',
      },
      Environment: null,
      SourceSystemName: null,
      Extensions: [],
    },
    {
      _fields: {
        BaseEventIds: [],
        ParentEventId: 0,
        DeviceVendor: 'Google Chronicle',
        DeviceProduct: 'RULE',
        DeviceEventClassId: 'RESOURCE_WRITTEN',
      },
      _rawDataFields: {
        event_metadata_productLogId: 'c7n29ucsw2',
        event_metadata_eventTimestamp: '2024-02-02T10:02:18.133825094Z',
        event_metadata_collectedTimestamp: '2024-02-02T10:02:18.531495541Z',
        event_metadata_eventType: 'RESOURCE_WRITTEN',
        event_metadata_vendorName: 'Google Cloud Platform',
        event_metadata_productName: 'Google Cloud Platform',
        event_metadata_productEventType:
          'google.cloud.functions.v2.FunctionService.UpdateFunction',
        event_metadata_urlBackToProduct:
          'projects/dummyProject/logs/cloudaudit.googleapis.com%2Factivity',
        event_metadata_ingestedTimestamp: '2024-02-02T10:02:19.439898Z',
        event_metadata_id: 'AAAAAMwiiMosVf+pJzWk0hbTMlEAAAAADgAAAAAAAAA=',
        event_metadata_logType: 'GCP_CLOUDAUDIT',
        event_metadata_baseLabels_logTypes_1: 'GCP_CLOUDAUDIT',
        event_metadata_baseLabels_allowScopedAccess: 'True',
        event_metadata_enrichmentLabels_logTypes_1: 'GCP_IAM_ANALYSIS',
        event_metadata_enrichmentLabels_logTypes_2: 'GCP_IAM_CONTEXT',
        event_metadata_enrichmentLabels_allowScopedAccess: 'True',
        event_additional_operation_first: 'true',
        event_additional_caller_network:
          '//compute.googleapis.com/projects/dummyProject/global/networks/__unknown__',
        'event_additional_requestMetadata.callerIp_0':
          'Request came from a GCE VM in the same organization. : REPLACED',
        event_additional_type:
          'type.googleapis.com/google.cloud.audit.AuditLog',
        event_additional_operation_producer: 'cloudfunctions.googleapis.com',
        event_additional_request_attributes_time:
          '2024-02-02T10:02:16.863373664Z',
        event_additional_operation_id:
          'projects/dummyProject/locations/europe-west2/operations/operation-1706868136924-6106334fad67c-d6dc5f69-f79fed46',
        'event_additional_requestMetadata.callerNetwork_2':
          'Request originated from a GCE VM or an on-prem VM behind a VPN, and the log was enhanced with additional information : REPLACED',
        'event_additional_requestMetadata.callerIsGceClient_1':
          'Request originated from a GCE VM or an on-prem VM behind a VPN, and the log was enhanced with additional information : REPLACED',
        event_additional_request_time: '2024-02-02T10:02:16.863373664Z',
        event_principal_hostname: '10.1.0.8',
        event_principal_user_userid:
          'terraform-sa@scce-lab-401713.iam.gserviceaccount.com',
        event_principal_user_userDisplayName:
          'A SA to run the vm that refresh threats and resources',
        event_principal_user_emailAddresses_1:
          'sa-cron-vm@scce-lab-401713.iam.gserviceaccount.com',
        event_principal_user_emailAddresses_2:
          'sa-cron-vm@scce-lab-401713.iam.gserviceaccount.com',
        event_principal_user_emailAddresses_3:
          'terraform-sa@scce-lab-401713.iam.gserviceaccount.com',
        event_principal_user_emailAddresses_4:
          'sa-cron-vm@scce-lab-401713.iam.gserviceaccount.com',
        event_principal_user_productObjectId: '100282268471516296206',
        event_principal_user_attribute_cloud_environment:
          'GOOGLE_CLOUD_PLATFORM',
        event_principal_user_attribute_roles_1_name:
          'roles/storage.objectAdmin',
        event_principal_user_attribute_roles_1_type: 'SERVICE_ACCOUNT',
        event_principal_user_attribute_permissions_1_name:
          'cloudfunctions.functions.update',
        event_principal_ip_1: '10.1.0.8',
        event_principal_asset_hostname: '10.1.0.8',
        event_target_user_userid:
          'terraform-sa@scce-lab-401713.iam.gserviceaccount.com',
        event_target_application: 'cloudfunctions.googleapis.com',
        event_target_location_countryOrRegion: 'europe-west2',
        event_target_resource_name:
          'projects/dummyProject/locations/europe-west2/functions/secret-function',
        event_target_resource_resourceSubtype: 'cloud_function',
        event_target_cloud_project_name: 'scce-lab-401713',
        event_target_resourceAncestors_2_name: 'scce-lab-401713',
        event_target_resourceAncestors_2_resourceType: 'CLOUD_PROJECT',
        event_target_resourceAncestors_3_name:
          'projects/dummyProject/locations/europe-west2/functions/secret-function',
        event_securityResult_1_categoryDetails_1:
          'projects/dummyProject/logs/cloudaudit.googleapis.com%2Factivity',
        event_securityResult_1_action_1: 'ALLOW',
        event_securityResult_1_severity: 'INFORMATIONAL',
        event_network_http_userAgent:
          'Terraform/1.7.2 (+https://www.terraform.io) Terraform-Plugin-SDK/2.10.1 terraform-provider-google/5.11.0,gzip(gfe),gzip(gfe)',
        event_network_http_parsedUserAgent_family: 'USER_DEFINED',
        type: 'GCTI_FINDING',
        detection_1_ruleName:
          'SCC: Discovery: Service Account Self-Investigation with Resource Creation',
        detection_1_summary: 'Rule Detection',
        detection_1_description:
          'Detection of an IAM service account credential that is used to investigate the roles and permissions associated with that same service account',
        detection_1_severity: 'HIGH',
        detection_1_urlBackToProduct:
          'https://gglwl.backstory.chronicle.security/alert?alertId=de_bd51e7b7-3370-44c0-c738-2f8bcf5b3dd6',
        detection_1_ruleId: 'ur_c512c6b6-56fa-41d5-aeae-b01b2d52cfe8',
        detection_1_alertState: 'ALERTING',
        detection_1_ruleType: 'MULTI_EVENT',
        detection_1_detectionFields_1_key: 'service_account',
        detection_1_detectionFields_1_value:
          'sa-cron-vm@scce-lab-401713.iam.gserviceaccount.com',
        detection_1_detectionFields_1_source:
          'udm.principal.user.email_addresses',
        detection_1_ruleLabels_1_key: 'reference',
        detection_1_ruleLabels_1_value:
          'https://cloud.google.com/security-command-center/docs/how-to-investigate-threats#service_account_self-investigation',
        detection_1_ruleLabels_2_key: 'rule_name',
        detection_1_ruleLabels_2_value:
          'SCC: Discovery: Service Account Self-Investigation with Resource Creation',
        detection_1_outcomes_1_key: 'roles',
        detection_1_outcomes_1_value: 'roles/storage.objectAdmin',
        detection_1_outcomes_2_key: 'group_memberships',
        detection_1_outcomes_3_key: 'ip',
        detection_1_outcomes_3_source: 'udm.principal.ip',
        detection_1_outcomes_4_key: 'principal_email_address',
        detection_1_outcomes_4_value:
          'sa-cron-vm@scce-lab-401713.iam.gserviceaccount.com',
        detection_1_outcomes_4_source: 'udm.principal.user.email_addresses',
        detection_1_outcomes_5_key: 'risk_score',
        detection_1_outcomes_5_value: '90',
        detection_1_outcomes_6_key: 'vendor_name',
        detection_1_outcomes_6_value: 'Google',
        detection_1_outcomes_7_key: 'product_name',
        detection_1_outcomes_7_value: 'Security Command Center',
        detection_1_ruleSet: '92f84c0d-678c-c2ba-fd76-9baa399885a2',
        detection_1_ruleSetDisplayName:
          'CDIR SCC Enhanced Defense Discovery Alerts',
        detection_1_riskScore: '90',
        detection_1_rulesetCategoryDisplayName: 'Cloud Threats',
        createdTime: '2024-02-02T11:05:32.43988Z',
        lastUpdatedTime: '2024-02-02T11:05:32.43988Z',
        id: 'de_bd51e7b7-3370-44c0-c738-2f8bcf5b3dd6',
        timeWindow_startTime: '2024-02-02T09:36:00Z',
        timeWindow_endTime: '2024-02-02T10:06:00Z',
        detectionTime: '2024-02-02T10:06:00Z',
        tags_1: 'TA0007',
        tags_2: 'T1069.003',
        alert_type: 'RULE',
        event_type: 'RESOURCE_WRITTEN',
        event_category: 'RESOURCE',
        event_principal_ip: '10.1.0.8',
        event_principal_user_emailAddresses:
          'sa-cron-vm@scce-lab-401713.iam.gserviceaccount.com',
        event_principal_user_attribute_labels_authorization_granted: 'true',
        event_principal_user_attribute_labels_authorization_info_resourceService:
          'cloudfunctions.googleapis.com',
        'event_principal_labels_requestMetadata.callerIp':
          'Request came from a GCE VM in the same organization. : REPLACED',
        'event_principal_labels_requestMetadata.callerIsGceClient':
          'Request originated from a GCE VM or an on-prem VM behind a VPN, and the log was enhanced with additional information : REPLACED',
        'event_principal_labels_requestMetadata.callerNetwork':
          'Request originated from a GCE VM or an on-prem VM behind a VPN, and the log was enhanced with additional information : REPLACED',
        event_principal_labels_request_attributes_time:
          '2024-02-02T10:02:16.863373664Z',
        event_target_resource_attribute_labels_request_function_name:
          'projects/dummyProject/locations/europe-west2/functions/secret-function',
        event_target_resource_attribute_labels_request_type:
          'type.googleapis.com/google.cloud.functions.v2.UpdateFunctionRequest',
        event_target_resource_attribute_labels_res_type:
          'type.googleapis.com/google.longrunning.Operation',
        event_about_labels_type:
          'type.googleapis.com/google.cloud.audit.AuditLog',
        event_about_labels_request_time: '2024-02-02T10:02:16.863373664Z',
        event_about_labels_operation_first: 'true',
        event_about_labels_operation_id:
          'projects/dummyProject/locations/europe-west2/operations/operation-1706868136924-6106334fad67c-d6dc5f69-f79fed46',
        event_about_labels_operation_producer: 'cloudfunctions.googleapis.com',
        event_about_labels_caller_network:
          '//compute.googleapis.com/projects/dummyProject/global/networks/__unknown__',
        event_securityResult_detectionFields_resource_name:
          'projects/dummyProject/locations/europe-west2/functions/secret-function',
        event_securityResult_detectionFields_resource:
          'projects/dummyProject/locations/europe-west2/functions/secret-function',
        detection_detectionFields_service_account:
          'sa-cron-vm@scce-lab-401713.iam.gserviceaccount.com',
        detection_ruleLabels_reference:
          'https://cloud.google.com/security-command-center/docs/how-to-investigate-threats#service_account_self-investigation',
        detection_ruleLabels_rule_name:
          'SCC: Discovery: Service Account Self-Investigation with Resource Creation',
        detection_outcomes_roles: 'roles/storage.objectAdmin',
        detection_outcomes_principal_email_address:
          'sa-cron-vm@scce-lab-401713.iam.gserviceaccount.com',
        detection_outcomes_risk_score: '90',
        detection_outcomes_vendor_name: 'Google',
        detection_outcomes_product_name: 'Security Command Center',
      },
      Environment: null,
      SourceSystemName: null,
      Extensions: [],
    },
    {
      _fields: {
        BaseEventIds: [],
        ParentEventId: 0,
        DeviceVendor: 'Google Chronicle',
        DeviceProduct: 'RULE',
        DeviceEventClassId: 'RESOURCE_WRITTEN',
      },
      _rawDataFields: {
        event_metadata_productLogId: 'c7n29ucsw2',
        event_metadata_eventTimestamp: '2024-02-02T10:02:18.133825094Z',
        event_metadata_collectedTimestamp: '2024-02-02T10:02:18.531495541Z',
        event_metadata_eventType: 'RESOURCE_WRITTEN',
        event_metadata_vendorName: 'Google Cloud Platform',
        event_metadata_productName: 'Google Cloud Platform',
        event_metadata_productEventType:
          'google.cloud.functions.v2.FunctionService.UpdateFunction',
        event_metadata_urlBackToProduct:
          'projects/dummyProject/logs/cloudaudit.googleapis.com%2Factivity',
        event_metadata_ingestedTimestamp: '2024-02-02T10:02:19.439898Z',
        event_metadata_id: 'AAAAAMwiiMosVf+pJzWk0hbTMlEAAAAADgAAAAAAAAA=',
        event_metadata_logType: 'GCP_CLOUDAUDIT',
        event_metadata_baseLabels_logTypes_1: 'GCP_CLOUDAUDIT',
        event_metadata_baseLabels_allowScopedAccess: 'True',
        event_metadata_enrichmentLabels_logTypes_1: 'GCP_IAM_ANALYSIS',
        event_metadata_enrichmentLabels_logTypes_2: 'GCP_IAM_CONTEXT',
        event_metadata_enrichmentLabels_allowScopedAccess: 'True',
        event_additional_operation_first: 'true',
        event_additional_caller_network:
          '//compute.googleapis.com/projects/dummyProject/global/networks/__unknown__',
        'event_additional_requestMetadata.callerIp_0':
          'Request came from a GCE VM in the same organization. : REPLACED',
        event_additional_type:
          'type.googleapis.com/google.cloud.audit.AuditLog',
        event_additional_operation_producer: 'cloudfunctions.googleapis.com',
        event_additional_request_attributes_time:
          '2024-02-02T10:02:16.863373664Z',
        event_additional_operation_id:
          'projects/dummyProject/locations/europe-west2/operations/operation-1706868136924-6106334fad67c-d6dc5f69-f79fed46',
        'event_additional_requestMetadata.callerNetwork_2':
          'Request originated from a GCE VM or an on-prem VM behind a VPN, and the log was enhanced with additional information : REPLACED',
        'event_additional_requestMetadata.callerIsGceClient_1':
          'Request originated from a GCE VM or an on-prem VM behind a VPN, and the log was enhanced with additional information : REPLACED',
        event_additional_request_time: '2024-02-02T10:02:16.863373664Z',
        event_principal_hostname: '10.1.0.8',
        event_principal_user_userid:
          'terraform-sa@scce-lab-401713.iam.gserviceaccount.com',
        event_principal_user_userDisplayName:
          'A SA to run the vm that refresh threats and resources',
        event_principal_user_emailAddresses_1:
          'sa-cron-vm@scce-lab-401713.iam.gserviceaccount.com',
        event_principal_user_emailAddresses_2:
          'sa-cron-vm@scce-lab-401713.iam.gserviceaccount.com',
        event_principal_user_emailAddresses_3:
          'terraform-sa@scce-lab-401713.iam.gserviceaccount.com',
        event_principal_user_emailAddresses_4:
          'sa-cron-vm@scce-lab-401713.iam.gserviceaccount.com',
        event_principal_user_productObjectId: '100282268471516296206',
        event_principal_user_attribute_cloud_environment:
          'GOOGLE_CLOUD_PLATFORM',
        event_principal_user_attribute_roles_1_name:
          'roles/storage.objectAdmin',
        event_principal_user_attribute_roles_1_type: 'SERVICE_ACCOUNT',
        event_principal_user_attribute_permissions_1_name:
          'cloudfunctions.functions.update',
        event_principal_ip_1: '10.1.0.8',
        event_principal_asset_hostname: '10.1.0.8',
        event_target_user_userid:
          'terraform-sa@scce-lab-401713.iam.gserviceaccount.com',
        event_target_application: 'cloudfunctions.googleapis.com',
        event_target_location_countryOrRegion: 'europe-west2',
        event_target_resource_name:
          'projects/dummyProject/locations/europe-west2/functions/secret-function',
        event_target_resource_resourceSubtype: 'cloud_function',
        event_target_cloud_project_name: 'scce-lab-401713',
        event_target_resourceAncestors_2_name: 'scce-lab-401713',
        event_target_resourceAncestors_2_resourceType: 'CLOUD_PROJECT',
        event_target_resourceAncestors_3_name:
          'projects/dummyProject/locations/europe-west2/functions/secret-function',
        event_securityResult_1_categoryDetails_1:
          'projects/dummyProject/logs/cloudaudit.googleapis.com%2Factivity',
        event_securityResult_1_action_1: 'ALLOW',
        event_securityResult_1_severity: 'INFORMATIONAL',
        event_network_http_userAgent:
          'Terraform/1.7.2 (+https://www.terraform.io) Terraform-Plugin-SDK/2.10.1 terraform-provider-google/5.11.0,gzip(gfe),gzip(gfe)',
        event_network_http_parsedUserAgent_family: 'USER_DEFINED',
        type: 'GCTI_FINDING',
        detection_1_ruleName:
          'SCC: Discovery: Service Account Self-Investigation with Resource Creation',
        detection_1_summary: 'Rule Detection',
        detection_1_description:
          'Detection of an IAM service account credential that is used to investigate the roles and permissions associated with that same service account',
        detection_1_severity: 'HIGH',
        detection_1_urlBackToProduct:
          'https://gglwl.backstory.chronicle.security/alert?alertId=de_bd51e7b7-3370-44c0-c738-2f8bcf5b3dd6',
        detection_1_ruleId: 'ur_c512c6b6-56fa-41d5-aeae-b01b2d52cfe8',
        detection_1_alertState: 'ALERTING',
        detection_1_ruleType: 'MULTI_EVENT',
        detection_1_detectionFields_1_key: 'service_account',
        detection_1_detectionFields_1_value:
          'sa-cron-vm@scce-lab-401713.iam.gserviceaccount.com',
        detection_1_detectionFields_1_source:
          'udm.principal.user.email_addresses',
        detection_1_ruleLabels_1_key: 'reference',
        detection_1_ruleLabels_1_value:
          'https://cloud.google.com/security-command-center/docs/how-to-investigate-threats#service_account_self-investigation',
        detection_1_ruleLabels_2_key: 'rule_name',
        detection_1_ruleLabels_2_value:
          'SCC: Discovery: Service Account Self-Investigation with Resource Creation',
        detection_1_outcomes_1_key: 'roles',
        detection_1_outcomes_1_value: 'roles/storage.objectAdmin',
        detection_1_outcomes_2_key: 'group_memberships',
        detection_1_outcomes_3_key: 'ip',
        detection_1_outcomes_3_source: 'udm.principal.ip',
        detection_1_outcomes_4_key: 'principal_email_address',
        detection_1_outcomes_4_value:
          'sa-cron-vm@scce-lab-401713.iam.gserviceaccount.com',
        detection_1_outcomes_4_source: 'udm.principal.user.email_addresses',
        detection_1_outcomes_5_key: 'risk_score',
        detection_1_outcomes_5_value: '90',
        detection_1_outcomes_6_key: 'vendor_name',
        detection_1_outcomes_6_value: 'Google',
        detection_1_outcomes_7_key: 'product_name',
        detection_1_outcomes_7_value: 'Security Command Center',
        detection_1_ruleSet: '92f84c0d-678c-c2ba-fd76-9baa399885a2',
        detection_1_ruleSetDisplayName:
          'CDIR SCC Enhanced Defense Discovery Alerts',
        detection_1_riskScore: '90',
        detection_1_rulesetCategoryDisplayName: 'Cloud Threats',
        createdTime: '2024-02-02T11:05:32.43988Z',
        lastUpdatedTime: '2024-02-02T11:05:32.43988Z',
        id: 'de_bd51e7b7-3370-44c0-c738-2f8bcf5b3dd6',
        timeWindow_startTime: '2024-02-02T09:36:00Z',
        timeWindow_endTime: '2024-02-02T10:06:00Z',
        detectionTime: '2024-02-02T10:06:00Z',
        tags_1: 'TA0007',
        tags_2: 'T1069.003',
        alert_type: 'RULE',
        event_type: 'RESOURCE_WRITTEN',
        event_category: 'RESOURCE',
        event_principal_ip: '',
        event_principal_user_emailAddresses:
          'sa-cron-vm@scce-lab-401713.iam.gserviceaccount.com',
        event_principal_user_attribute_labels_authorization_granted: 'true',
        event_principal_user_attribute_labels_authorization_info_resourceService:
          'cloudfunctions.googleapis.com',
        'event_principal_labels_requestMetadata.callerIp':
          'Request came from a GCE VM in the same organization. : REPLACED',
        'event_principal_labels_requestMetadata.callerIsGceClient':
          'Request originated from a GCE VM or an on-prem VM behind a VPN, and the log was enhanced with additional information : REPLACED',
        'event_principal_labels_requestMetadata.callerNetwork':
          'Request originated from a GCE VM or an on-prem VM behind a VPN, and the log was enhanced with additional information : REPLACED',
        event_principal_labels_request_attributes_time:
          '2024-02-02T10:02:16.863373664Z',
        event_target_resource_attribute_labels_request_function_name:
          'projects/dummyProject/locations/europe-west2/functions/secret-function',
        event_target_resource_attribute_labels_request_type:
          'type.googleapis.com/google.cloud.functions.v2.UpdateFunctionRequest',
        event_target_resource_attribute_labels_res_type:
          'type.googleapis.com/google.longrunning.Operation',
        event_about_labels_type:
          'type.googleapis.com/google.cloud.audit.AuditLog',
        event_about_labels_request_time: '2024-02-02T10:02:16.863373664Z',
        event_about_labels_operation_first: 'true',
        event_about_labels_operation_id:
          'projects/dummyProject/locations/europe-west2/operations/operation-1706868136924-6106334fad67c-d6dc5f69-f79fed46',
        event_about_labels_operation_producer: 'cloudfunctions.googleapis.com',
        event_about_labels_caller_network:
          '//compute.googleapis.com/projects/dummyProject/global/networks/__unknown__',
        event_securityResult_detectionFields_resource_name:
          'projects/dummyProject/locations/europe-west2/functions/secret-function',
        event_securityResult_detectionFields_resource:
          'projects/dummyProject/locations/europe-west2/functions/secret-function',
        detection_detectionFields_service_account:
          'sa-cron-vm@scce-lab-401713.iam.gserviceaccount.com',
        detection_ruleLabels_reference:
          'https://cloud.google.com/security-command-center/docs/how-to-investigate-threats#service_account_self-investigation',
        detection_ruleLabels_rule_name:
          'SCC: Discovery: Service Account Self-Investigation with Resource Creation',
        detection_outcomes_roles: 'roles/storage.objectAdmin',
        detection_outcomes_principal_email_address:
          'sa-cron-vm@scce-lab-401713.iam.gserviceaccount.com',
        detection_outcomes_risk_score: '90',
        detection_outcomes_vendor_name: 'Google',
        detection_outcomes_product_name: 'Security Command Center',
      },
      Environment: null,
      SourceSystemName: null,
      Extensions: [],
    },
    {
      _fields: {
        BaseEventIds: [],
        ParentEventId: 0,
        DeviceVendor: 'Google Chronicle',
        DeviceProduct: 'RULE',
        DeviceEventClassId: 'RESOURCE_WRITTEN',
      },
      _rawDataFields: {
        event_metadata_productLogId: 'c7n29ucsw2',
        event_metadata_eventTimestamp: '2024-02-02T10:02:18.133825094Z',
        event_metadata_collectedTimestamp: '2024-02-02T10:02:18.531495541Z',
        event_metadata_eventType: 'RESOURCE_WRITTEN',
        event_metadata_vendorName: 'Google Cloud Platform',
        event_metadata_productName: 'Google Cloud Platform',
        event_metadata_productEventType:
          'google.cloud.functions.v2.FunctionService.UpdateFunction',
        event_metadata_urlBackToProduct:
          'projects/dummyProject/logs/cloudaudit.googleapis.com%2Factivity',
        event_metadata_ingestedTimestamp: '2024-02-02T10:02:19.439898Z',
        event_metadata_id: 'AAAAAMwiiMosVf+pJzWk0hbTMlEAAAAADgAAAAAAAAA=',
        event_metadata_logType: 'GCP_CLOUDAUDIT',
        event_metadata_baseLabels_logTypes_1: 'GCP_CLOUDAUDIT',
        event_metadata_baseLabels_allowScopedAccess: 'True',
        event_metadata_enrichmentLabels_logTypes_1: 'GCP_IAM_ANALYSIS',
        event_metadata_enrichmentLabels_logTypes_2: 'GCP_IAM_CONTEXT',
        event_metadata_enrichmentLabels_allowScopedAccess: 'True',
        event_additional_operation_first: 'true',
        event_additional_caller_network:
          '//compute.googleapis.com/projects/dummyProject/global/networks/__unknown__',
        'event_additional_requestMetadata.callerIp_0':
          'Request came from a GCE VM in the same organization. : REPLACED',
        event_additional_type:
          'type.googleapis.com/google.cloud.audit.AuditLog',
        event_additional_operation_producer: 'cloudfunctions.googleapis.com',
        event_additional_request_attributes_time:
          '2024-02-02T10:02:16.863373664Z',
        event_additional_operation_id:
          'projects/dummyProject/locations/europe-west2/operations/operation-1706868136924-6106334fad67c-d6dc5f69-f79fed46',
        'event_additional_requestMetadata.callerNetwork_2':
          'Request originated from a GCE VM or an on-prem VM behind a VPN, and the log was enhanced with additional information : REPLACED',
        'event_additional_requestMetadata.callerIsGceClient_1':
          'Request originated from a GCE VM or an on-prem VM behind a VPN, and the log was enhanced with additional information : REPLACED',
        event_additional_request_time: '2024-02-02T10:02:16.863373664Z',
        event_principal_hostname: '10.1.0.8',
        event_principal_user_userid:
          'terraform-sa@scce-lab-401713.iam.gserviceaccount.com',
        event_principal_user_userDisplayName:
          'A SA to run the vm that refresh threats and resources',
        event_principal_user_emailAddresses_1:
          'sa-cron-vm@scce-lab-401713.iam.gserviceaccount.com',
        event_principal_user_emailAddresses_2:
          'sa-cron-vm@scce-lab-401713.iam.gserviceaccount.com',
        event_principal_user_emailAddresses_3:
          'terraform-sa@scce-lab-401713.iam.gserviceaccount.com',
        event_principal_user_emailAddresses_4:
          'sa-cron-vm@scce-lab-401713.iam.gserviceaccount.com',
        event_principal_user_productObjectId: '100282268471516296206',
        event_principal_user_attribute_cloud_environment:
          'GOOGLE_CLOUD_PLATFORM',
        event_principal_user_attribute_roles_1_name:
          'roles/storage.objectAdmin',
        event_principal_user_attribute_roles_1_type: 'SERVICE_ACCOUNT',
        event_principal_user_attribute_permissions_1_name:
          'cloudfunctions.functions.update',
        event_principal_ip_1: '10.1.0.8',
        event_principal_asset_hostname: '10.1.0.8',
        event_target_user_userid:
          'terraform-sa@scce-lab-401713.iam.gserviceaccount.com',
        event_target_application: 'cloudfunctions.googleapis.com',
        event_target_location_countryOrRegion: 'europe-west2',
        event_target_resource_name:
          'projects/dummyProject/locations/europe-west2/functions/secret-function',
        event_target_resource_resourceSubtype: 'cloud_function',
        event_target_cloud_project_name: 'scce-lab-401713',
        event_target_resourceAncestors_2_name: 'scce-lab-401713',
        event_target_resourceAncestors_2_resourceType: 'CLOUD_PROJECT',
        event_target_resourceAncestors_3_name:
          'projects/dummyProject/locations/europe-west2/functions/secret-function',
        event_securityResult_1_categoryDetails_1:
          'projects/dummyProject/logs/cloudaudit.googleapis.com%2Factivity',
        event_securityResult_1_action_1: 'ALLOW',
        event_securityResult_1_severity: 'INFORMATIONAL',
        event_network_http_userAgent:
          'Terraform/1.7.2 (+https://www.terraform.io) Terraform-Plugin-SDK/2.10.1 terraform-provider-google/5.11.0,gzip(gfe),gzip(gfe)',
        event_network_http_parsedUserAgent_family: 'USER_DEFINED',
        type: 'GCTI_FINDING',
        detection_1_ruleName:
          'SCC: Discovery: Service Account Self-Investigation with Resource Creation',
        detection_1_summary: 'Rule Detection',
        detection_1_description:
          'Detection of an IAM service account credential that is used to investigate the roles and permissions associated with that same service account',
        detection_1_severity: 'HIGH',
        detection_1_urlBackToProduct:
          'https://gglwl.backstory.chronicle.security/alert?alertId=de_bd51e7b7-3370-44c0-c738-2f8bcf5b3dd6',
        detection_1_ruleId: 'ur_c512c6b6-56fa-41d5-aeae-b01b2d52cfe8',
        detection_1_alertState: 'ALERTING',
        detection_1_ruleType: 'MULTI_EVENT',
        detection_1_detectionFields_1_key: 'service_account',
        detection_1_detectionFields_1_value:
          'sa-cron-vm@scce-lab-401713.iam.gserviceaccount.com',
        detection_1_detectionFields_1_source:
          'udm.principal.user.email_addresses',
        detection_1_ruleLabels_1_key: 'reference',
        detection_1_ruleLabels_1_value:
          'https://cloud.google.com/security-command-center/docs/how-to-investigate-threats#service_account_self-investigation',
        detection_1_ruleLabels_2_key: 'rule_name',
        detection_1_ruleLabels_2_value:
          'SCC: Discovery: Service Account Self-Investigation with Resource Creation',
        detection_1_outcomes_1_key: 'roles',
        detection_1_outcomes_1_value: 'roles/storage.objectAdmin',
        detection_1_outcomes_2_key: 'group_memberships',
        detection_1_outcomes_3_key: 'ip',
        detection_1_outcomes_3_source: 'udm.principal.ip',
        detection_1_outcomes_4_key: 'principal_email_address',
        detection_1_outcomes_4_value:
          'sa-cron-vm@scce-lab-401713.iam.gserviceaccount.com',
        detection_1_outcomes_4_source: 'udm.principal.user.email_addresses',
        detection_1_outcomes_5_key: 'risk_score',
        detection_1_outcomes_5_value: '90',
        detection_1_outcomes_6_key: 'vendor_name',
        detection_1_outcomes_6_value: 'Google',
        detection_1_outcomes_7_key: 'product_name',
        detection_1_outcomes_7_value: 'Security Command Center',
        detection_1_ruleSet: '92f84c0d-678c-c2ba-fd76-9baa399885a2',
        detection_1_ruleSetDisplayName:
          'CDIR SCC Enhanced Defense Discovery Alerts',
        detection_1_riskScore: '90',
        detection_1_rulesetCategoryDisplayName: 'Cloud Threats',
        createdTime: '2024-02-02T11:05:32.43988Z',
        lastUpdatedTime: '2024-02-02T11:05:32.43988Z',
        id: 'de_bd51e7b7-3370-44c0-c738-2f8bcf5b3dd6',
        timeWindow_startTime: '2024-02-02T09:36:00Z',
        timeWindow_endTime: '2024-02-02T10:06:00Z',
        detectionTime: '2024-02-02T10:06:00Z',
        tags_1: 'TA0007',
        tags_2: 'T1069.003',
        alert_type: 'RULE',
        event_type: 'RESOURCE_WRITTEN',
        event_category: 'RESOURCE',
        event_principal_ip: '',
        event_principal_user_emailAddresses:
          'terraform-sa@scce-lab-401713.iam.gserviceaccount.com',
        event_principal_user_attribute_labels_authorization_granted: 'true',
        event_principal_user_attribute_labels_authorization_info_resourceService:
          'cloudfunctions.googleapis.com',
        'event_principal_labels_requestMetadata.callerIp':
          'Request came from a GCE VM in the same organization. : REPLACED',
        'event_principal_labels_requestMetadata.callerIsGceClient':
          'Request originated from a GCE VM or an on-prem VM behind a VPN, and the log was enhanced with additional information : REPLACED',
        'event_principal_labels_requestMetadata.callerNetwork':
          'Request originated from a GCE VM or an on-prem VM behind a VPN, and the log was enhanced with additional information : REPLACED',
        event_principal_labels_request_attributes_time:
          '2024-02-02T10:02:16.863373664Z',
        event_target_resource_attribute_labels_request_function_name:
          'projects/dummyProject/locations/europe-west2/functions/secret-function',
        event_target_resource_attribute_labels_request_type:
          'type.googleapis.com/google.cloud.functions.v2.UpdateFunctionRequest',
        event_target_resource_attribute_labels_res_type:
          'type.googleapis.com/google.longrunning.Operation',
        event_about_labels_type:
          'type.googleapis.com/google.cloud.audit.AuditLog',
        event_about_labels_request_time: '2024-02-02T10:02:16.863373664Z',
        event_about_labels_operation_first: 'true',
        event_about_labels_operation_id:
          'projects/dummyProject/locations/europe-west2/operations/operation-1706868136924-6106334fad67c-d6dc5f69-f79fed46',
        event_about_labels_operation_producer: 'cloudfunctions.googleapis.com',
        event_about_labels_caller_network:
          '//compute.googleapis.com/projects/dummyProject/global/networks/__unknown__',
        event_securityResult_detectionFields_resource_name:
          'projects/dummyProject/locations/europe-west2/functions/secret-function',
        event_securityResult_detectionFields_resource:
          'projects/dummyProject/locations/europe-west2/functions/secret-function',
        detection_detectionFields_service_account:
          'sa-cron-vm@scce-lab-401713.iam.gserviceaccount.com',
        detection_ruleLabels_reference:
          'https://cloud.google.com/security-command-center/docs/how-to-investigate-threats#service_account_self-investigation',
        detection_ruleLabels_rule_name:
          'SCC: Discovery: Service Account Self-Investigation with Resource Creation',
        detection_outcomes_roles: 'roles/storage.objectAdmin',
        detection_outcomes_principal_email_address:
          'sa-cron-vm@scce-lab-401713.iam.gserviceaccount.com',
        detection_outcomes_risk_score: '90',
        detection_outcomes_vendor_name: 'Google',
        detection_outcomes_product_name: 'Security Command Center',
      },
      Environment: null,
      SourceSystemName: null,
      Extensions: [],
    },
    {
      _fields: {
        BaseEventIds: [],
        ParentEventId: 0,
        DeviceVendor: 'Google Chronicle',
        DeviceProduct: 'RULE',
        DeviceEventClassId: 'RESOURCE_WRITTEN',
      },
      _rawDataFields: {
        event_metadata_productLogId: 'c7n29ucsw2',
        event_metadata_eventTimestamp: '2024-02-02T10:02:18.133825094Z',
        event_metadata_collectedTimestamp: '2024-02-02T10:02:18.531495541Z',
        event_metadata_eventType: 'RESOURCE_WRITTEN',
        event_metadata_vendorName: 'Google Cloud Platform',
        event_metadata_productName: 'Google Cloud Platform',
        event_metadata_productEventType:
          'google.cloud.functions.v2.FunctionService.UpdateFunction',
        event_metadata_urlBackToProduct:
          'projects/dummyProject/logs/cloudaudit.googleapis.com%2Factivity',
        event_metadata_ingestedTimestamp: '2024-02-02T10:02:19.439898Z',
        event_metadata_id: 'AAAAAMwiiMosVf+pJzWk0hbTMlEAAAAADgAAAAAAAAA=',
        event_metadata_logType: 'GCP_CLOUDAUDIT',
        event_metadata_baseLabels_logTypes_1: 'GCP_CLOUDAUDIT',
        event_metadata_baseLabels_allowScopedAccess: 'True',
        event_metadata_enrichmentLabels_logTypes_1: 'GCP_IAM_ANALYSIS',
        event_metadata_enrichmentLabels_logTypes_2: 'GCP_IAM_CONTEXT',
        event_metadata_enrichmentLabels_allowScopedAccess: 'True',
        event_additional_operation_first: 'true',
        event_additional_caller_network:
          '//compute.googleapis.com/projects/dummyProject/global/networks/__unknown__',
        'event_additional_requestMetadata.callerIp_0':
          'Request came from a GCE VM in the same organization. : REPLACED',
        event_additional_type:
          'type.googleapis.com/google.cloud.audit.AuditLog',
        event_additional_operation_producer: 'cloudfunctions.googleapis.com',
        event_additional_request_attributes_time:
          '2024-02-02T10:02:16.863373664Z',
        event_additional_operation_id:
          'projects/dummyProject/locations/europe-west2/operations/operation-1706868136924-6106334fad67c-d6dc5f69-f79fed46',
        'event_additional_requestMetadata.callerNetwork_2':
          'Request originated from a GCE VM or an on-prem VM behind a VPN, and the log was enhanced with additional information : REPLACED',
        'event_additional_requestMetadata.callerIsGceClient_1':
          'Request originated from a GCE VM or an on-prem VM behind a VPN, and the log was enhanced with additional information : REPLACED',
        event_additional_request_time: '2024-02-02T10:02:16.863373664Z',
        event_principal_hostname: '10.1.0.8',
        event_principal_user_userid:
          'terraform-sa@scce-lab-401713.iam.gserviceaccount.com',
        event_principal_user_userDisplayName:
          'A SA to run the vm that refresh threats and resources',
        event_principal_user_emailAddresses_1:
          'sa-cron-vm@scce-lab-401713.iam.gserviceaccount.com',
        event_principal_user_emailAddresses_2:
          'sa-cron-vm@scce-lab-401713.iam.gserviceaccount.com',
        event_principal_user_emailAddresses_3:
          'terraform-sa@scce-lab-401713.iam.gserviceaccount.com',
        event_principal_user_emailAddresses_4:
          'sa-cron-vm@scce-lab-401713.iam.gserviceaccount.com',
        event_principal_user_productObjectId: '100282268471516296206',
        event_principal_user_attribute_cloud_environment:
          'GOOGLE_CLOUD_PLATFORM',
        event_principal_user_attribute_roles_1_name:
          'roles/storage.objectAdmin',
        event_principal_user_attribute_roles_1_type: 'SERVICE_ACCOUNT',
        event_principal_user_attribute_permissions_1_name:
          'cloudfunctions.functions.update',
        event_principal_ip_1: '10.1.0.8',
        event_principal_asset_hostname: '10.1.0.8',
        event_target_user_userid:
          'terraform-sa@scce-lab-401713.iam.gserviceaccount.com',
        event_target_application: 'cloudfunctions.googleapis.com',
        event_target_location_countryOrRegion: 'europe-west2',
        event_target_resource_name:
          'projects/dummyProject/locations/europe-west2/functions/secret-function',
        event_target_resource_resourceSubtype: 'cloud_function',
        event_target_cloud_project_name: 'scce-lab-401713',
        event_target_resourceAncestors_2_name: 'scce-lab-401713',
        event_target_resourceAncestors_2_resourceType: 'CLOUD_PROJECT',
        event_target_resourceAncestors_3_name:
          'projects/dummyProject/locations/europe-west2/functions/secret-function',
        event_securityResult_1_categoryDetails_1:
          'projects/dummyProject/logs/cloudaudit.googleapis.com%2Factivity',
        event_securityResult_1_action_1: 'ALLOW',
        event_securityResult_1_severity: 'INFORMATIONAL',
        event_network_http_userAgent:
          'Terraform/1.7.2 (+https://www.terraform.io) Terraform-Plugin-SDK/2.10.1 terraform-provider-google/5.11.0,gzip(gfe),gzip(gfe)',
        event_network_http_parsedUserAgent_family: 'USER_DEFINED',
        type: 'GCTI_FINDING',
        detection_1_ruleName:
          'SCC: Discovery: Service Account Self-Investigation with Resource Creation',
        detection_1_summary: 'Rule Detection',
        detection_1_description:
          'Detection of an IAM service account credential that is used to investigate the roles and permissions associated with that same service account',
        detection_1_severity: 'HIGH',
        detection_1_urlBackToProduct:
          'https://gglwl.backstory.chronicle.security/alert?alertId=de_bd51e7b7-3370-44c0-c738-2f8bcf5b3dd6',
        detection_1_ruleId: 'ur_c512c6b6-56fa-41d5-aeae-b01b2d52cfe8',
        detection_1_alertState: 'ALERTING',
        detection_1_ruleType: 'MULTI_EVENT',
        detection_1_detectionFields_1_key: 'service_account',
        detection_1_detectionFields_1_value:
          'sa-cron-vm@scce-lab-401713.iam.gserviceaccount.com',
        detection_1_detectionFields_1_source:
          'udm.principal.user.email_addresses',
        detection_1_ruleLabels_1_key: 'reference',
        detection_1_ruleLabels_1_value:
          'https://cloud.google.com/security-command-center/docs/how-to-investigate-threats#service_account_self-investigation',
        detection_1_ruleLabels_2_key: 'rule_name',
        detection_1_ruleLabels_2_value:
          'SCC: Discovery: Service Account Self-Investigation with Resource Creation',
        detection_1_outcomes_1_key: 'roles',
        detection_1_outcomes_1_value: 'roles/storage.objectAdmin',
        detection_1_outcomes_2_key: 'group_memberships',
        detection_1_outcomes_3_key: 'ip',
        detection_1_outcomes_3_source: 'udm.principal.ip',
        detection_1_outcomes_4_key: 'principal_email_address',
        detection_1_outcomes_4_value:
          'sa-cron-vm@scce-lab-401713.iam.gserviceaccount.com',
        detection_1_outcomes_4_source: 'udm.principal.user.email_addresses',
        detection_1_outcomes_5_key: 'risk_score',
        detection_1_outcomes_5_value: '90',
        detection_1_outcomes_6_key: 'vendor_name',
        detection_1_outcomes_6_value: 'Google',
        detection_1_outcomes_7_key: 'product_name',
        detection_1_outcomes_7_value: 'Security Command Center',
        detection_1_ruleSet: '92f84c0d-678c-c2ba-fd76-9baa399885a2',
        detection_1_ruleSetDisplayName:
          'CDIR SCC Enhanced Defense Discovery Alerts',
        detection_1_riskScore: '90',
        detection_1_rulesetCategoryDisplayName: 'Cloud Threats',
        createdTime: '2024-02-02T11:05:32.43988Z',
        lastUpdatedTime: '2024-02-02T11:05:32.43988Z',
        id: 'de_bd51e7b7-3370-44c0-c738-2f8bcf5b3dd6',
        timeWindow_startTime: '2024-02-02T09:36:00Z',
        timeWindow_endTime: '2024-02-02T10:06:00Z',
        detectionTime: '2024-02-02T10:06:00Z',
        tags_1: 'TA0007',
        tags_2: 'T1069.003',
        alert_type: 'RULE',
        event_type: 'RESOURCE_WRITTEN',
        event_category: 'RESOURCE',
        event_principal_ip: '',
        event_principal_user_emailAddresses:
          'sa-cron-vm@scce-lab-401713.iam.gserviceaccount.com',
        event_principal_user_attribute_labels_authorization_granted: 'true',
        event_principal_user_attribute_labels_authorization_info_resourceService:
          'cloudfunctions.googleapis.com',
        'event_principal_labels_requestMetadata.callerIp':
          'Request came from a GCE VM in the same organization. : REPLACED',
        'event_principal_labels_requestMetadata.callerIsGceClient':
          'Request originated from a GCE VM or an on-prem VM behind a VPN, and the log was enhanced with additional information : REPLACED',
        'event_principal_labels_requestMetadata.callerNetwork':
          'Request originated from a GCE VM or an on-prem VM behind a VPN, and the log was enhanced with additional information : REPLACED',
        event_principal_labels_request_attributes_time:
          '2024-02-02T10:02:16.863373664Z',
        event_target_resource_attribute_labels_request_function_name:
          'projects/dummyProject/locations/europe-west2/functions/secret-function',
        event_target_resource_attribute_labels_request_type:
          'type.googleapis.com/google.cloud.functions.v2.UpdateFunctionRequest',
        event_target_resource_attribute_labels_res_type:
          'type.googleapis.com/google.longrunning.Operation',
        event_about_labels_type:
          'type.googleapis.com/google.cloud.audit.AuditLog',
        event_about_labels_request_time: '2024-02-02T10:02:16.863373664Z',
        event_about_labels_operation_first: 'true',
        event_about_labels_operation_id:
          'projects/dummyProject/locations/europe-west2/operations/operation-1706868136924-6106334fad67c-d6dc5f69-f79fed46',
        event_about_labels_operation_producer: 'cloudfunctions.googleapis.com',
        event_about_labels_caller_network:
          '//compute.googleapis.com/projects/dummyProject/global/networks/__unknown__',
        event_securityResult_detectionFields_resource_name:
          'projects/dummyProject/locations/europe-west2/functions/secret-function',
        event_securityResult_detectionFields_resource:
          'projects/dummyProject/locations/europe-west2/functions/secret-function',
        detection_detectionFields_service_account:
          'sa-cron-vm@scce-lab-401713.iam.gserviceaccount.com',
        detection_ruleLabels_reference:
          'https://cloud.google.com/security-command-center/docs/how-to-investigate-threats#service_account_self-investigation',
        detection_ruleLabels_rule_name:
          'SCC: Discovery: Service Account Self-Investigation with Resource Creation',
        detection_outcomes_roles: 'roles/storage.objectAdmin',
        detection_outcomes_principal_email_address:
          'sa-cron-vm@scce-lab-401713.iam.gserviceaccount.com',
        detection_outcomes_risk_score: '90',
        detection_outcomes_vendor_name: 'Google',
        detection_outcomes_product_name: 'Security Command Center',
      },
      Environment: null,
      SourceSystemName: null,
      Extensions: [],
    },
    {
      _fields: {
        BaseEventIds: [],
        ParentEventId: 0,
        DeviceVendor: 'Google Chronicle',
        DeviceProduct: 'RULE',
        DeviceEventClassId: 'RESOURCE_WRITTEN',
      },
      _rawDataFields: {
        event_metadata_productLogId: 'c7n29ucsw4',
        event_metadata_eventTimestamp: '2024-02-02T10:03:14.646357654Z',
        event_metadata_collectedTimestamp: '2024-02-02T10:03:15.547948770Z',
        event_metadata_eventType: 'RESOURCE_WRITTEN',
        event_metadata_vendorName: 'Google Cloud Platform',
        event_metadata_productName: 'Google Cloud Platform',
        event_metadata_productEventType:
          'google.cloud.functions.v2.FunctionService.UpdateFunction',
        event_metadata_urlBackToProduct:
          'projects/dummyProject/logs/cloudaudit.googleapis.com%2Factivity',
        event_metadata_ingestedTimestamp: '2024-02-02T10:03:16.142331Z',
        event_metadata_id: 'AAAAAE+jqJLOA0GrP0Kt1dAI+lEAAAAADgAAAAAAAAA=',
        event_metadata_logType: 'GCP_CLOUDAUDIT',
        event_metadata_baseLabels_logTypes_1: 'GCP_CLOUDAUDIT',
        event_metadata_baseLabels_allowScopedAccess: 'True',
        event_metadata_enrichmentLabels_logTypes_1: 'GCP_IAM_ANALYSIS',
        event_metadata_enrichmentLabels_logTypes_2: 'GCP_IAM_CONTEXT',
        event_metadata_enrichmentLabels_allowScopedAccess: 'True',
        event_additional_operation_last: 'true',
        event_additional_operation_producer: 'cloudfunctions.googleapis.com',
        event_additional_response_description: 'playing with env variable',
        event_additional_type:
          'type.googleapis.com/google.cloud.audit.AuditLog',
        event_additional_operation_id:
          'projects/dummyProject/locations/europe-west2/operations/operation-1706868136924-6106334fad67c-d6dc5f69-f79fed46',
        event_principal_user_userid:
          'terraform-sa@scce-lab-401713.iam.gserviceaccount.com',
        event_principal_user_userDisplayName:
          'A SA to run the vm that refresh threats and resources',
        event_principal_user_emailAddresses_1:
          'sa-cron-vm@scce-lab-401713.iam.gserviceaccount.com',
        event_principal_user_emailAddresses_2:
          'sa-cron-vm@scce-lab-401713.iam.gserviceaccount.com',
        event_principal_user_emailAddresses_3:
          'terraform-sa@scce-lab-401713.iam.gserviceaccount.com',
        event_principal_user_emailAddresses_4:
          'sa-cron-vm@scce-lab-401713.iam.gserviceaccount.com',
        event_principal_user_productObjectId: '100282268471516296206',
        event_principal_user_attribute_cloud_environment:
          'GOOGLE_CLOUD_PLATFORM',
        event_principal_user_attribute_roles_1_name:
          'roles/storage.objectAdmin',
        event_principal_user_attribute_roles_1_type: 'SERVICE_ACCOUNT',
        event_target_user_userid:
          'terraform-sa@scce-lab-401713.iam.gserviceaccount.com',
        event_target_application: 'cloudfunctions.googleapis.com',
        event_target_location_countryOrRegion: 'europe-west2',
        event_target_resource_name:
          'projects/dummyProject/locations/europe-west2/functions/secret-function',
        event_target_resource_resourceSubtype: 'cloud_function',
        event_target_cloud_project_name: 'scce-lab-401713',
        event_target_resourceAncestors_2_name: 'scce-lab-401713',
        event_target_resourceAncestors_2_resourceType: 'CLOUD_PROJECT',
        event_securityResult_1_categoryDetails_1:
          'projects/dummyProject/logs/cloudaudit.googleapis.com%2Factivity',
        event_securityResult_1_action_1: 'ALLOW',
        event_securityResult_1_severity: 'INFORMATIONAL',
        type: 'GCTI_FINDING',
        detection_1_ruleName:
          'SCC: Discovery: Service Account Self-Investigation with Resource Creation',
        detection_1_summary: 'Rule Detection',
        detection_1_description:
          'Detection of an IAM service account credential that is used to investigate the roles and permissions associated with that same service account',
        detection_1_severity: 'HIGH',
        detection_1_urlBackToProduct:
          'https://gglwl.backstory.chronicle.security/alert?alertId=de_bd51e7b7-3370-44c0-c738-2f8bcf5b3dd6',
        detection_1_ruleId: 'ur_c512c6b6-56fa-41d5-aeae-b01b2d52cfe8',
        detection_1_alertState: 'ALERTING',
        detection_1_ruleType: 'MULTI_EVENT',
        detection_1_detectionFields_1_key: 'service_account',
        detection_1_detectionFields_1_value:
          'sa-cron-vm@scce-lab-401713.iam.gserviceaccount.com',
        detection_1_detectionFields_1_source:
          'udm.principal.user.email_addresses',
        detection_1_ruleLabels_1_key: 'reference',
        detection_1_ruleLabels_1_value:
          'https://cloud.google.com/security-command-center/docs/how-to-investigate-threats#service_account_self-investigation',
        detection_1_ruleLabels_2_key: 'rule_name',
        detection_1_ruleLabels_2_value:
          'SCC: Discovery: Service Account Self-Investigation with Resource Creation',
        detection_1_outcomes_1_key: 'roles',
        detection_1_outcomes_1_value: 'roles/storage.objectAdmin',
        detection_1_outcomes_2_key: 'group_memberships',
        detection_1_outcomes_3_key: 'ip',
        detection_1_outcomes_3_source: 'udm.principal.ip',
        detection_1_outcomes_4_key: 'principal_email_address',
        detection_1_outcomes_4_value:
          'sa-cron-vm@scce-lab-401713.iam.gserviceaccount.com',
        detection_1_outcomes_4_source: 'udm.principal.user.email_addresses',
        detection_1_outcomes_5_key: 'risk_score',
        detection_1_outcomes_5_value: '90',
        detection_1_outcomes_6_key: 'vendor_name',
        detection_1_outcomes_6_value: 'Google',
        detection_1_outcomes_7_key: 'product_name',
        detection_1_outcomes_7_value: 'Security Command Center',
        detection_1_ruleSet: '92f84c0d-678c-c2ba-fd76-9baa399885a2',
        detection_1_ruleSetDisplayName:
          'CDIR SCC Enhanced Defense Discovery Alerts',
        detection_1_riskScore: '90',
        detection_1_rulesetCategoryDisplayName: 'Cloud Threats',
        createdTime: '2024-02-02T11:05:32.43988Z',
        lastUpdatedTime: '2024-02-02T11:05:32.43988Z',
        id: 'de_bd51e7b7-3370-44c0-c738-2f8bcf5b3dd6',
        timeWindow_startTime: '2024-02-02T09:36:00Z',
        timeWindow_endTime: '2024-02-02T10:06:00Z',
        detectionTime: '2024-02-02T10:06:00Z',
        tags_1: 'TA0007',
        tags_2: 'T1069.003',
        alert_type: 'RULE',
        event_type: 'RESOURCE_WRITTEN',
        event_category: 'RESOURCE',
        event_principal_user_emailAddresses:
          'sa-cron-vm@scce-lab-401713.iam.gserviceaccount.com',
        event_target_resource_attribute_labels_res_name:
          'projects/dummyProject/locations/europe-west2/functions/secret-function',
        event_target_resource_attribute_labels_res_type:
          'type.googleapis.com/google.cloud.functions.v2.Function',
        event_target_labels_response_description: 'playing with env variable',
        event_about_labels_type:
          'type.googleapis.com/google.cloud.audit.AuditLog',
        event_about_labels_operation_id:
          'projects/dummyProject/locations/europe-west2/operations/operation-1706868136924-6106334fad67c-d6dc5f69-f79fed46',
        event_about_labels_operation_last: 'true',
        event_about_labels_operation_producer: 'cloudfunctions.googleapis.com',
        event_securityResult_detectionFields_resource_name:
          'projects/dummyProject/locations/europe-west2/functions/secret-function',
        detection_detectionFields_service_account:
          'sa-cron-vm@scce-lab-401713.iam.gserviceaccount.com',
        detection_ruleLabels_reference:
          'https://cloud.google.com/security-command-center/docs/how-to-investigate-threats#service_account_self-investigation',
        detection_ruleLabels_rule_name:
          'SCC: Discovery: Service Account Self-Investigation with Resource Creation',
        detection_outcomes_roles: 'roles/storage.objectAdmin',
        detection_outcomes_principal_email_address:
          'sa-cron-vm@scce-lab-401713.iam.gserviceaccount.com',
        detection_outcomes_risk_score: '90',
        detection_outcomes_vendor_name: 'Google',
        detection_outcomes_product_name: 'Security Command Center',
      },
      Environment: null,
      SourceSystemName: null,
      Extensions: [],
    },
    {
      _fields: {
        BaseEventIds: [],
        ParentEventId: 0,
        DeviceVendor: 'Google Chronicle',
        DeviceProduct: 'RULE',
        DeviceEventClassId: 'RESOURCE_WRITTEN',
      },
      _rawDataFields: {
        event_metadata_productLogId: 'c7n29ucsw4',
        event_metadata_eventTimestamp: '2024-02-02T10:03:14.646357654Z',
        event_metadata_collectedTimestamp: '2024-02-02T10:03:15.547948770Z',
        event_metadata_eventType: 'RESOURCE_WRITTEN',
        event_metadata_vendorName: 'Google Cloud Platform',
        event_metadata_productName: 'Google Cloud Platform',
        event_metadata_productEventType:
          'google.cloud.functions.v2.FunctionService.UpdateFunction',
        event_metadata_urlBackToProduct:
          'projects/dummyProject/logs/cloudaudit.googleapis.com%2Factivity',
        event_metadata_ingestedTimestamp: '2024-02-02T10:03:16.142331Z',
        event_metadata_id: 'AAAAAE+jqJLOA0GrP0Kt1dAI+lEAAAAADgAAAAAAAAA=',
        event_metadata_logType: 'GCP_CLOUDAUDIT',
        event_metadata_baseLabels_logTypes_1: 'GCP_CLOUDAUDIT',
        event_metadata_baseLabels_allowScopedAccess: 'True',
        event_metadata_enrichmentLabels_logTypes_1: 'GCP_IAM_ANALYSIS',
        event_metadata_enrichmentLabels_logTypes_2: 'GCP_IAM_CONTEXT',
        event_metadata_enrichmentLabels_allowScopedAccess: 'True',
        event_additional_operation_last: 'true',
        event_additional_operation_producer: 'cloudfunctions.googleapis.com',
        event_additional_response_description: 'playing with env variable',
        event_additional_type:
          'type.googleapis.com/google.cloud.audit.AuditLog',
        event_additional_operation_id:
          'projects/dummyProject/locations/europe-west2/operations/operation-1706868136924-6106334fad67c-d6dc5f69-f79fed46',
        event_principal_user_userid:
          'terraform-sa@scce-lab-401713.iam.gserviceaccount.com',
        event_principal_user_userDisplayName:
          'A SA to run the vm that refresh threats and resources',
        event_principal_user_emailAddresses_1:
          'sa-cron-vm@scce-lab-401713.iam.gserviceaccount.com',
        event_principal_user_emailAddresses_2:
          'sa-cron-vm@scce-lab-401713.iam.gserviceaccount.com',
        event_principal_user_emailAddresses_3:
          'terraform-sa@scce-lab-401713.iam.gserviceaccount.com',
        event_principal_user_emailAddresses_4:
          'sa-cron-vm@scce-lab-401713.iam.gserviceaccount.com',
        event_principal_user_productObjectId: '100282268471516296206',
        event_principal_user_attribute_cloud_environment:
          'GOOGLE_CLOUD_PLATFORM',
        event_principal_user_attribute_roles_1_name:
          'roles/storage.objectAdmin',
        event_principal_user_attribute_roles_1_type: 'SERVICE_ACCOUNT',
        event_target_user_userid:
          'terraform-sa@scce-lab-401713.iam.gserviceaccount.com',
        event_target_application: 'cloudfunctions.googleapis.com',
        event_target_location_countryOrRegion: 'europe-west2',
        event_target_resource_name:
          'projects/dummyProject/locations/europe-west2/functions/secret-function',
        event_target_resource_resourceSubtype: 'cloud_function',
        event_target_cloud_project_name: 'scce-lab-401713',
        event_target_resourceAncestors_2_name: 'scce-lab-401713',
        event_target_resourceAncestors_2_resourceType: 'CLOUD_PROJECT',
        event_securityResult_1_categoryDetails_1:
          'projects/dummyProject/logs/cloudaudit.googleapis.com%2Factivity',
        event_securityResult_1_action_1: 'ALLOW',
        event_securityResult_1_severity: 'INFORMATIONAL',
        type: 'GCTI_FINDING',
        detection_1_ruleName:
          'SCC: Discovery: Service Account Self-Investigation with Resource Creation',
        detection_1_summary: 'Rule Detection',
        detection_1_description:
          'Detection of an IAM service account credential that is used to investigate the roles and permissions associated with that same service account',
        detection_1_severity: 'HIGH',
        detection_1_urlBackToProduct:
          'https://gglwl.backstory.chronicle.security/alert?alertId=de_bd51e7b7-3370-44c0-c738-2f8bcf5b3dd6',
        detection_1_ruleId: 'ur_c512c6b6-56fa-41d5-aeae-b01b2d52cfe8',
        detection_1_alertState: 'ALERTING',
        detection_1_ruleType: 'MULTI_EVENT',
        detection_1_detectionFields_1_key: 'service_account',
        detection_1_detectionFields_1_value:
          'sa-cron-vm@scce-lab-401713.iam.gserviceaccount.com',
        detection_1_detectionFields_1_source:
          'udm.principal.user.email_addresses',
        detection_1_ruleLabels_1_key: 'reference',
        detection_1_ruleLabels_1_value:
          'https://cloud.google.com/security-command-center/docs/how-to-investigate-threats#service_account_self-investigation',
        detection_1_ruleLabels_2_key: 'rule_name',
        detection_1_ruleLabels_2_value:
          'SCC: Discovery: Service Account Self-Investigation with Resource Creation',
        detection_1_outcomes_1_key: 'roles',
        detection_1_outcomes_1_value: 'roles/storage.objectAdmin',
        detection_1_outcomes_2_key: 'group_memberships',
        detection_1_outcomes_3_key: 'ip',
        detection_1_outcomes_3_source: 'udm.principal.ip',
        detection_1_outcomes_4_key: 'principal_email_address',
        detection_1_outcomes_4_value:
          'sa-cron-vm@scce-lab-401713.iam.gserviceaccount.com',
        detection_1_outcomes_4_source: 'udm.principal.user.email_addresses',
        detection_1_outcomes_5_key: 'risk_score',
        detection_1_outcomes_5_value: '90',
        detection_1_outcomes_6_key: 'vendor_name',
        detection_1_outcomes_6_value: 'Google',
        detection_1_outcomes_7_key: 'product_name',
        detection_1_outcomes_7_value: 'Security Command Center',
        detection_1_ruleSet: '92f84c0d-678c-c2ba-fd76-9baa399885a2',
        detection_1_ruleSetDisplayName:
          'CDIR SCC Enhanced Defense Discovery Alerts',
        detection_1_riskScore: '90',
        detection_1_rulesetCategoryDisplayName: 'Cloud Threats',
        createdTime: '2024-02-02T11:05:32.43988Z',
        lastUpdatedTime: '2024-02-02T11:05:32.43988Z',
        id: 'de_bd51e7b7-3370-44c0-c738-2f8bcf5b3dd6',
        timeWindow_startTime: '2024-02-02T09:36:00Z',
        timeWindow_endTime: '2024-02-02T10:06:00Z',
        detectionTime: '2024-02-02T10:06:00Z',
        tags_1: 'TA0007',
        tags_2: 'T1069.003',
        alert_type: 'RULE',
        event_type: 'RESOURCE_WRITTEN',
        event_category: 'RESOURCE',
        event_principal_user_emailAddresses:
          'sa-cron-vm@scce-lab-401713.iam.gserviceaccount.com',
        event_target_resource_attribute_labels_res_name:
          'projects/dummyProject/locations/europe-west2/functions/secret-function',
        event_target_resource_attribute_labels_res_type:
          'type.googleapis.com/google.cloud.functions.v2.Function',
        event_target_labels_response_description: 'playing with env variable',
        event_about_labels_type:
          'type.googleapis.com/google.cloud.audit.AuditLog',
        event_about_labels_operation_id:
          'projects/dummyProject/locations/europe-west2/operations/operation-1706868136924-6106334fad67c-d6dc5f69-f79fed46',
        event_about_labels_operation_last: 'true',
        event_about_labels_operation_producer: 'cloudfunctions.googleapis.com',
        event_securityResult_detectionFields_resource_name:
          'projects/dummyProject/locations/europe-west2/functions/secret-function',
        detection_detectionFields_service_account:
          'sa-cron-vm@scce-lab-401713.iam.gserviceaccount.com',
        detection_ruleLabels_reference:
          'https://cloud.google.com/security-command-center/docs/how-to-investigate-threats#service_account_self-investigation',
        detection_ruleLabels_rule_name:
          'SCC: Discovery: Service Account Self-Investigation with Resource Creation',
        detection_outcomes_roles: 'roles/storage.objectAdmin',
        detection_outcomes_principal_email_address:
          'sa-cron-vm@scce-lab-401713.iam.gserviceaccount.com',
        detection_outcomes_risk_score: '90',
        detection_outcomes_vendor_name: 'Google',
        detection_outcomes_product_name: 'Security Command Center',
      },
      Environment: null,
      SourceSystemName: null,
      Extensions: [],
    },
    {
      _fields: {
        BaseEventIds: [],
        ParentEventId: 0,
        DeviceVendor: 'Google Chronicle',
        DeviceProduct: 'RULE',
        DeviceEventClassId: 'RESOURCE_WRITTEN',
      },
      _rawDataFields: {
        event_metadata_productLogId: 'c7n29ucsw4',
        event_metadata_eventTimestamp: '2024-02-02T10:03:14.646357654Z',
        event_metadata_collectedTimestamp: '2024-02-02T10:03:15.547948770Z',
        event_metadata_eventType: 'RESOURCE_WRITTEN',
        event_metadata_vendorName: 'Google Cloud Platform',
        event_metadata_productName: 'Google Cloud Platform',
        event_metadata_productEventType:
          'google.cloud.functions.v2.FunctionService.UpdateFunction',
        event_metadata_urlBackToProduct:
          'projects/dummyProject/logs/cloudaudit.googleapis.com%2Factivity',
        event_metadata_ingestedTimestamp: '2024-02-02T10:03:16.142331Z',
        event_metadata_id: 'AAAAAE+jqJLOA0GrP0Kt1dAI+lEAAAAADgAAAAAAAAA=',
        event_metadata_logType: 'GCP_CLOUDAUDIT',
        event_metadata_baseLabels_logTypes_1: 'GCP_CLOUDAUDIT',
        event_metadata_baseLabels_allowScopedAccess: 'True',
        event_metadata_enrichmentLabels_logTypes_1: 'GCP_IAM_ANALYSIS',
        event_metadata_enrichmentLabels_logTypes_2: 'GCP_IAM_CONTEXT',
        event_metadata_enrichmentLabels_allowScopedAccess: 'True',
        event_additional_operation_last: 'true',
        event_additional_operation_producer: 'cloudfunctions.googleapis.com',
        event_additional_response_description: 'playing with env variable',
        event_additional_type:
          'type.googleapis.com/google.cloud.audit.AuditLog',
        event_additional_operation_id:
          'projects/dummyProject/locations/europe-west2/operations/operation-1706868136924-6106334fad67c-d6dc5f69-f79fed46',
        event_principal_user_userid:
          'terraform-sa@scce-lab-401713.iam.gserviceaccount.com',
        event_principal_user_userDisplayName:
          'A SA to run the vm that refresh threats and resources',
        event_principal_user_emailAddresses_1:
          'sa-cron-vm@scce-lab-401713.iam.gserviceaccount.com',
        event_principal_user_emailAddresses_2:
          'sa-cron-vm@scce-lab-401713.iam.gserviceaccount.com',
        event_principal_user_emailAddresses_3:
          'terraform-sa@scce-lab-401713.iam.gserviceaccount.com',
        event_principal_user_emailAddresses_4:
          'sa-cron-vm@scce-lab-401713.iam.gserviceaccount.com',
        event_principal_user_productObjectId: '100282268471516296206',
        event_principal_user_attribute_cloud_environment:
          'GOOGLE_CLOUD_PLATFORM',
        event_principal_user_attribute_roles_1_name:
          'roles/storage.objectAdmin',
        event_principal_user_attribute_roles_1_type: 'SERVICE_ACCOUNT',
        event_target_user_userid:
          'terraform-sa@scce-lab-401713.iam.gserviceaccount.com',
        event_target_application: 'cloudfunctions.googleapis.com',
        event_target_location_countryOrRegion: 'europe-west2',
        event_target_resource_name:
          'projects/dummyProject/locations/europe-west2/functions/secret-function',
        event_target_resource_resourceSubtype: 'cloud_function',
        event_target_cloud_project_name: 'scce-lab-401713',
        event_target_resourceAncestors_2_name: 'scce-lab-401713',
        event_target_resourceAncestors_2_resourceType: 'CLOUD_PROJECT',
        event_securityResult_1_categoryDetails_1:
          'projects/dummyProject/logs/cloudaudit.googleapis.com%2Factivity',
        event_securityResult_1_action_1: 'ALLOW',
        event_securityResult_1_severity: 'INFORMATIONAL',
        type: 'GCTI_FINDING',
        detection_1_ruleName:
          'SCC: Discovery: Service Account Self-Investigation with Resource Creation',
        detection_1_summary: 'Rule Detection',
        detection_1_description:
          'Detection of an IAM service account credential that is used to investigate the roles and permissions associated with that same service account',
        detection_1_severity: 'HIGH',
        detection_1_urlBackToProduct:
          'https://gglwl.backstory.chronicle.security/alert?alertId=de_bd51e7b7-3370-44c0-c738-2f8bcf5b3dd6',
        detection_1_ruleId: 'ur_c512c6b6-56fa-41d5-aeae-b01b2d52cfe8',
        detection_1_alertState: 'ALERTING',
        detection_1_ruleType: 'MULTI_EVENT',
        detection_1_detectionFields_1_key: 'service_account',
        detection_1_detectionFields_1_value:
          'sa-cron-vm@scce-lab-401713.iam.gserviceaccount.com',
        detection_1_detectionFields_1_source:
          'udm.principal.user.email_addresses',
        detection_1_ruleLabels_1_key: 'reference',
        detection_1_ruleLabels_1_value:
          'https://cloud.google.com/security-command-center/docs/how-to-investigate-threats#service_account_self-investigation',
        detection_1_ruleLabels_2_key: 'rule_name',
        detection_1_ruleLabels_2_value:
          'SCC: Discovery: Service Account Self-Investigation with Resource Creation',
        detection_1_outcomes_1_key: 'roles',
        detection_1_outcomes_1_value: 'roles/storage.objectAdmin',
        detection_1_outcomes_2_key: 'group_memberships',
        detection_1_outcomes_3_key: 'ip',
        detection_1_outcomes_3_source: 'udm.principal.ip',
        detection_1_outcomes_4_key: 'principal_email_address',
        detection_1_outcomes_4_value:
          'sa-cron-vm@scce-lab-401713.iam.gserviceaccount.com',
        detection_1_outcomes_4_source: 'udm.principal.user.email_addresses',
        detection_1_outcomes_5_key: 'risk_score',
        detection_1_outcomes_5_value: '90',
        detection_1_outcomes_6_key: 'vendor_name',
        detection_1_outcomes_6_value: 'Google',
        detection_1_outcomes_7_key: 'product_name',
        detection_1_outcomes_7_value: 'Security Command Center',
        detection_1_ruleSet: '92f84c0d-678c-c2ba-fd76-9baa399885a2',
        detection_1_ruleSetDisplayName:
          'CDIR SCC Enhanced Defense Discovery Alerts',
        detection_1_riskScore: '90',
        detection_1_rulesetCategoryDisplayName: 'Cloud Threats',
        createdTime: '2024-02-02T11:05:32.43988Z',
        lastUpdatedTime: '2024-02-02T11:05:32.43988Z',
        id: 'de_bd51e7b7-3370-44c0-c738-2f8bcf5b3dd6',
        timeWindow_startTime: '2024-02-02T09:36:00Z',
        timeWindow_endTime: '2024-02-02T10:06:00Z',
        detectionTime: '2024-02-02T10:06:00Z',
        tags_1: 'TA0007',
        tags_2: 'T1069.003',
        alert_type: 'RULE',
        event_type: 'RESOURCE_WRITTEN',
        event_category: 'RESOURCE',
        event_principal_user_emailAddresses:
          'terraform-sa@scce-lab-401713.iam.gserviceaccount.com',
        event_target_resource_attribute_labels_res_name:
          'projects/dummyProject/locations/europe-west2/functions/secret-function',
        event_target_resource_attribute_labels_res_type:
          'type.googleapis.com/google.cloud.functions.v2.Function',
        event_target_labels_response_description: 'playing with env variable',
        event_about_labels_type:
          'type.googleapis.com/google.cloud.audit.AuditLog',
        event_about_labels_operation_id:
          'projects/dummyProject/locations/europe-west2/operations/operation-1706868136924-6106334fad67c-d6dc5f69-f79fed46',
        event_about_labels_operation_last: 'true',
        event_about_labels_operation_producer: 'cloudfunctions.googleapis.com',
        event_securityResult_detectionFields_resource_name:
          'projects/dummyProject/locations/europe-west2/functions/secret-function',
        detection_detectionFields_service_account:
          'sa-cron-vm@scce-lab-401713.iam.gserviceaccount.com',
        detection_ruleLabels_reference:
          'https://cloud.google.com/security-command-center/docs/how-to-investigate-threats#service_account_self-investigation',
        detection_ruleLabels_rule_name:
          'SCC: Discovery: Service Account Self-Investigation with Resource Creation',
        detection_outcomes_roles: 'roles/storage.objectAdmin',
        detection_outcomes_principal_email_address:
          'sa-cron-vm@scce-lab-401713.iam.gserviceaccount.com',
        detection_outcomes_risk_score: '90',
        detection_outcomes_vendor_name: 'Google',
        detection_outcomes_product_name: 'Security Command Center',
      },
      Environment: null,
      SourceSystemName: null,
      Extensions: [],
    },
    {
      _fields: {
        BaseEventIds: [],
        ParentEventId: 0,
        DeviceVendor: 'Google Chronicle',
        DeviceProduct: 'RULE',
        DeviceEventClassId: 'RESOURCE_WRITTEN',
      },
      _rawDataFields: {
        event_metadata_productLogId: 'c7n29ucsw4',
        event_metadata_eventTimestamp: '2024-02-02T10:03:14.646357654Z',
        event_metadata_collectedTimestamp: '2024-02-02T10:03:15.547948770Z',
        event_metadata_eventType: 'RESOURCE_WRITTEN',
        event_metadata_vendorName: 'Google Cloud Platform',
        event_metadata_productName: 'Google Cloud Platform',
        event_metadata_productEventType:
          'google.cloud.functions.v2.FunctionService.UpdateFunction',
        event_metadata_urlBackToProduct:
          'projects/dummyProject/logs/cloudaudit.googleapis.com%2Factivity',
        event_metadata_ingestedTimestamp: '2024-02-02T10:03:16.142331Z',
        event_metadata_id: 'AAAAAE+jqJLOA0GrP0Kt1dAI+lEAAAAADgAAAAAAAAA=',
        event_metadata_logType: 'GCP_CLOUDAUDIT',
        event_metadata_baseLabels_logTypes_1: 'GCP_CLOUDAUDIT',
        event_metadata_baseLabels_allowScopedAccess: 'True',
        event_metadata_enrichmentLabels_logTypes_1: 'GCP_IAM_ANALYSIS',
        event_metadata_enrichmentLabels_logTypes_2: 'GCP_IAM_CONTEXT',
        event_metadata_enrichmentLabels_allowScopedAccess: 'True',
        event_additional_operation_last: 'true',
        event_additional_operation_producer: 'cloudfunctions.googleapis.com',
        event_additional_response_description: 'playing with env variable',
        event_additional_type:
          'type.googleapis.com/google.cloud.audit.AuditLog',
        event_additional_operation_id:
          'projects/dummyProject/locations/europe-west2/operations/operation-1706868136924-6106334fad67c-d6dc5f69-f79fed46',
        event_principal_user_userid:
          'terraform-sa@scce-lab-401713.iam.gserviceaccount.com',
        event_principal_user_userDisplayName:
          'A SA to run the vm that refresh threats and resources',
        event_principal_user_emailAddresses_1:
          'sa-cron-vm@scce-lab-401713.iam.gserviceaccount.com',
        event_principal_user_emailAddresses_2:
          'sa-cron-vm@scce-lab-401713.iam.gserviceaccount.com',
        event_principal_user_emailAddresses_3:
          'terraform-sa@scce-lab-401713.iam.gserviceaccount.com',
        event_principal_user_emailAddresses_4:
          'sa-cron-vm@scce-lab-401713.iam.gserviceaccount.com',
        event_principal_user_productObjectId: '100282268471516296206',
        event_principal_user_attribute_cloud_environment:
          'GOOGLE_CLOUD_PLATFORM',
        event_principal_user_attribute_roles_1_name:
          'roles/storage.objectAdmin',
        event_principal_user_attribute_roles_1_type: 'SERVICE_ACCOUNT',
        event_target_user_userid:
          'terraform-sa@scce-lab-401713.iam.gserviceaccount.com',
        event_target_application: 'cloudfunctions.googleapis.com',
        event_target_location_countryOrRegion: 'europe-west2',
        event_target_resource_name:
          'projects/dummyProject/locations/europe-west2/functions/secret-function',
        event_target_resource_resourceSubtype: 'cloud_function',
        event_target_cloud_project_name: 'scce-lab-401713',
        event_target_resourceAncestors_2_name: 'scce-lab-401713',
        event_target_resourceAncestors_2_resourceType: 'CLOUD_PROJECT',
        event_securityResult_1_categoryDetails_1:
          'projects/dummyProject/logs/cloudaudit.googleapis.com%2Factivity',
        event_securityResult_1_action_1: 'ALLOW',
        event_securityResult_1_severity: 'INFORMATIONAL',
        type: 'GCTI_FINDING',
        detection_1_ruleName:
          'SCC: Discovery: Service Account Self-Investigation with Resource Creation',
        detection_1_summary: 'Rule Detection',
        detection_1_description:
          'Detection of an IAM service account credential that is used to investigate the roles and permissions associated with that same service account',
        detection_1_severity: 'HIGH',
        detection_1_urlBackToProduct:
          'https://gglwl.backstory.chronicle.security/alert?alertId=de_bd51e7b7-3370-44c0-c738-2f8bcf5b3dd6',
        detection_1_ruleId: 'ur_c512c6b6-56fa-41d5-aeae-b01b2d52cfe8',
        detection_1_alertState: 'ALERTING',
        detection_1_ruleType: 'MULTI_EVENT',
        detection_1_detectionFields_1_key: 'service_account',
        detection_1_detectionFields_1_value:
          'sa-cron-vm@scce-lab-401713.iam.gserviceaccount.com',
        detection_1_detectionFields_1_source:
          'udm.principal.user.email_addresses',
        detection_1_ruleLabels_1_key: 'reference',
        detection_1_ruleLabels_1_value:
          'https://cloud.google.com/security-command-center/docs/how-to-investigate-threats#service_account_self-investigation',
        detection_1_ruleLabels_2_key: 'rule_name',
        detection_1_ruleLabels_2_value:
          'SCC: Discovery: Service Account Self-Investigation with Resource Creation',
        detection_1_outcomes_1_key: 'roles',
        detection_1_outcomes_1_value: 'roles/storage.objectAdmin',
        detection_1_outcomes_2_key: 'group_memberships',
        detection_1_outcomes_3_key: 'ip',
        detection_1_outcomes_3_source: 'udm.principal.ip',
        detection_1_outcomes_4_key: 'principal_email_address',
        detection_1_outcomes_4_value:
          'sa-cron-vm@scce-lab-401713.iam.gserviceaccount.com',
        detection_1_outcomes_4_source: 'udm.principal.user.email_addresses',
        detection_1_outcomes_5_key: 'risk_score',
        detection_1_outcomes_5_value: '90',
        detection_1_outcomes_6_key: 'vendor_name',
        detection_1_outcomes_6_value: 'Google',
        detection_1_outcomes_7_key: 'product_name',
        detection_1_outcomes_7_value: 'Security Command Center',
        detection_1_ruleSet: '92f84c0d-678c-c2ba-fd76-9baa399885a2',
        detection_1_ruleSetDisplayName:
          'CDIR SCC Enhanced Defense Discovery Alerts',
        detection_1_riskScore: '90',
        detection_1_rulesetCategoryDisplayName: 'Cloud Threats',
        createdTime: '2024-02-02T11:05:32.43988Z',
        lastUpdatedTime: '2024-02-02T11:05:32.43988Z',
        id: 'de_bd51e7b7-3370-44c0-c738-2f8bcf5b3dd6',
        timeWindow_startTime: '2024-02-02T09:36:00Z',
        timeWindow_endTime: '2024-02-02T10:06:00Z',
        detectionTime: '2024-02-02T10:06:00Z',
        tags_1: 'TA0007',
        tags_2: 'T1069.003',
        alert_type: 'RULE',
        event_type: 'RESOURCE_WRITTEN',
        event_category: 'RESOURCE',
        event_principal_user_emailAddresses:
          'sa-cron-vm@scce-lab-401713.iam.gserviceaccount.com',
        event_target_resource_attribute_labels_res_name:
          'projects/dummyProject/locations/europe-west2/functions/secret-function',
        event_target_resource_attribute_labels_res_type:
          'type.googleapis.com/google.cloud.functions.v2.Function',
        event_target_labels_response_description: 'playing with env variable',
        event_about_labels_type:
          'type.googleapis.com/google.cloud.audit.AuditLog',
        event_about_labels_operation_id:
          'projects/dummyProject/locations/europe-west2/operations/operation-1706868136924-6106334fad67c-d6dc5f69-f79fed46',
        event_about_labels_operation_last: 'true',
        event_about_labels_operation_producer: 'cloudfunctions.googleapis.com',
        event_securityResult_detectionFields_resource_name:
          'projects/dummyProject/locations/europe-west2/functions/secret-function',
        detection_detectionFields_service_account:
          'sa-cron-vm@scce-lab-401713.iam.gserviceaccount.com',
        detection_ruleLabels_reference:
          'https://cloud.google.com/security-command-center/docs/how-to-investigate-threats#service_account_self-investigation',
        detection_ruleLabels_rule_name:
          'SCC: Discovery: Service Account Self-Investigation with Resource Creation',
        detection_outcomes_roles: 'roles/storage.objectAdmin',
        detection_outcomes_principal_email_address:
          'sa-cron-vm@scce-lab-401713.iam.gserviceaccount.com',
        detection_outcomes_risk_score: '90',
        detection_outcomes_vendor_name: 'Google',
        detection_outcomes_product_name: 'Security Command Center',
      },
      Environment: null,
      SourceSystemName: null,
      Extensions: [],
    },
    {
      _fields: {
        BaseEventIds: [],
        ParentEventId: 0,
        DeviceVendor: 'Google Chronicle',
        DeviceProduct: 'RULE',
        DeviceEventClassId: 'USER_RESOURCE_UPDATE_CONTENT',
      },
      _rawDataFields: {
        event_metadata_productLogId: '13omlujd7lfb',
        event_metadata_eventTimestamp: '2024-02-02T10:03:52.631188Z',
        event_metadata_collectedTimestamp: '2024-02-02T10:03:53.045007654Z',
        event_metadata_eventType: 'USER_RESOURCE_UPDATE_CONTENT',
        event_metadata_vendorName: 'Google Cloud Platform',
        event_metadata_productName: 'Google Cloud Platform',
        event_metadata_productEventType:
          'google.api.serviceusage.v1.ServiceUsage.EnableService',
        event_metadata_urlBackToProduct:
          'projects/dummyProject/logs/cloudaudit.googleapis.com%2Factivity',
        event_metadata_ingestedTimestamp: '2024-02-02T10:03:54.052839Z',
        event_metadata_id: 'AAAAAB3mC9kFU71uQlidml/gwAQAAAAADgAAAAAAAAA=',
        event_metadata_logType: 'GCP_CLOUDAUDIT',
        event_metadata_baseLabels_logTypes_1: 'GCP_CLOUDAUDIT',
        event_metadata_baseLabels_allowScopedAccess: 'True',
        event_metadata_enrichmentLabels_logTypes_1: 'GCP_IAM_ANALYSIS',
        event_metadata_enrichmentLabels_logTypes_2: 'GCP_IAM_CONTEXT',
        event_metadata_enrichmentLabels_allowScopedAccess: 'True',
        'event_additional_requestMetadata.callerNetwork_1':
          'Request originated from a GCE VM or an on-prem VM behind a VPN, and the log was enhanced with additional information : REPLACED',
        event_additional_type:
          'type.googleapis.com/google.cloud.audit.AuditLog',
        event_additional_caller_network:
          '//compute.googleapis.com/projects/dummyProject/global/networks/__unknown__',
        event_additional_operation_first: 'true',
        event_additional_operation_id: 'operations/noop.DONE_OPERATION',
        event_additional_operation_last: 'true',
        event_additional_operation_producer: 'serviceusage.googleapis.com',
        'event_additional_requestMetadata.callerIp_0':
          'Request came from a GCE VM in the same organization. : REPLACED',
        event_principal_hostname: '10.1.0.8',
        event_principal_user_userid:
          'terraform-sa@scce-lab-401713.iam.gserviceaccount.com',
        event_principal_user_userDisplayName: 'Terraform Service account',
        event_principal_user_emailAddresses_1:
          'terraform-sa@scce-lab-401713.iam.gserviceaccount.com',
        event_principal_user_emailAddresses_2:
          'terraform-sa@scce-lab-401713.iam.gserviceaccount.com',
        event_principal_user_emailAddresses_3:
          'terraform-sa@scce-lab-401713.iam.gserviceaccount.com',
        event_principal_user_emailAddresses_4:
          'sa-cron-vm@scce-lab-401713.iam.gserviceaccount.com',
        event_principal_user_productObjectId: '109464150361893883794',
        event_principal_user_attribute_cloud_environment:
          'GOOGLE_CLOUD_PLATFORM',
        event_principal_user_attribute_roles_1_name:
          'roles/resourcemanager.organizationAdmin',
        event_principal_user_attribute_roles_1_type: 'SERVICE_ACCOUNT',
        event_principal_user_attribute_permissions_1_name:
          'serviceusage.services.enable',
        event_principal_user_attribute_permissions_1_type: 'ADMIN_WRITE',
        event_principal_user_attribute_permissions_2_name:
          'serviceusage.services.enable',
        event_principal_user_attribute_permissions_3_name:
          'servicemanagement.services.bind',
        event_principal_ip_1: '10.1.0.8',
        event_principal_asset_hostname: '10.1.0.8',
        event_target_user_userid:
          'terraform-sa@scce-lab-401713.iam.gserviceaccount.com',
        event_target_application: 'serviceusage.googleapis.com',
        event_target_resource_name:
          'projects/dummyProject/services/secretmanager.googleapis.com',
        event_target_resource_resourceType: 'BACKEND_SERVICE',
        event_target_resource_resourceSubtype: 'audited_resource',
        event_target_cloud_project_name: 'scce-lab-401713',
        event_target_resourceAncestors_2_name: 'scce-lab-401713',
        event_target_resourceAncestors_2_resourceType: 'CLOUD_PROJECT',
        event_securityResult_1_categoryDetails_1:
          'projects/dummyProject/logs/cloudaudit.googleapis.com%2Factivity',
        event_securityResult_1_action_1: 'ALLOW',
        event_securityResult_1_severity: 'INFORMATIONAL',
        event_network_http_userAgent:
          'google-cloud-sdk gcloud/462.0.1 command/gcloud.services.enable invocation-id/64e61f3478074a06b5874675e5775d22 environment/GCE environment-version/None client-os/LINUX client-os-ver/5.10.0 client-pltf-arch/x86_64 interactive/True from-script/False python/3.11.7 term/xterm-256color (Linux 5.10.0-26-cloud-amd64),gzip(gfe)',
        event_network_http_parsedUserAgent_family: 'USER_DEFINED',
        type: 'GCTI_FINDING',
        detection_1_ruleName:
          'SCC: Discovery: Service Account Self-Investigation with Resource Creation',
        detection_1_summary: 'Rule Detection',
        detection_1_description:
          'Detection of an IAM service account credential that is used to investigate the roles and permissions associated with that same service account',
        detection_1_severity: 'HIGH',
        detection_1_urlBackToProduct:
          'https://gglwl.backstory.chronicle.security/alert?alertId=de_bd51e7b7-3370-44c0-c738-2f8bcf5b3dd6',
        detection_1_ruleId: 'ur_c512c6b6-56fa-41d5-aeae-b01b2d52cfe8',
        detection_1_alertState: 'ALERTING',
        detection_1_ruleType: 'MULTI_EVENT',
        detection_1_detectionFields_1_key: 'service_account',
        detection_1_detectionFields_1_value:
          'sa-cron-vm@scce-lab-401713.iam.gserviceaccount.com',
        detection_1_detectionFields_1_source:
          'udm.principal.user.email_addresses',
        detection_1_ruleLabels_1_key: 'reference',
        detection_1_ruleLabels_1_value:
          'https://cloud.google.com/security-command-center/docs/how-to-investigate-threats#service_account_self-investigation',
        detection_1_ruleLabels_2_key: 'rule_name',
        detection_1_ruleLabels_2_value:
          'SCC: Discovery: Service Account Self-Investigation with Resource Creation',
        detection_1_outcomes_1_key: 'roles',
        detection_1_outcomes_1_value: 'roles/storage.objectAdmin',
        detection_1_outcomes_2_key: 'group_memberships',
        detection_1_outcomes_3_key: 'ip',
        detection_1_outcomes_3_source: 'udm.principal.ip',
        detection_1_outcomes_4_key: 'principal_email_address',
        detection_1_outcomes_4_value:
          'sa-cron-vm@scce-lab-401713.iam.gserviceaccount.com',
        detection_1_outcomes_4_source: 'udm.principal.user.email_addresses',
        detection_1_outcomes_5_key: 'risk_score',
        detection_1_outcomes_5_value: '90',
        detection_1_outcomes_6_key: 'vendor_name',
        detection_1_outcomes_6_value: 'Google',
        detection_1_outcomes_7_key: 'product_name',
        detection_1_outcomes_7_value: 'Security Command Center',
        detection_1_ruleSet: '92f84c0d-678c-c2ba-fd76-9baa399885a2',
        detection_1_ruleSetDisplayName:
          'CDIR SCC Enhanced Defense Discovery Alerts',
        detection_1_riskScore: '90',
        detection_1_rulesetCategoryDisplayName: 'Cloud Threats',
        createdTime: '2024-02-02T11:05:32.43988Z',
        lastUpdatedTime: '2024-02-02T11:05:32.43988Z',
        id: 'de_bd51e7b7-3370-44c0-c738-2f8bcf5b3dd6',
        timeWindow_startTime: '2024-02-02T09:36:00Z',
        timeWindow_endTime: '2024-02-02T10:06:00Z',
        detectionTime: '2024-02-02T10:06:00Z',
        tags_1: 'TA0007',
        tags_2: 'T1069.003',
        alert_type: 'RULE',
        event_type: 'USER_RESOURCE_UPDATE_CONTENT',
        event_category: 'USER',
        event_principal_ip: '10.1.0.8',
        event_principal_user_emailAddresses:
          'terraform-sa@scce-lab-401713.iam.gserviceaccount.com',
        event_principal_user_attribute_labels_authorization_granted:
          'true, true, true',
        'event_principal_labels_requestMetadata.callerIp':
          'Request came from a GCE VM in the same organization. : REPLACED',
        'event_principal_labels_requestMetadata.callerNetwork':
          'Request originated from a GCE VM or an on-prem VM behind a VPN, and the log was enhanced with additional information : REPLACED',
        event_target_resource_attribute_labels_rc_service:
          'serviceusage.googleapis.com',
        event_target_resource_attribute_labels_request_type:
          'type.googleapis.com/google.api.serviceusage.v1.EnableServiceRequest',
        event_target_resource_attribute_labels_req_name:
          'projects/dummyProject/services/secretmanager.googleapis.com',
        event_target_resource_attribute_labels_rc_method:
          'google.api.serviceusage.v1.ServiceUsage.EnableService',
        event_target_resource_attribute_labels_res_type:
          'type.googleapis.com/google.api.serviceusage.v1.EnableServiceResponse',
        event_about_labels_type:
          'type.googleapis.com/google.cloud.audit.AuditLog',
        event_about_labels_operation_first: 'true',
        event_about_labels_operation_id: 'operations/noop.DONE_OPERATION',
        event_about_labels_operation_last: 'true',
        event_about_labels_operation_producer: 'serviceusage.googleapis.com',
        event_about_labels_caller_network:
          '//compute.googleapis.com/projects/dummyProject/global/networks/__unknown__',
        event_securityResult_detectionFields_resource_name:
          'projects/dummyProject/services/secretmanager.googleapis.com',
        event_securityResult_detectionFields_resource:
          'services/secretmanager.googleapis.com, projectnumbers/429213313266/services/secretmanager.googleapis.com, projectnumbers/429213313266/services/secretmanager.googleapis.com',
        detection_detectionFields_service_account:
          'sa-cron-vm@scce-lab-401713.iam.gserviceaccount.com',
        detection_ruleLabels_reference:
          'https://cloud.google.com/security-command-center/docs/how-to-investigate-threats#service_account_self-investigation',
        detection_ruleLabels_rule_name:
          'SCC: Discovery: Service Account Self-Investigation with Resource Creation',
        detection_outcomes_roles: 'roles/storage.objectAdmin',
        detection_outcomes_principal_email_address:
          'sa-cron-vm@scce-lab-401713.iam.gserviceaccount.com',
        detection_outcomes_risk_score: '90',
        detection_outcomes_vendor_name: 'Google',
        detection_outcomes_product_name: 'Security Command Center',
      },
      Environment: null,
      SourceSystemName: null,
      Extensions: [],
    },
    {
      _fields: {
        BaseEventIds: [],
        ParentEventId: 0,
        DeviceVendor: 'Google Chronicle',
        DeviceProduct: 'RULE',
        DeviceEventClassId: 'USER_RESOURCE_UPDATE_CONTENT',
      },
      _rawDataFields: {
        event_metadata_productLogId: '13omlujd7lfb',
        event_metadata_eventTimestamp: '2024-02-02T10:03:52.631188Z',
        event_metadata_collectedTimestamp: '2024-02-02T10:03:53.045007654Z',
        event_metadata_eventType: 'USER_RESOURCE_UPDATE_CONTENT',
        event_metadata_vendorName: 'Google Cloud Platform',
        event_metadata_productName: 'Google Cloud Platform',
        event_metadata_productEventType:
          'google.api.serviceusage.v1.ServiceUsage.EnableService',
        event_metadata_urlBackToProduct:
          'projects/dummyProject/logs/cloudaudit.googleapis.com%2Factivity',
        event_metadata_ingestedTimestamp: '2024-02-02T10:03:54.052839Z',
        event_metadata_id: 'AAAAAB3mC9kFU71uQlidml/gwAQAAAAADgAAAAAAAAA=',
        event_metadata_logType: 'GCP_CLOUDAUDIT',
        event_metadata_baseLabels_logTypes_1: 'GCP_CLOUDAUDIT',
        event_metadata_baseLabels_allowScopedAccess: 'True',
        event_metadata_enrichmentLabels_logTypes_1: 'GCP_IAM_ANALYSIS',
        event_metadata_enrichmentLabels_logTypes_2: 'GCP_IAM_CONTEXT',
        event_metadata_enrichmentLabels_allowScopedAccess: 'True',
        'event_additional_requestMetadata.callerNetwork_1':
          'Request originated from a GCE VM or an on-prem VM behind a VPN, and the log was enhanced with additional information : REPLACED',
        event_additional_type:
          'type.googleapis.com/google.cloud.audit.AuditLog',
        event_additional_caller_network:
          '//compute.googleapis.com/projects/dummyProject/global/networks/__unknown__',
        event_additional_operation_first: 'true',
        event_additional_operation_id: 'operations/noop.DONE_OPERATION',
        event_additional_operation_last: 'true',
        event_additional_operation_producer: 'serviceusage.googleapis.com',
        'event_additional_requestMetadata.callerIp_0':
          'Request came from a GCE VM in the same organization. : REPLACED',
        event_principal_hostname: '10.1.0.8',
        event_principal_user_userid:
          'terraform-sa@scce-lab-401713.iam.gserviceaccount.com',
        event_principal_user_userDisplayName: 'Terraform Service account',
        event_principal_user_emailAddresses_1:
          'terraform-sa@scce-lab-401713.iam.gserviceaccount.com',
        event_principal_user_emailAddresses_2:
          'terraform-sa@scce-lab-401713.iam.gserviceaccount.com',
        event_principal_user_emailAddresses_3:
          'terraform-sa@scce-lab-401713.iam.gserviceaccount.com',
        event_principal_user_emailAddresses_4:
          'sa-cron-vm@scce-lab-401713.iam.gserviceaccount.com',
        event_principal_user_productObjectId: '109464150361893883794',
        event_principal_user_attribute_cloud_environment:
          'GOOGLE_CLOUD_PLATFORM',
        event_principal_user_attribute_roles_1_name:
          'roles/resourcemanager.organizationAdmin',
        event_principal_user_attribute_roles_1_type: 'SERVICE_ACCOUNT',
        event_principal_user_attribute_permissions_1_name:
          'serviceusage.services.enable',
        event_principal_user_attribute_permissions_1_type: 'ADMIN_WRITE',
        event_principal_user_attribute_permissions_2_name:
          'serviceusage.services.enable',
        event_principal_user_attribute_permissions_3_name:
          'servicemanagement.services.bind',
        event_principal_ip_1: '10.1.0.8',
        event_principal_asset_hostname: '10.1.0.8',
        event_target_user_userid:
          'terraform-sa@scce-lab-401713.iam.gserviceaccount.com',
        event_target_application: 'serviceusage.googleapis.com',
        event_target_resource_name:
          'projects/dummyProject/services/secretmanager.googleapis.com',
        event_target_resource_resourceType: 'BACKEND_SERVICE',
        event_target_resource_resourceSubtype: 'audited_resource',
        event_target_cloud_project_name: 'scce-lab-401713',
        event_target_resourceAncestors_2_name: 'scce-lab-401713',
        event_target_resourceAncestors_2_resourceType: 'CLOUD_PROJECT',
        event_securityResult_1_categoryDetails_1:
          'projects/dummyProject/logs/cloudaudit.googleapis.com%2Factivity',
        event_securityResult_1_action_1: 'ALLOW',
        event_securityResult_1_severity: 'INFORMATIONAL',
        event_network_http_userAgent:
          'google-cloud-sdk gcloud/462.0.1 command/gcloud.services.enable invocation-id/64e61f3478074a06b5874675e5775d22 environment/GCE environment-version/None client-os/LINUX client-os-ver/5.10.0 client-pltf-arch/x86_64 interactive/True from-script/False python/3.11.7 term/xterm-256color (Linux 5.10.0-26-cloud-amd64),gzip(gfe)',
        event_network_http_parsedUserAgent_family: 'USER_DEFINED',
        type: 'GCTI_FINDING',
        detection_1_ruleName:
          'SCC: Discovery: Service Account Self-Investigation with Resource Creation',
        detection_1_summary: 'Rule Detection',
        detection_1_description:
          'Detection of an IAM service account credential that is used to investigate the roles and permissions associated with that same service account',
        detection_1_severity: 'HIGH',
        detection_1_urlBackToProduct:
          'https://gglwl.backstory.chronicle.security/alert?alertId=de_bd51e7b7-3370-44c0-c738-2f8bcf5b3dd6',
        detection_1_ruleId: 'ur_c512c6b6-56fa-41d5-aeae-b01b2d52cfe8',
        detection_1_alertState: 'ALERTING',
        detection_1_ruleType: 'MULTI_EVENT',
        detection_1_detectionFields_1_key: 'service_account',
        detection_1_detectionFields_1_value:
          'sa-cron-vm@scce-lab-401713.iam.gserviceaccount.com',
        detection_1_detectionFields_1_source:
          'udm.principal.user.email_addresses',
        detection_1_ruleLabels_1_key: 'reference',
        detection_1_ruleLabels_1_value:
          'https://cloud.google.com/security-command-center/docs/how-to-investigate-threats#service_account_self-investigation',
        detection_1_ruleLabels_2_key: 'rule_name',
        detection_1_ruleLabels_2_value:
          'SCC: Discovery: Service Account Self-Investigation with Resource Creation',
        detection_1_outcomes_1_key: 'roles',
        detection_1_outcomes_1_value: 'roles/storage.objectAdmin',
        detection_1_outcomes_2_key: 'group_memberships',
        detection_1_outcomes_3_key: 'ip',
        detection_1_outcomes_3_source: 'udm.principal.ip',
        detection_1_outcomes_4_key: 'principal_email_address',
        detection_1_outcomes_4_value:
          'sa-cron-vm@scce-lab-401713.iam.gserviceaccount.com',
        detection_1_outcomes_4_source: 'udm.principal.user.email_addresses',
        detection_1_outcomes_5_key: 'risk_score',
        detection_1_outcomes_5_value: '90',
        detection_1_outcomes_6_key: 'vendor_name',
        detection_1_outcomes_6_value: 'Google',
        detection_1_outcomes_7_key: 'product_name',
        detection_1_outcomes_7_value: 'Security Command Center',
        detection_1_ruleSet: '92f84c0d-678c-c2ba-fd76-9baa399885a2',
        detection_1_ruleSetDisplayName:
          'CDIR SCC Enhanced Defense Discovery Alerts',
        detection_1_riskScore: '90',
        detection_1_rulesetCategoryDisplayName: 'Cloud Threats',
        createdTime: '2024-02-02T11:05:32.43988Z',
        lastUpdatedTime: '2024-02-02T11:05:32.43988Z',
        id: 'de_bd51e7b7-3370-44c0-c738-2f8bcf5b3dd6',
        timeWindow_startTime: '2024-02-02T09:36:00Z',
        timeWindow_endTime: '2024-02-02T10:06:00Z',
        detectionTime: '2024-02-02T10:06:00Z',
        tags_1: 'TA0007',
        tags_2: 'T1069.003',
        alert_type: 'RULE',
        event_type: 'USER_RESOURCE_UPDATE_CONTENT',
        event_category: 'USER',
        event_principal_ip: '',
        event_principal_user_emailAddresses:
          'terraform-sa@scce-lab-401713.iam.gserviceaccount.com',
        event_principal_user_attribute_labels_authorization_granted:
          'true, true, true',
        'event_principal_labels_requestMetadata.callerIp':
          'Request came from a GCE VM in the same organization. : REPLACED',
        'event_principal_labels_requestMetadata.callerNetwork':
          'Request originated from a GCE VM or an on-prem VM behind a VPN, and the log was enhanced with additional information : REPLACED',
        event_target_resource_attribute_labels_rc_service:
          'serviceusage.googleapis.com',
        event_target_resource_attribute_labels_request_type:
          'type.googleapis.com/google.api.serviceusage.v1.EnableServiceRequest',
        event_target_resource_attribute_labels_req_name:
          'projects/dummyProject/services/secretmanager.googleapis.com',
        event_target_resource_attribute_labels_rc_method:
          'google.api.serviceusage.v1.ServiceUsage.EnableService',
        event_target_resource_attribute_labels_res_type:
          'type.googleapis.com/google.api.serviceusage.v1.EnableServiceResponse',
        event_about_labels_type:
          'type.googleapis.com/google.cloud.audit.AuditLog',
        event_about_labels_operation_first: 'true',
        event_about_labels_operation_id: 'operations/noop.DONE_OPERATION',
        event_about_labels_operation_last: 'true',
        event_about_labels_operation_producer: 'serviceusage.googleapis.com',
        event_about_labels_caller_network:
          '//compute.googleapis.com/projects/dummyProject/global/networks/__unknown__',
        event_securityResult_detectionFields_resource_name:
          'projects/dummyProject/services/secretmanager.googleapis.com',
        event_securityResult_detectionFields_resource:
          'services/secretmanager.googleapis.com, projectnumbers/429213313266/services/secretmanager.googleapis.com, projectnumbers/429213313266/services/secretmanager.googleapis.com',
        detection_detectionFields_service_account:
          'sa-cron-vm@scce-lab-401713.iam.gserviceaccount.com',
        detection_ruleLabels_reference:
          'https://cloud.google.com/security-command-center/docs/how-to-investigate-threats#service_account_self-investigation',
        detection_ruleLabels_rule_name:
          'SCC: Discovery: Service Account Self-Investigation with Resource Creation',
        detection_outcomes_roles: 'roles/storage.objectAdmin',
        detection_outcomes_principal_email_address:
          'sa-cron-vm@scce-lab-401713.iam.gserviceaccount.com',
        detection_outcomes_risk_score: '90',
        detection_outcomes_vendor_name: 'Google',
        detection_outcomes_product_name: 'Security Command Center',
      },
      Environment: null,
      SourceSystemName: null,
      Extensions: [],
    },
    {
      _fields: {
        BaseEventIds: [],
        ParentEventId: 0,
        DeviceVendor: 'Google Chronicle',
        DeviceProduct: 'RULE',
        DeviceEventClassId: 'USER_RESOURCE_UPDATE_CONTENT',
      },
      _rawDataFields: {
        event_metadata_productLogId: '13omlujd7lfb',
        event_metadata_eventTimestamp: '2024-02-02T10:03:52.631188Z',
        event_metadata_collectedTimestamp: '2024-02-02T10:03:53.045007654Z',
        event_metadata_eventType: 'USER_RESOURCE_UPDATE_CONTENT',
        event_metadata_vendorName: 'Google Cloud Platform',
        event_metadata_productName: 'Google Cloud Platform',
        event_metadata_productEventType:
          'google.api.serviceusage.v1.ServiceUsage.EnableService',
        event_metadata_urlBackToProduct:
          'projects/dummyProject/logs/cloudaudit.googleapis.com%2Factivity',
        event_metadata_ingestedTimestamp: '2024-02-02T10:03:54.052839Z',
        event_metadata_id: 'AAAAAB3mC9kFU71uQlidml/gwAQAAAAADgAAAAAAAAA=',
        event_metadata_logType: 'GCP_CLOUDAUDIT',
        event_metadata_baseLabels_logTypes_1: 'GCP_CLOUDAUDIT',
        event_metadata_baseLabels_allowScopedAccess: 'True',
        event_metadata_enrichmentLabels_logTypes_1: 'GCP_IAM_ANALYSIS',
        event_metadata_enrichmentLabels_logTypes_2: 'GCP_IAM_CONTEXT',
        event_metadata_enrichmentLabels_allowScopedAccess: 'True',
        'event_additional_requestMetadata.callerNetwork_1':
          'Request originated from a GCE VM or an on-prem VM behind a VPN, and the log was enhanced with additional information : REPLACED',
        event_additional_type:
          'type.googleapis.com/google.cloud.audit.AuditLog',
        event_additional_caller_network:
          '//compute.googleapis.com/projects/dummyProject/global/networks/__unknown__',
        event_additional_operation_first: 'true',
        event_additional_operation_id: 'operations/noop.DONE_OPERATION',
        event_additional_operation_last: 'true',
        event_additional_operation_producer: 'serviceusage.googleapis.com',
        'event_additional_requestMetadata.callerIp_0':
          'Request came from a GCE VM in the same organization. : REPLACED',
        event_principal_hostname: '10.1.0.8',
        event_principal_user_userid:
          'terraform-sa@scce-lab-401713.iam.gserviceaccount.com',
        event_principal_user_userDisplayName: 'Terraform Service account',
        event_principal_user_emailAddresses_1:
          'terraform-sa@scce-lab-401713.iam.gserviceaccount.com',
        event_principal_user_emailAddresses_2:
          'terraform-sa@scce-lab-401713.iam.gserviceaccount.com',
        event_principal_user_emailAddresses_3:
          'terraform-sa@scce-lab-401713.iam.gserviceaccount.com',
        event_principal_user_emailAddresses_4:
          'sa-cron-vm@scce-lab-401713.iam.gserviceaccount.com',
        event_principal_user_productObjectId: '109464150361893883794',
        event_principal_user_attribute_cloud_environment:
          'GOOGLE_CLOUD_PLATFORM',
        event_principal_user_attribute_roles_1_name:
          'roles/resourcemanager.organizationAdmin',
        event_principal_user_attribute_roles_1_type: 'SERVICE_ACCOUNT',
        event_principal_user_attribute_permissions_1_name:
          'serviceusage.services.enable',
        event_principal_user_attribute_permissions_1_type: 'ADMIN_WRITE',
        event_principal_user_attribute_permissions_2_name:
          'serviceusage.services.enable',
        event_principal_user_attribute_permissions_3_name:
          'servicemanagement.services.bind',
        event_principal_ip_1: '10.1.0.8',
        event_principal_asset_hostname: '10.1.0.8',
        event_target_user_userid:
          'terraform-sa@scce-lab-401713.iam.gserviceaccount.com',
        event_target_application: 'serviceusage.googleapis.com',
        event_target_resource_name:
          'projects/dummyProject/services/secretmanager.googleapis.com',
        event_target_resource_resourceType: 'BACKEND_SERVICE',
        event_target_resource_resourceSubtype: 'audited_resource',
        event_target_cloud_project_name: 'scce-lab-401713',
        event_target_resourceAncestors_2_name: 'scce-lab-401713',
        event_target_resourceAncestors_2_resourceType: 'CLOUD_PROJECT',
        event_securityResult_1_categoryDetails_1:
          'projects/dummyProject/logs/cloudaudit.googleapis.com%2Factivity',
        event_securityResult_1_action_1: 'ALLOW',
        event_securityResult_1_severity: 'INFORMATIONAL',
        event_network_http_userAgent:
          'google-cloud-sdk gcloud/462.0.1 command/gcloud.services.enable invocation-id/64e61f3478074a06b5874675e5775d22 environment/GCE environment-version/None client-os/LINUX client-os-ver/5.10.0 client-pltf-arch/x86_64 interactive/True from-script/False python/3.11.7 term/xterm-256color (Linux 5.10.0-26-cloud-amd64),gzip(gfe)',
        event_network_http_parsedUserAgent_family: 'USER_DEFINED',
        type: 'GCTI_FINDING',
        detection_1_ruleName:
          'SCC: Discovery: Service Account Self-Investigation with Resource Creation',
        detection_1_summary: 'Rule Detection',
        detection_1_description:
          'Detection of an IAM service account credential that is used to investigate the roles and permissions associated with that same service account',
        detection_1_severity: 'HIGH',
        detection_1_urlBackToProduct:
          'https://gglwl.backstory.chronicle.security/alert?alertId=de_bd51e7b7-3370-44c0-c738-2f8bcf5b3dd6',
        detection_1_ruleId: 'ur_c512c6b6-56fa-41d5-aeae-b01b2d52cfe8',
        detection_1_alertState: 'ALERTING',
        detection_1_ruleType: 'MULTI_EVENT',
        detection_1_detectionFields_1_key: 'service_account',
        detection_1_detectionFields_1_value:
          'sa-cron-vm@scce-lab-401713.iam.gserviceaccount.com',
        detection_1_detectionFields_1_source:
          'udm.principal.user.email_addresses',
        detection_1_ruleLabels_1_key: 'reference',
        detection_1_ruleLabels_1_value:
          'https://cloud.google.com/security-command-center/docs/how-to-investigate-threats#service_account_self-investigation',
        detection_1_ruleLabels_2_key: 'rule_name',
        detection_1_ruleLabels_2_value:
          'SCC: Discovery: Service Account Self-Investigation with Resource Creation',
        detection_1_outcomes_1_key: 'roles',
        detection_1_outcomes_1_value: 'roles/storage.objectAdmin',
        detection_1_outcomes_2_key: 'group_memberships',
        detection_1_outcomes_3_key: 'ip',
        detection_1_outcomes_3_source: 'udm.principal.ip',
        detection_1_outcomes_4_key: 'principal_email_address',
        detection_1_outcomes_4_value:
          'sa-cron-vm@scce-lab-401713.iam.gserviceaccount.com',
        detection_1_outcomes_4_source: 'udm.principal.user.email_addresses',
        detection_1_outcomes_5_key: 'risk_score',
        detection_1_outcomes_5_value: '90',
        detection_1_outcomes_6_key: 'vendor_name',
        detection_1_outcomes_6_value: 'Google',
        detection_1_outcomes_7_key: 'product_name',
        detection_1_outcomes_7_value: 'Security Command Center',
        detection_1_ruleSet: '92f84c0d-678c-c2ba-fd76-9baa399885a2',
        detection_1_ruleSetDisplayName:
          'CDIR SCC Enhanced Defense Discovery Alerts',
        detection_1_riskScore: '90',
        detection_1_rulesetCategoryDisplayName: 'Cloud Threats',
        createdTime: '2024-02-02T11:05:32.43988Z',
        lastUpdatedTime: '2024-02-02T11:05:32.43988Z',
        id: 'de_bd51e7b7-3370-44c0-c738-2f8bcf5b3dd6',
        timeWindow_startTime: '2024-02-02T09:36:00Z',
        timeWindow_endTime: '2024-02-02T10:06:00Z',
        detectionTime: '2024-02-02T10:06:00Z',
        tags_1: 'TA0007',
        tags_2: 'T1069.003',
        alert_type: 'RULE',
        event_type: 'USER_RESOURCE_UPDATE_CONTENT',
        event_category: 'USER',
        event_principal_ip: '',
        event_principal_user_emailAddresses:
          'terraform-sa@scce-lab-401713.iam.gserviceaccount.com',
        event_principal_user_attribute_labels_authorization_granted:
          'true, true, true',
        'event_principal_labels_requestMetadata.callerIp':
          'Request came from a GCE VM in the same organization. : REPLACED',
        'event_principal_labels_requestMetadata.callerNetwork':
          'Request originated from a GCE VM or an on-prem VM behind a VPN, and the log was enhanced with additional information : REPLACED',
        event_target_resource_attribute_labels_rc_service:
          'serviceusage.googleapis.com',
        event_target_resource_attribute_labels_request_type:
          'type.googleapis.com/google.api.serviceusage.v1.EnableServiceRequest',
        event_target_resource_attribute_labels_req_name:
          'projects/dummyProject/services/secretmanager.googleapis.com',
        event_target_resource_attribute_labels_rc_method:
          'google.api.serviceusage.v1.ServiceUsage.EnableService',
        event_target_resource_attribute_labels_res_type:
          'type.googleapis.com/google.api.serviceusage.v1.EnableServiceResponse',
        event_about_labels_type:
          'type.googleapis.com/google.cloud.audit.AuditLog',
        event_about_labels_operation_first: 'true',
        event_about_labels_operation_id: 'operations/noop.DONE_OPERATION',
        event_about_labels_operation_last: 'true',
        event_about_labels_operation_producer: 'serviceusage.googleapis.com',
        event_about_labels_caller_network:
          '//compute.googleapis.com/projects/dummyProject/global/networks/__unknown__',
        event_securityResult_detectionFields_resource_name:
          'projects/dummyProject/services/secretmanager.googleapis.com',
        event_securityResult_detectionFields_resource:
          'services/secretmanager.googleapis.com, projectnumbers/429213313266/services/secretmanager.googleapis.com, projectnumbers/429213313266/services/secretmanager.googleapis.com',
        detection_detectionFields_service_account:
          'sa-cron-vm@scce-lab-401713.iam.gserviceaccount.com',
        detection_ruleLabels_reference:
          'https://cloud.google.com/security-command-center/docs/how-to-investigate-threats#service_account_self-investigation',
        detection_ruleLabels_rule_name:
          'SCC: Discovery: Service Account Self-Investigation with Resource Creation',
        detection_outcomes_roles: 'roles/storage.objectAdmin',
        detection_outcomes_principal_email_address:
          'sa-cron-vm@scce-lab-401713.iam.gserviceaccount.com',
        detection_outcomes_risk_score: '90',
        detection_outcomes_vendor_name: 'Google',
        detection_outcomes_product_name: 'Security Command Center',
      },
      Environment: null,
      SourceSystemName: null,
      Extensions: [],
    },
    {
      _fields: {
        BaseEventIds: [],
        ParentEventId: 0,
        DeviceVendor: 'Google Chronicle',
        DeviceProduct: 'RULE',
        DeviceEventClassId: 'USER_RESOURCE_UPDATE_CONTENT',
      },
      _rawDataFields: {
        event_metadata_productLogId: '13omlujd7lfb',
        event_metadata_eventTimestamp: '2024-02-02T10:03:52.631188Z',
        event_metadata_collectedTimestamp: '2024-02-02T10:03:53.045007654Z',
        event_metadata_eventType: 'USER_RESOURCE_UPDATE_CONTENT',
        event_metadata_vendorName: 'Google Cloud Platform',
        event_metadata_productName: 'Google Cloud Platform',
        event_metadata_productEventType:
          'google.api.serviceusage.v1.ServiceUsage.EnableService',
        event_metadata_urlBackToProduct:
          'projects/dummyProject/logs/cloudaudit.googleapis.com%2Factivity',
        event_metadata_ingestedTimestamp: '2024-02-02T10:03:54.052839Z',
        event_metadata_id: 'AAAAAB3mC9kFU71uQlidml/gwAQAAAAADgAAAAAAAAA=',
        event_metadata_logType: 'GCP_CLOUDAUDIT',
        event_metadata_baseLabels_logTypes_1: 'GCP_CLOUDAUDIT',
        event_metadata_baseLabels_allowScopedAccess: 'True',
        event_metadata_enrichmentLabels_logTypes_1: 'GCP_IAM_ANALYSIS',
        event_metadata_enrichmentLabels_logTypes_2: 'GCP_IAM_CONTEXT',
        event_metadata_enrichmentLabels_allowScopedAccess: 'True',
        'event_additional_requestMetadata.callerNetwork_1':
          'Request originated from a GCE VM or an on-prem VM behind a VPN, and the log was enhanced with additional information : REPLACED',
        event_additional_type:
          'type.googleapis.com/google.cloud.audit.AuditLog',
        event_additional_caller_network:
          '//compute.googleapis.com/projects/dummyProject/global/networks/__unknown__',
        event_additional_operation_first: 'true',
        event_additional_operation_id: 'operations/noop.DONE_OPERATION',
        event_additional_operation_last: 'true',
        event_additional_operation_producer: 'serviceusage.googleapis.com',
        'event_additional_requestMetadata.callerIp_0':
          'Request came from a GCE VM in the same organization. : REPLACED',
        event_principal_hostname: '10.1.0.8',
        event_principal_user_userid:
          'terraform-sa@scce-lab-401713.iam.gserviceaccount.com',
        event_principal_user_userDisplayName: 'Terraform Service account',
        event_principal_user_emailAddresses_1:
          'terraform-sa@scce-lab-401713.iam.gserviceaccount.com',
        event_principal_user_emailAddresses_2:
          'terraform-sa@scce-lab-401713.iam.gserviceaccount.com',
        event_principal_user_emailAddresses_3:
          'terraform-sa@scce-lab-401713.iam.gserviceaccount.com',
        event_principal_user_emailAddresses_4:
          'sa-cron-vm@scce-lab-401713.iam.gserviceaccount.com',
        event_principal_user_productObjectId: '109464150361893883794',
        event_principal_user_attribute_cloud_environment:
          'GOOGLE_CLOUD_PLATFORM',
        event_principal_user_attribute_roles_1_name:
          'roles/resourcemanager.organizationAdmin',
        event_principal_user_attribute_roles_1_type: 'SERVICE_ACCOUNT',
        event_principal_user_attribute_permissions_1_name:
          'serviceusage.services.enable',
        event_principal_user_attribute_permissions_1_type: 'ADMIN_WRITE',
        event_principal_user_attribute_permissions_2_name:
          'serviceusage.services.enable',
        event_principal_user_attribute_permissions_3_name:
          'servicemanagement.services.bind',
        event_principal_ip_1: '10.1.0.8',
        event_principal_asset_hostname: '10.1.0.8',
        event_target_user_userid:
          'terraform-sa@scce-lab-401713.iam.gserviceaccount.com',
        event_target_application: 'serviceusage.googleapis.com',
        event_target_resource_name:
          'projects/dummyProject/services/secretmanager.googleapis.com',
        event_target_resource_resourceType: 'BACKEND_SERVICE',
        event_target_resource_resourceSubtype: 'audited_resource',
        event_target_cloud_project_name: 'scce-lab-401713',
        event_target_resourceAncestors_2_name: 'scce-lab-401713',
        event_target_resourceAncestors_2_resourceType: 'CLOUD_PROJECT',
        event_securityResult_1_categoryDetails_1:
          'projects/dummyProject/logs/cloudaudit.googleapis.com%2Factivity',
        event_securityResult_1_action_1: 'ALLOW',
        event_securityResult_1_severity: 'INFORMATIONAL',
        event_network_http_userAgent:
          'google-cloud-sdk gcloud/462.0.1 command/gcloud.services.enable invocation-id/64e61f3478074a06b5874675e5775d22 environment/GCE environment-version/None client-os/LINUX client-os-ver/5.10.0 client-pltf-arch/x86_64 interactive/True from-script/False python/3.11.7 term/xterm-256color (Linux 5.10.0-26-cloud-amd64),gzip(gfe)',
        event_network_http_parsedUserAgent_family: 'USER_DEFINED',
        type: 'GCTI_FINDING',
        detection_1_ruleName:
          'SCC: Discovery: Service Account Self-Investigation with Resource Creation',
        detection_1_summary: 'Rule Detection',
        detection_1_description:
          'Detection of an IAM service account credential that is used to investigate the roles and permissions associated with that same service account',
        detection_1_severity: 'HIGH',
        detection_1_urlBackToProduct:
          'https://gglwl.backstory.chronicle.security/alert?alertId=de_bd51e7b7-3370-44c0-c738-2f8bcf5b3dd6',
        detection_1_ruleId: 'ur_c512c6b6-56fa-41d5-aeae-b01b2d52cfe8',
        detection_1_alertState: 'ALERTING',
        detection_1_ruleType: 'MULTI_EVENT',
        detection_1_detectionFields_1_key: 'service_account',
        detection_1_detectionFields_1_value:
          'sa-cron-vm@scce-lab-401713.iam.gserviceaccount.com',
        detection_1_detectionFields_1_source:
          'udm.principal.user.email_addresses',
        detection_1_ruleLabels_1_key: 'reference',
        detection_1_ruleLabels_1_value:
          'https://cloud.google.com/security-command-center/docs/how-to-investigate-threats#service_account_self-investigation',
        detection_1_ruleLabels_2_key: 'rule_name',
        detection_1_ruleLabels_2_value:
          'SCC: Discovery: Service Account Self-Investigation with Resource Creation',
        detection_1_outcomes_1_key: 'roles',
        detection_1_outcomes_1_value: 'roles/storage.objectAdmin',
        detection_1_outcomes_2_key: 'group_memberships',
        detection_1_outcomes_3_key: 'ip',
        detection_1_outcomes_3_source: 'udm.principal.ip',
        detection_1_outcomes_4_key: 'principal_email_address',
        detection_1_outcomes_4_value:
          'sa-cron-vm@scce-lab-401713.iam.gserviceaccount.com',
        detection_1_outcomes_4_source: 'udm.principal.user.email_addresses',
        detection_1_outcomes_5_key: 'risk_score',
        detection_1_outcomes_5_value: '90',
        detection_1_outcomes_6_key: 'vendor_name',
        detection_1_outcomes_6_value: 'Google',
        detection_1_outcomes_7_key: 'product_name',
        detection_1_outcomes_7_value: 'Security Command Center',
        detection_1_ruleSet: '92f84c0d-678c-c2ba-fd76-9baa399885a2',
        detection_1_ruleSetDisplayName:
          'CDIR SCC Enhanced Defense Discovery Alerts',
        detection_1_riskScore: '90',
        detection_1_rulesetCategoryDisplayName: 'Cloud Threats',
        createdTime: '2024-02-02T11:05:32.43988Z',
        lastUpdatedTime: '2024-02-02T11:05:32.43988Z',
        id: 'de_bd51e7b7-3370-44c0-c738-2f8bcf5b3dd6',
        timeWindow_startTime: '2024-02-02T09:36:00Z',
        timeWindow_endTime: '2024-02-02T10:06:00Z',
        detectionTime: '2024-02-02T10:06:00Z',
        tags_1: 'TA0007',
        tags_2: 'T1069.003',
        alert_type: 'RULE',
        event_type: 'USER_RESOURCE_UPDATE_CONTENT',
        event_category: 'USER',
        event_principal_ip: '',
        event_principal_user_emailAddresses:
          'sa-cron-vm@scce-lab-401713.iam.gserviceaccount.com',
        event_principal_user_attribute_labels_authorization_granted:
          'true, true, true',
        'event_principal_labels_requestMetadata.callerIp':
          'Request came from a GCE VM in the same organization. : REPLACED',
        'event_principal_labels_requestMetadata.callerNetwork':
          'Request originated from a GCE VM or an on-prem VM behind a VPN, and the log was enhanced with additional information : REPLACED',
        event_target_resource_attribute_labels_rc_service:
          'serviceusage.googleapis.com',
        event_target_resource_attribute_labels_request_type:
          'type.googleapis.com/google.api.serviceusage.v1.EnableServiceRequest',
        event_target_resource_attribute_labels_req_name:
          'projects/dummyProject/services/secretmanager.googleapis.com',
        event_target_resource_attribute_labels_rc_method:
          'google.api.serviceusage.v1.ServiceUsage.EnableService',
        event_target_resource_attribute_labels_res_type:
          'type.googleapis.com/google.api.serviceusage.v1.EnableServiceResponse',
        event_about_labels_type:
          'type.googleapis.com/google.cloud.audit.AuditLog',
        event_about_labels_operation_first: 'true',
        event_about_labels_operation_id: 'operations/noop.DONE_OPERATION',
        event_about_labels_operation_last: 'true',
        event_about_labels_operation_producer: 'serviceusage.googleapis.com',
        event_about_labels_caller_network:
          '//compute.googleapis.com/projects/dummyProject/global/networks/__unknown__',
        event_securityResult_detectionFields_resource_name:
          'projects/dummyProject/services/secretmanager.googleapis.com',
        event_securityResult_detectionFields_resource:
          'services/secretmanager.googleapis.com, projectnumbers/429213313266/services/secretmanager.googleapis.com, projectnumbers/429213313266/services/secretmanager.googleapis.com',
        detection_detectionFields_service_account:
          'sa-cron-vm@scce-lab-401713.iam.gserviceaccount.com',
        detection_ruleLabels_reference:
          'https://cloud.google.com/security-command-center/docs/how-to-investigate-threats#service_account_self-investigation',
        detection_ruleLabels_rule_name:
          'SCC: Discovery: Service Account Self-Investigation with Resource Creation',
        detection_outcomes_roles: 'roles/storage.objectAdmin',
        detection_outcomes_principal_email_address:
          'sa-cron-vm@scce-lab-401713.iam.gserviceaccount.com',
        detection_outcomes_risk_score: '90',
        detection_outcomes_vendor_name: 'Google',
        detection_outcomes_product_name: 'Security Command Center',
      },
      Environment: null,
      SourceSystemName: null,
      Extensions: [],
    },
    {
      _fields: {
        BaseEventIds: [],
        ParentEventId: 0,
        DeviceVendor: 'Google Chronicle',
        DeviceProduct: 'RULE',
        DeviceEventClassId: 'USER_RESOURCE_UPDATE_CONTENT',
      },
      _rawDataFields: {
        event_metadata_productLogId: '1jsbhped7wlz',
        event_metadata_eventTimestamp: '2024-02-02T10:03:56.302145Z',
        event_metadata_collectedTimestamp: '2024-02-02T10:03:56.779800455Z',
        event_metadata_eventType: 'USER_RESOURCE_UPDATE_CONTENT',
        event_metadata_vendorName: 'Google Cloud Platform',
        event_metadata_productName: 'Google Cloud Platform',
        event_metadata_productEventType:
          'google.api.serviceusage.v1.ServiceUsage.EnableService',
        event_metadata_urlBackToProduct:
          'projects/dummyProject/logs/cloudaudit.googleapis.com%2Factivity',
        event_metadata_ingestedTimestamp: '2024-02-02T10:03:57.261459Z',
        event_metadata_id: 'AAAAADE5AA0KszQmYVIPZ6WtNbAAAAAADgAAAAAAAAA=',
        event_metadata_logType: 'GCP_CLOUDAUDIT',
        event_metadata_baseLabels_logTypes_1: 'GCP_CLOUDAUDIT',
        event_metadata_baseLabels_allowScopedAccess: 'True',
        event_metadata_enrichmentLabels_logTypes_1: 'GCP_IAM_ANALYSIS',
        event_metadata_enrichmentLabels_logTypes_2: 'GCP_IAM_CONTEXT',
        event_metadata_enrichmentLabels_allowScopedAccess: 'True',
        event_additional_operation_last: 'true',
        event_additional_operation_producer: 'serviceusage.googleapis.com',
        'event_additional_requestMetadata.callerIp_0':
          'Request came from a GCE VM in the same organization. : REPLACED',
        'event_additional_requestMetadata.callerNetwork_1':
          'Request originated from a GCE VM or an on-prem VM behind a VPN, and the log was enhanced with additional information : REPLACED',
        event_additional_type:
          'type.googleapis.com/google.cloud.audit.AuditLog',
        event_additional_caller_network:
          '//compute.googleapis.com/projects/dummyProject/global/networks/__unknown__',
        event_additional_operation_first: 'true',
        event_additional_operation_id: 'operations/noop.DONE_OPERATION',
        event_principal_hostname: '10.1.0.8',
        event_principal_user_userid:
          'terraform-sa@scce-lab-401713.iam.gserviceaccount.com',
        event_principal_user_userDisplayName:
          'A SA to run the vm that refresh threats and resources',
        event_principal_user_emailAddresses_1:
          'sa-cron-vm@scce-lab-401713.iam.gserviceaccount.com',
        event_principal_user_emailAddresses_2:
          'sa-cron-vm@scce-lab-401713.iam.gserviceaccount.com',
        event_principal_user_emailAddresses_3:
          'terraform-sa@scce-lab-401713.iam.gserviceaccount.com',
        event_principal_user_emailAddresses_4:
          'sa-cron-vm@scce-lab-401713.iam.gserviceaccount.com',
        event_principal_user_productObjectId: '100282268471516296206',
        event_principal_user_attribute_cloud_environment:
          'GOOGLE_CLOUD_PLATFORM',
        event_principal_user_attribute_roles_1_name:
          'roles/storage.objectAdmin',
        event_principal_user_attribute_roles_1_type: 'SERVICE_ACCOUNT',
        event_principal_user_attribute_permissions_1_name:
          'serviceusage.services.enable',
        event_principal_user_attribute_permissions_1_type: 'ADMIN_WRITE',
        event_principal_user_attribute_permissions_2_name:
          'serviceusage.services.enable',
        event_principal_user_attribute_permissions_3_name:
          'servicemanagement.services.bind',
        event_principal_ip_1: '10.1.0.8',
        event_principal_asset_hostname: '10.1.0.8',
        event_target_user_userid:
          'terraform-sa@scce-lab-401713.iam.gserviceaccount.com',
        event_target_application: 'serviceusage.googleapis.com',
        event_target_resource_name:
          'projects/dummyProject/services/cloudresourcemanager.googleapis.com',
        event_target_resource_resourceType: 'BACKEND_SERVICE',
        event_target_resource_resourceSubtype: 'audited_resource',
        event_target_cloud_project_name: 'scce-lab-401713',
        event_target_resourceAncestors_2_name: 'scce-lab-401713',
        event_target_resourceAncestors_2_resourceType: 'CLOUD_PROJECT',
        event_securityResult_1_categoryDetails_1:
          'projects/dummyProject/logs/cloudaudit.googleapis.com%2Factivity',
        event_securityResult_1_action_1: 'ALLOW',
        event_securityResult_1_severity: 'INFORMATIONAL',
        event_network_http_userAgent:
          'google-cloud-sdk gcloud/462.0.1 command/gcloud.services.enable invocation-id/cbddc1d42cae413db98b0c33c8312365 environment/GCE environment-version/None client-os/LINUX client-os-ver/5.10.0 client-pltf-arch/x86_64 interactive/True from-script/False python/3.11.7 term/xterm-256color (Linux 5.10.0-26-cloud-amd64),gzip(gfe)',
        event_network_http_parsedUserAgent_family: 'USER_DEFINED',
        type: 'GCTI_FINDING',
        detection_1_ruleName:
          'SCC: Discovery: Service Account Self-Investigation with Resource Creation',
        detection_1_summary: 'Rule Detection',
        detection_1_description:
          'Detection of an IAM service account credential that is used to investigate the roles and permissions associated with that same service account',
        detection_1_severity: 'HIGH',
        detection_1_urlBackToProduct:
          'https://gglwl.backstory.chronicle.security/alert?alertId=de_bd51e7b7-3370-44c0-c738-2f8bcf5b3dd6',
        detection_1_ruleId: 'ur_c512c6b6-56fa-41d5-aeae-b01b2d52cfe8',
        detection_1_alertState: 'ALERTING',
        detection_1_ruleType: 'MULTI_EVENT',
        detection_1_detectionFields_1_key: 'service_account',
        detection_1_detectionFields_1_value:
          'sa-cron-vm@scce-lab-401713.iam.gserviceaccount.com',
        detection_1_detectionFields_1_source:
          'udm.principal.user.email_addresses',
        detection_1_ruleLabels_1_key: 'reference',
        detection_1_ruleLabels_1_value:
          'https://cloud.google.com/security-command-center/docs/how-to-investigate-threats#service_account_self-investigation',
        detection_1_ruleLabels_2_key: 'rule_name',
        detection_1_ruleLabels_2_value:
          'SCC: Discovery: Service Account Self-Investigation with Resource Creation',
        detection_1_outcomes_1_key: 'roles',
        detection_1_outcomes_1_value: 'roles/storage.objectAdmin',
        detection_1_outcomes_2_key: 'group_memberships',
        detection_1_outcomes_3_key: 'ip',
        detection_1_outcomes_3_source: 'udm.principal.ip',
        detection_1_outcomes_4_key: 'principal_email_address',
        detection_1_outcomes_4_value:
          'sa-cron-vm@scce-lab-401713.iam.gserviceaccount.com',
        detection_1_outcomes_4_source: 'udm.principal.user.email_addresses',
        detection_1_outcomes_5_key: 'risk_score',
        detection_1_outcomes_5_value: '90',
        detection_1_outcomes_6_key: 'vendor_name',
        detection_1_outcomes_6_value: 'Google',
        detection_1_outcomes_7_key: 'product_name',
        detection_1_outcomes_7_value: 'Security Command Center',
        detection_1_ruleSet: '92f84c0d-678c-c2ba-fd76-9baa399885a2',
        detection_1_ruleSetDisplayName:
          'CDIR SCC Enhanced Defense Discovery Alerts',
        detection_1_riskScore: '90',
        detection_1_rulesetCategoryDisplayName: 'Cloud Threats',
        createdTime: '2024-02-02T11:05:32.43988Z',
        lastUpdatedTime: '2024-02-02T11:05:32.43988Z',
        id: 'de_bd51e7b7-3370-44c0-c738-2f8bcf5b3dd6',
        timeWindow_startTime: '2024-02-02T09:36:00Z',
        timeWindow_endTime: '2024-02-02T10:06:00Z',
        detectionTime: '2024-02-02T10:06:00Z',
        tags_1: 'TA0007',
        tags_2: 'T1069.003',
        alert_type: 'RULE',
        event_type: 'USER_RESOURCE_UPDATE_CONTENT',
        event_category: 'USER',
        event_principal_ip: '10.1.0.8',
        event_principal_user_emailAddresses:
          'sa-cron-vm@scce-lab-401713.iam.gserviceaccount.com',
        event_principal_user_attribute_labels_authorization_granted:
          'true, true, true',
        'event_principal_labels_requestMetadata.callerIp':
          'Request came from a GCE VM in the same organization. : REPLACED',
        'event_principal_labels_requestMetadata.callerNetwork':
          'Request originated from a GCE VM or an on-prem VM behind a VPN, and the log was enhanced with additional information : REPLACED',
        event_target_resource_attribute_labels_rc_service:
          'serviceusage.googleapis.com',
        event_target_resource_attribute_labels_request_type:
          'type.googleapis.com/google.api.serviceusage.v1.EnableServiceRequest',
        event_target_resource_attribute_labels_req_name:
          'projects/dummyProject/services/cloudresourcemanager.googleapis.com',
        event_target_resource_attribute_labels_rc_method:
          'google.api.serviceusage.v1.ServiceUsage.EnableService',
        event_target_resource_attribute_labels_res_type:
          'type.googleapis.com/google.api.serviceusage.v1.EnableServiceResponse',
        event_about_labels_type:
          'type.googleapis.com/google.cloud.audit.AuditLog',
        event_about_labels_operation_first: 'true',
        event_about_labels_operation_id: 'operations/noop.DONE_OPERATION',
        event_about_labels_operation_last: 'true',
        event_about_labels_operation_producer: 'serviceusage.googleapis.com',
        event_about_labels_caller_network:
          '//compute.googleapis.com/projects/dummyProject/global/networks/__unknown__',
        event_securityResult_detectionFields_resource_name:
          'projects/dummyProject/services/cloudresourcemanager.googleapis.com',
        event_securityResult_detectionFields_resource:
          'services/cloudresourcemanager.googleapis.com, projectnumbers/429213313266/services/cloudresourcemanager.googleapis.com, projectnumbers/429213313266/services/cloudresourcemanager.googleapis.com',
        detection_detectionFields_service_account:
          'sa-cron-vm@scce-lab-401713.iam.gserviceaccount.com',
        detection_ruleLabels_reference:
          'https://cloud.google.com/security-command-center/docs/how-to-investigate-threats#service_account_self-investigation',
        detection_ruleLabels_rule_name:
          'SCC: Discovery: Service Account Self-Investigation with Resource Creation',
        detection_outcomes_roles: 'roles/storage.objectAdmin',
        detection_outcomes_principal_email_address:
          'sa-cron-vm@scce-lab-401713.iam.gserviceaccount.com',
        detection_outcomes_risk_score: '90',
        detection_outcomes_vendor_name: 'Google',
        detection_outcomes_product_name: 'Security Command Center',
      },
      Environment: null,
      SourceSystemName: null,
      Extensions: [],
    },
    {
      _fields: {
        BaseEventIds: [],
        ParentEventId: 0,
        DeviceVendor: 'Google Chronicle',
        DeviceProduct: 'RULE',
        DeviceEventClassId: 'USER_RESOURCE_UPDATE_CONTENT',
      },
      _rawDataFields: {
        event_metadata_productLogId: '1jsbhped7wlz',
        event_metadata_eventTimestamp: '2024-02-02T10:03:56.302145Z',
        event_metadata_collectedTimestamp: '2024-02-02T10:03:56.779800455Z',
        event_metadata_eventType: 'USER_RESOURCE_UPDATE_CONTENT',
        event_metadata_vendorName: 'Google Cloud Platform',
        event_metadata_productName: 'Google Cloud Platform',
        event_metadata_productEventType:
          'google.api.serviceusage.v1.ServiceUsage.EnableService',
        event_metadata_urlBackToProduct:
          'projects/dummyProject/logs/cloudaudit.googleapis.com%2Factivity',
        event_metadata_ingestedTimestamp: '2024-02-02T10:03:57.261459Z',
        event_metadata_id: 'AAAAADE5AA0KszQmYVIPZ6WtNbAAAAAADgAAAAAAAAA=',
        event_metadata_logType: 'GCP_CLOUDAUDIT',
        event_metadata_baseLabels_logTypes_1: 'GCP_CLOUDAUDIT',
        event_metadata_baseLabels_allowScopedAccess: 'True',
        event_metadata_enrichmentLabels_logTypes_1: 'GCP_IAM_ANALYSIS',
        event_metadata_enrichmentLabels_logTypes_2: 'GCP_IAM_CONTEXT',
        event_metadata_enrichmentLabels_allowScopedAccess: 'True',
        event_additional_operation_last: 'true',
        event_additional_operation_producer: 'serviceusage.googleapis.com',
        'event_additional_requestMetadata.callerIp_0':
          'Request came from a GCE VM in the same organization. : REPLACED',
        'event_additional_requestMetadata.callerNetwork_1':
          'Request originated from a GCE VM or an on-prem VM behind a VPN, and the log was enhanced with additional information : REPLACED',
        event_additional_type:
          'type.googleapis.com/google.cloud.audit.AuditLog',
        event_additional_caller_network:
          '//compute.googleapis.com/projects/dummyProject/global/networks/__unknown__',
        event_additional_operation_first: 'true',
        event_additional_operation_id: 'operations/noop.DONE_OPERATION',
        event_principal_hostname: '10.1.0.8',
        event_principal_user_userid:
          'terraform-sa@scce-lab-401713.iam.gserviceaccount.com',
        event_principal_user_userDisplayName:
          'A SA to run the vm that refresh threats and resources',
        event_principal_user_emailAddresses_1:
          'sa-cron-vm@scce-lab-401713.iam.gserviceaccount.com',
        event_principal_user_emailAddresses_2:
          'sa-cron-vm@scce-lab-401713.iam.gserviceaccount.com',
        event_principal_user_emailAddresses_3:
          'terraform-sa@scce-lab-401713.iam.gserviceaccount.com',
        event_principal_user_emailAddresses_4:
          'sa-cron-vm@scce-lab-401713.iam.gserviceaccount.com',
        event_principal_user_productObjectId: '100282268471516296206',
        event_principal_user_attribute_cloud_environment:
          'GOOGLE_CLOUD_PLATFORM',
        event_principal_user_attribute_roles_1_name:
          'roles/storage.objectAdmin',
        event_principal_user_attribute_roles_1_type: 'SERVICE_ACCOUNT',
        event_principal_user_attribute_permissions_1_name:
          'serviceusage.services.enable',
        event_principal_user_attribute_permissions_1_type: 'ADMIN_WRITE',
        event_principal_user_attribute_permissions_2_name:
          'serviceusage.services.enable',
        event_principal_user_attribute_permissions_3_name:
          'servicemanagement.services.bind',
        event_principal_ip_1: '10.1.0.8',
        event_principal_asset_hostname: '10.1.0.8',
        event_target_user_userid:
          'terraform-sa@scce-lab-401713.iam.gserviceaccount.com',
        event_target_application: 'serviceusage.googleapis.com',
        event_target_resource_name:
          'projects/dummyProject/services/cloudresourcemanager.googleapis.com',
        event_target_resource_resourceType: 'BACKEND_SERVICE',
        event_target_resource_resourceSubtype: 'audited_resource',
        event_target_cloud_project_name: 'scce-lab-401713',
        event_target_resourceAncestors_2_name: 'scce-lab-401713',
        event_target_resourceAncestors_2_resourceType: 'CLOUD_PROJECT',
        event_securityResult_1_categoryDetails_1:
          'projects/dummyProject/logs/cloudaudit.googleapis.com%2Factivity',
        event_securityResult_1_action_1: 'ALLOW',
        event_securityResult_1_severity: 'INFORMATIONAL',
        event_network_http_userAgent:
          'google-cloud-sdk gcloud/462.0.1 command/gcloud.services.enable invocation-id/cbddc1d42cae413db98b0c33c8312365 environment/GCE environment-version/None client-os/LINUX client-os-ver/5.10.0 client-pltf-arch/x86_64 interactive/True from-script/False python/3.11.7 term/xterm-256color (Linux 5.10.0-26-cloud-amd64),gzip(gfe)',
        event_network_http_parsedUserAgent_family: 'USER_DEFINED',
        type: 'GCTI_FINDING',
        detection_1_ruleName:
          'SCC: Discovery: Service Account Self-Investigation with Resource Creation',
        detection_1_summary: 'Rule Detection',
        detection_1_description:
          'Detection of an IAM service account credential that is used to investigate the roles and permissions associated with that same service account',
        detection_1_severity: 'HIGH',
        detection_1_urlBackToProduct:
          'https://gglwl.backstory.chronicle.security/alert?alertId=de_bd51e7b7-3370-44c0-c738-2f8bcf5b3dd6',
        detection_1_ruleId: 'ur_c512c6b6-56fa-41d5-aeae-b01b2d52cfe8',
        detection_1_alertState: 'ALERTING',
        detection_1_ruleType: 'MULTI_EVENT',
        detection_1_detectionFields_1_key: 'service_account',
        detection_1_detectionFields_1_value:
          'sa-cron-vm@scce-lab-401713.iam.gserviceaccount.com',
        detection_1_detectionFields_1_source:
          'udm.principal.user.email_addresses',
        detection_1_ruleLabels_1_key: 'reference',
        detection_1_ruleLabels_1_value:
          'https://cloud.google.com/security-command-center/docs/how-to-investigate-threats#service_account_self-investigation',
        detection_1_ruleLabels_2_key: 'rule_name',
        detection_1_ruleLabels_2_value:
          'SCC: Discovery: Service Account Self-Investigation with Resource Creation',
        detection_1_outcomes_1_key: 'roles',
        detection_1_outcomes_1_value: 'roles/storage.objectAdmin',
        detection_1_outcomes_2_key: 'group_memberships',
        detection_1_outcomes_3_key: 'ip',
        detection_1_outcomes_3_source: 'udm.principal.ip',
        detection_1_outcomes_4_key: 'principal_email_address',
        detection_1_outcomes_4_value:
          'sa-cron-vm@scce-lab-401713.iam.gserviceaccount.com',
        detection_1_outcomes_4_source: 'udm.principal.user.email_addresses',
        detection_1_outcomes_5_key: 'risk_score',
        detection_1_outcomes_5_value: '90',
        detection_1_outcomes_6_key: 'vendor_name',
        detection_1_outcomes_6_value: 'Google',
        detection_1_outcomes_7_key: 'product_name',
        detection_1_outcomes_7_value: 'Security Command Center',
        detection_1_ruleSet: '92f84c0d-678c-c2ba-fd76-9baa399885a2',
        detection_1_ruleSetDisplayName:
          'CDIR SCC Enhanced Defense Discovery Alerts',
        detection_1_riskScore: '90',
        detection_1_rulesetCategoryDisplayName: 'Cloud Threats',
        createdTime: '2024-02-02T11:05:32.43988Z',
        lastUpdatedTime: '2024-02-02T11:05:32.43988Z',
        id: 'de_bd51e7b7-3370-44c0-c738-2f8bcf5b3dd6',
        timeWindow_startTime: '2024-02-02T09:36:00Z',
        timeWindow_endTime: '2024-02-02T10:06:00Z',
        detectionTime: '2024-02-02T10:06:00Z',
        tags_1: 'TA0007',
        tags_2: 'T1069.003',
        alert_type: 'RULE',
        event_type: 'USER_RESOURCE_UPDATE_CONTENT',
        event_category: 'USER',
        event_principal_ip: '',
        event_principal_user_emailAddresses:
          'sa-cron-vm@scce-lab-401713.iam.gserviceaccount.com',
        event_principal_user_attribute_labels_authorization_granted:
          'true, true, true',
        'event_principal_labels_requestMetadata.callerIp':
          'Request came from a GCE VM in the same organization. : REPLACED',
        'event_principal_labels_requestMetadata.callerNetwork':
          'Request originated from a GCE VM or an on-prem VM behind a VPN, and the log was enhanced with additional information : REPLACED',
        event_target_resource_attribute_labels_rc_service:
          'serviceusage.googleapis.com',
        event_target_resource_attribute_labels_request_type:
          'type.googleapis.com/google.api.serviceusage.v1.EnableServiceRequest',
        event_target_resource_attribute_labels_req_name:
          'projects/dummyProject/services/cloudresourcemanager.googleapis.com',
        event_target_resource_attribute_labels_rc_method:
          'google.api.serviceusage.v1.ServiceUsage.EnableService',
        event_target_resource_attribute_labels_res_type:
          'type.googleapis.com/google.api.serviceusage.v1.EnableServiceResponse',
        event_about_labels_type:
          'type.googleapis.com/google.cloud.audit.AuditLog',
        event_about_labels_operation_first: 'true',
        event_about_labels_operation_id: 'operations/noop.DONE_OPERATION',
        event_about_labels_operation_last: 'true',
        event_about_labels_operation_producer: 'serviceusage.googleapis.com',
        event_about_labels_caller_network:
          '//compute.googleapis.com/projects/dummyProject/global/networks/__unknown__',
        event_securityResult_detectionFields_resource_name:
          'projects/dummyProject/services/cloudresourcemanager.googleapis.com',
        event_securityResult_detectionFields_resource:
          'services/cloudresourcemanager.googleapis.com, projectnumbers/429213313266/services/cloudresourcemanager.googleapis.com, projectnumbers/429213313266/services/cloudresourcemanager.googleapis.com',
        detection_detectionFields_service_account:
          'sa-cron-vm@scce-lab-401713.iam.gserviceaccount.com',
        detection_ruleLabels_reference:
          'https://cloud.google.com/security-command-center/docs/how-to-investigate-threats#service_account_self-investigation',
        detection_ruleLabels_rule_name:
          'SCC: Discovery: Service Account Self-Investigation with Resource Creation',
        detection_outcomes_roles: 'roles/storage.objectAdmin',
        detection_outcomes_principal_email_address:
          'sa-cron-vm@scce-lab-401713.iam.gserviceaccount.com',
        detection_outcomes_risk_score: '90',
        detection_outcomes_vendor_name: 'Google',
        detection_outcomes_product_name: 'Security Command Center',
      },
      Environment: null,
      SourceSystemName: null,
      Extensions: [],
    },
    {
      _fields: {
        BaseEventIds: [],
        ParentEventId: 0,
        DeviceVendor: 'Google Chronicle',
        DeviceProduct: 'RULE',
        DeviceEventClassId: 'USER_RESOURCE_UPDATE_CONTENT',
      },
      _rawDataFields: {
        event_metadata_productLogId: '1jsbhped7wlz',
        event_metadata_eventTimestamp: '2024-02-02T10:03:56.302145Z',
        event_metadata_collectedTimestamp: '2024-02-02T10:03:56.779800455Z',
        event_metadata_eventType: 'USER_RESOURCE_UPDATE_CONTENT',
        event_metadata_vendorName: 'Google Cloud Platform',
        event_metadata_productName: 'Google Cloud Platform',
        event_metadata_productEventType:
          'google.api.serviceusage.v1.ServiceUsage.EnableService',
        event_metadata_urlBackToProduct:
          'projects/dummyProject/logs/cloudaudit.googleapis.com%2Factivity',
        event_metadata_ingestedTimestamp: '2024-02-02T10:03:57.261459Z',
        event_metadata_id: 'AAAAADE5AA0KszQmYVIPZ6WtNbAAAAAADgAAAAAAAAA=',
        event_metadata_logType: 'GCP_CLOUDAUDIT',
        event_metadata_baseLabels_logTypes_1: 'GCP_CLOUDAUDIT',
        event_metadata_baseLabels_allowScopedAccess: 'True',
        event_metadata_enrichmentLabels_logTypes_1: 'GCP_IAM_ANALYSIS',
        event_metadata_enrichmentLabels_logTypes_2: 'GCP_IAM_CONTEXT',
        event_metadata_enrichmentLabels_allowScopedAccess: 'True',
        event_additional_operation_last: 'true',
        event_additional_operation_producer: 'serviceusage.googleapis.com',
        'event_additional_requestMetadata.callerIp_0':
          'Request came from a GCE VM in the same organization. : REPLACED',
        'event_additional_requestMetadata.callerNetwork_1':
          'Request originated from a GCE VM or an on-prem VM behind a VPN, and the log was enhanced with additional information : REPLACED',
        event_additional_type:
          'type.googleapis.com/google.cloud.audit.AuditLog',
        event_additional_caller_network:
          '//compute.googleapis.com/projects/dummyProject/global/networks/__unknown__',
        event_additional_operation_first: 'true',
        event_additional_operation_id: 'operations/noop.DONE_OPERATION',
        event_principal_hostname: '10.1.0.8',
        event_principal_user_userid:
          'terraform-sa@scce-lab-401713.iam.gserviceaccount.com',
        event_principal_user_userDisplayName:
          'A SA to run the vm that refresh threats and resources',
        event_principal_user_emailAddresses_1:
          'sa-cron-vm@scce-lab-401713.iam.gserviceaccount.com',
        event_principal_user_emailAddresses_2:
          'sa-cron-vm@scce-lab-401713.iam.gserviceaccount.com',
        event_principal_user_emailAddresses_3:
          'terraform-sa@scce-lab-401713.iam.gserviceaccount.com',
        event_principal_user_emailAddresses_4:
          'sa-cron-vm@scce-lab-401713.iam.gserviceaccount.com',
        event_principal_user_productObjectId: '100282268471516296206',
        event_principal_user_attribute_cloud_environment:
          'GOOGLE_CLOUD_PLATFORM',
        event_principal_user_attribute_roles_1_name:
          'roles/storage.objectAdmin',
        event_principal_user_attribute_roles_1_type: 'SERVICE_ACCOUNT',
        event_principal_user_attribute_permissions_1_name:
          'serviceusage.services.enable',
        event_principal_user_attribute_permissions_1_type: 'ADMIN_WRITE',
        event_principal_user_attribute_permissions_2_name:
          'serviceusage.services.enable',
        event_principal_user_attribute_permissions_3_name:
          'servicemanagement.services.bind',
        event_principal_ip_1: '10.1.0.8',
        event_principal_asset_hostname: '10.1.0.8',
        event_target_user_userid:
          'terraform-sa@scce-lab-401713.iam.gserviceaccount.com',
        event_target_application: 'serviceusage.googleapis.com',
        event_target_resource_name:
          'projects/dummyProject/services/cloudresourcemanager.googleapis.com',
        event_target_resource_resourceType: 'BACKEND_SERVICE',
        event_target_resource_resourceSubtype: 'audited_resource',
        event_target_cloud_project_name: 'scce-lab-401713',
        event_target_resourceAncestors_2_name: 'scce-lab-401713',
        event_target_resourceAncestors_2_resourceType: 'CLOUD_PROJECT',
        event_securityResult_1_categoryDetails_1:
          'projects/dummyProject/logs/cloudaudit.googleapis.com%2Factivity',
        event_securityResult_1_action_1: 'ALLOW',
        event_securityResult_1_severity: 'INFORMATIONAL',
        event_network_http_userAgent:
          'google-cloud-sdk gcloud/462.0.1 command/gcloud.services.enable invocation-id/cbddc1d42cae413db98b0c33c8312365 environment/GCE environment-version/None client-os/LINUX client-os-ver/5.10.0 client-pltf-arch/x86_64 interactive/True from-script/False python/3.11.7 term/xterm-256color (Linux 5.10.0-26-cloud-amd64),gzip(gfe)',
        event_network_http_parsedUserAgent_family: 'USER_DEFINED',
        type: 'GCTI_FINDING',
        detection_1_ruleName:
          'SCC: Discovery: Service Account Self-Investigation with Resource Creation',
        detection_1_summary: 'Rule Detection',
        detection_1_description:
          'Detection of an IAM service account credential that is used to investigate the roles and permissions associated with that same service account',
        detection_1_severity: 'HIGH',
        detection_1_urlBackToProduct:
          'https://gglwl.backstory.chronicle.security/alert?alertId=de_bd51e7b7-3370-44c0-c738-2f8bcf5b3dd6',
        detection_1_ruleId: 'ur_c512c6b6-56fa-41d5-aeae-b01b2d52cfe8',
        detection_1_alertState: 'ALERTING',
        detection_1_ruleType: 'MULTI_EVENT',
        detection_1_detectionFields_1_key: 'service_account',
        detection_1_detectionFields_1_value:
          'sa-cron-vm@scce-lab-401713.iam.gserviceaccount.com',
        detection_1_detectionFields_1_source:
          'udm.principal.user.email_addresses',
        detection_1_ruleLabels_1_key: 'reference',
        detection_1_ruleLabels_1_value:
          'https://cloud.google.com/security-command-center/docs/how-to-investigate-threats#service_account_self-investigation',
        detection_1_ruleLabels_2_key: 'rule_name',
        detection_1_ruleLabels_2_value:
          'SCC: Discovery: Service Account Self-Investigation with Resource Creation',
        detection_1_outcomes_1_key: 'roles',
        detection_1_outcomes_1_value: 'roles/storage.objectAdmin',
        detection_1_outcomes_2_key: 'group_memberships',
        detection_1_outcomes_3_key: 'ip',
        detection_1_outcomes_3_source: 'udm.principal.ip',
        detection_1_outcomes_4_key: 'principal_email_address',
        detection_1_outcomes_4_value:
          'sa-cron-vm@scce-lab-401713.iam.gserviceaccount.com',
        detection_1_outcomes_4_source: 'udm.principal.user.email_addresses',
        detection_1_outcomes_5_key: 'risk_score',
        detection_1_outcomes_5_value: '90',
        detection_1_outcomes_6_key: 'vendor_name',
        detection_1_outcomes_6_value: 'Google',
        detection_1_outcomes_7_key: 'product_name',
        detection_1_outcomes_7_value: 'Security Command Center',
        detection_1_ruleSet: '92f84c0d-678c-c2ba-fd76-9baa399885a2',
        detection_1_ruleSetDisplayName:
          'CDIR SCC Enhanced Defense Discovery Alerts',
        detection_1_riskScore: '90',
        detection_1_rulesetCategoryDisplayName: 'Cloud Threats',
        createdTime: '2024-02-02T11:05:32.43988Z',
        lastUpdatedTime: '2024-02-02T11:05:32.43988Z',
        id: 'de_bd51e7b7-3370-44c0-c738-2f8bcf5b3dd6',
        timeWindow_startTime: '2024-02-02T09:36:00Z',
        timeWindow_endTime: '2024-02-02T10:06:00Z',
        detectionTime: '2024-02-02T10:06:00Z',
        tags_1: 'TA0007',
        tags_2: 'T1069.003',
        alert_type: 'RULE',
        event_type: 'USER_RESOURCE_UPDATE_CONTENT',
        event_category: 'USER',
        event_principal_ip: '',
        event_principal_user_emailAddresses:
          'terraform-sa@scce-lab-401713.iam.gserviceaccount.com',
        event_principal_user_attribute_labels_authorization_granted:
          'true, true, true',
        'event_principal_labels_requestMetadata.callerIp':
          'Request came from a GCE VM in the same organization. : REPLACED',
        'event_principal_labels_requestMetadata.callerNetwork':
          'Request originated from a GCE VM or an on-prem VM behind a VPN, and the log was enhanced with additional information : REPLACED',
        event_target_resource_attribute_labels_rc_service:
          'serviceusage.googleapis.com',
        event_target_resource_attribute_labels_request_type:
          'type.googleapis.com/google.api.serviceusage.v1.EnableServiceRequest',
        event_target_resource_attribute_labels_req_name:
          'projects/dummyProject/services/cloudresourcemanager.googleapis.com',
        event_target_resource_attribute_labels_rc_method:
          'google.api.serviceusage.v1.ServiceUsage.EnableService',
        event_target_resource_attribute_labels_res_type:
          'type.googleapis.com/google.api.serviceusage.v1.EnableServiceResponse',
        event_about_labels_type:
          'type.googleapis.com/google.cloud.audit.AuditLog',
        event_about_labels_operation_first: 'true',
        event_about_labels_operation_id: 'operations/noop.DONE_OPERATION',
        event_about_labels_operation_last: 'true',
        event_about_labels_operation_producer: 'serviceusage.googleapis.com',
        event_about_labels_caller_network:
          '//compute.googleapis.com/projects/dummyProject/global/networks/__unknown__',
        event_securityResult_detectionFields_resource_name:
          'projects/dummyProject/services/cloudresourcemanager.googleapis.com',
        event_securityResult_detectionFields_resource:
          'services/cloudresourcemanager.googleapis.com, projectnumbers/429213313266/services/cloudresourcemanager.googleapis.com, projectnumbers/429213313266/services/cloudresourcemanager.googleapis.com',
        detection_detectionFields_service_account:
          'sa-cron-vm@scce-lab-401713.iam.gserviceaccount.com',
        detection_ruleLabels_reference:
          'https://cloud.google.com/security-command-center/docs/how-to-investigate-threats#service_account_self-investigation',
        detection_ruleLabels_rule_name:
          'SCC: Discovery: Service Account Self-Investigation with Resource Creation',
        detection_outcomes_roles: 'roles/storage.objectAdmin',
        detection_outcomes_principal_email_address:
          'sa-cron-vm@scce-lab-401713.iam.gserviceaccount.com',
        detection_outcomes_risk_score: '90',
        detection_outcomes_vendor_name: 'Google',
        detection_outcomes_product_name: 'Security Command Center',
      },
      Environment: null,
      SourceSystemName: null,
      Extensions: [],
    },
    {
      _fields: {
        BaseEventIds: [],
        ParentEventId: 0,
        DeviceVendor: 'Google Chronicle',
        DeviceProduct: 'RULE',
        DeviceEventClassId: 'USER_RESOURCE_UPDATE_CONTENT',
      },
      _rawDataFields: {
        event_metadata_productLogId: '1jsbhped7wlz',
        event_metadata_eventTimestamp: '2024-02-02T10:03:56.302145Z',
        event_metadata_collectedTimestamp: '2024-02-02T10:03:56.779800455Z',
        event_metadata_eventType: 'USER_RESOURCE_UPDATE_CONTENT',
        event_metadata_vendorName: 'Google Cloud Platform',
        event_metadata_productName: 'Google Cloud Platform',
        event_metadata_productEventType:
          'google.api.serviceusage.v1.ServiceUsage.EnableService',
        event_metadata_urlBackToProduct:
          'projects/dummyProject/logs/cloudaudit.googleapis.com%2Factivity',
        event_metadata_ingestedTimestamp: '2024-02-02T10:03:57.261459Z',
        event_metadata_id: 'AAAAADE5AA0KszQmYVIPZ6WtNbAAAAAADgAAAAAAAAA=',
        event_metadata_logType: 'GCP_CLOUDAUDIT',
        event_metadata_baseLabels_logTypes_1: 'GCP_CLOUDAUDIT',
        event_metadata_baseLabels_allowScopedAccess: 'True',
        event_metadata_enrichmentLabels_logTypes_1: 'GCP_IAM_ANALYSIS',
        event_metadata_enrichmentLabels_logTypes_2: 'GCP_IAM_CONTEXT',
        event_metadata_enrichmentLabels_allowScopedAccess: 'True',
        event_additional_operation_last: 'true',
        event_additional_operation_producer: 'serviceusage.googleapis.com',
        'event_additional_requestMetadata.callerIp_0':
          'Request came from a GCE VM in the same organization. : REPLACED',
        'event_additional_requestMetadata.callerNetwork_1':
          'Request originated from a GCE VM or an on-prem VM behind a VPN, and the log was enhanced with additional information : REPLACED',
        event_additional_type:
          'type.googleapis.com/google.cloud.audit.AuditLog',
        event_additional_caller_network:
          '//compute.googleapis.com/projects/dummyProject/global/networks/__unknown__',
        event_additional_operation_first: 'true',
        event_additional_operation_id: 'operations/noop.DONE_OPERATION',
        event_principal_hostname: '10.1.0.8',
        event_principal_user_userid:
          'terraform-sa@scce-lab-401713.iam.gserviceaccount.com',
        event_principal_user_userDisplayName:
          'A SA to run the vm that refresh threats and resources',
        event_principal_user_emailAddresses_1:
          'sa-cron-vm@scce-lab-401713.iam.gserviceaccount.com',
        event_principal_user_emailAddresses_2:
          'sa-cron-vm@scce-lab-401713.iam.gserviceaccount.com',
        event_principal_user_emailAddresses_3:
          'terraform-sa@scce-lab-401713.iam.gserviceaccount.com',
        event_principal_user_emailAddresses_4:
          'sa-cron-vm@scce-lab-401713.iam.gserviceaccount.com',
        event_principal_user_productObjectId: '100282268471516296206',
        event_principal_user_attribute_cloud_environment:
          'GOOGLE_CLOUD_PLATFORM',
        event_principal_user_attribute_roles_1_name:
          'roles/storage.objectAdmin',
        event_principal_user_attribute_roles_1_type: 'SERVICE_ACCOUNT',
        event_principal_user_attribute_permissions_1_name:
          'serviceusage.services.enable',
        event_principal_user_attribute_permissions_1_type: 'ADMIN_WRITE',
        event_principal_user_attribute_permissions_2_name:
          'serviceusage.services.enable',
        event_principal_user_attribute_permissions_3_name:
          'servicemanagement.services.bind',
        event_principal_ip_1: '10.1.0.8',
        event_principal_asset_hostname: '10.1.0.8',
        event_target_user_userid:
          'terraform-sa@scce-lab-401713.iam.gserviceaccount.com',
        event_target_application: 'serviceusage.googleapis.com',
        event_target_resource_name:
          'projects/dummyProject/services/cloudresourcemanager.googleapis.com',
        event_target_resource_resourceType: 'BACKEND_SERVICE',
        event_target_resource_resourceSubtype: 'audited_resource',
        event_target_cloud_project_name: 'scce-lab-401713',
        event_target_resourceAncestors_2_name: 'scce-lab-401713',
        event_target_resourceAncestors_2_resourceType: 'CLOUD_PROJECT',
        event_securityResult_1_categoryDetails_1:
          'projects/dummyProject/logs/cloudaudit.googleapis.com%2Factivity',
        event_securityResult_1_action_1: 'ALLOW',
        event_securityResult_1_severity: 'INFORMATIONAL',
        event_network_http_userAgent:
          'google-cloud-sdk gcloud/462.0.1 command/gcloud.services.enable invocation-id/cbddc1d42cae413db98b0c33c8312365 environment/GCE environment-version/None client-os/LINUX client-os-ver/5.10.0 client-pltf-arch/x86_64 interactive/True from-script/False python/3.11.7 term/xterm-256color (Linux 5.10.0-26-cloud-amd64),gzip(gfe)',
        event_network_http_parsedUserAgent_family: 'USER_DEFINED',
        type: 'GCTI_FINDING',
        detection_1_ruleName:
          'SCC: Discovery: Service Account Self-Investigation with Resource Creation',
        detection_1_summary: 'Rule Detection',
        detection_1_description:
          'Detection of an IAM service account credential that is used to investigate the roles and permissions associated with that same service account',
        detection_1_severity: 'HIGH',
        detection_1_urlBackToProduct:
          'https://gglwl.backstory.chronicle.security/alert?alertId=de_bd51e7b7-3370-44c0-c738-2f8bcf5b3dd6',
        detection_1_ruleId: 'ur_c512c6b6-56fa-41d5-aeae-b01b2d52cfe8',
        detection_1_alertState: 'ALERTING',
        detection_1_ruleType: 'MULTI_EVENT',
        detection_1_detectionFields_1_key: 'service_account',
        detection_1_detectionFields_1_value:
          'sa-cron-vm@scce-lab-401713.iam.gserviceaccount.com',
        detection_1_detectionFields_1_source:
          'udm.principal.user.email_addresses',
        detection_1_ruleLabels_1_key: 'reference',
        detection_1_ruleLabels_1_value:
          'https://cloud.google.com/security-command-center/docs/how-to-investigate-threats#service_account_self-investigation',
        detection_1_ruleLabels_2_key: 'rule_name',
        detection_1_ruleLabels_2_value:
          'SCC: Discovery: Service Account Self-Investigation with Resource Creation',
        detection_1_outcomes_1_key: 'roles',
        detection_1_outcomes_1_value: 'roles/storage.objectAdmin',
        detection_1_outcomes_2_key: 'group_memberships',
        detection_1_outcomes_3_key: 'ip',
        detection_1_outcomes_3_source: 'udm.principal.ip',
        detection_1_outcomes_4_key: 'principal_email_address',
        detection_1_outcomes_4_value:
          'sa-cron-vm@scce-lab-401713.iam.gserviceaccount.com',
        detection_1_outcomes_4_source: 'udm.principal.user.email_addresses',
        detection_1_outcomes_5_key: 'risk_score',
        detection_1_outcomes_5_value: '90',
        detection_1_outcomes_6_key: 'vendor_name',
        detection_1_outcomes_6_value: 'Google',
        detection_1_outcomes_7_key: 'product_name',
        detection_1_outcomes_7_value: 'Security Command Center',
        detection_1_ruleSet: '92f84c0d-678c-c2ba-fd76-9baa399885a2',
        detection_1_ruleSetDisplayName:
          'CDIR SCC Enhanced Defense Discovery Alerts',
        detection_1_riskScore: '90',
        detection_1_rulesetCategoryDisplayName: 'Cloud Threats',
        createdTime: '2024-02-02T11:05:32.43988Z',
        lastUpdatedTime: '2024-02-02T11:05:32.43988Z',
        id: 'de_bd51e7b7-3370-44c0-c738-2f8bcf5b3dd6',
        timeWindow_startTime: '2024-02-02T09:36:00Z',
        timeWindow_endTime: '2024-02-02T10:06:00Z',
        detectionTime: '2024-02-02T10:06:00Z',
        tags_1: 'TA0007',
        tags_2: 'T1069.003',
        alert_type: 'RULE',
        event_type: 'USER_RESOURCE_UPDATE_CONTENT',
        event_category: 'USER',
        event_principal_ip: '',
        event_principal_user_emailAddresses:
          'sa-cron-vm@scce-lab-401713.iam.gserviceaccount.com',
        event_principal_user_attribute_labels_authorization_granted:
          'true, true, true',
        'event_principal_labels_requestMetadata.callerIp':
          'Request came from a GCE VM in the same organization. : REPLACED',
        'event_principal_labels_requestMetadata.callerNetwork':
          'Request originated from a GCE VM or an on-prem VM behind a VPN, and the log was enhanced with additional information : REPLACED',
        event_target_resource_attribute_labels_rc_service:
          'serviceusage.googleapis.com',
        event_target_resource_attribute_labels_request_type:
          'type.googleapis.com/google.api.serviceusage.v1.EnableServiceRequest',
        event_target_resource_attribute_labels_req_name:
          'projects/dummyProject/services/cloudresourcemanager.googleapis.com',
        event_target_resource_attribute_labels_rc_method:
          'google.api.serviceusage.v1.ServiceUsage.EnableService',
        event_target_resource_attribute_labels_res_type:
          'type.googleapis.com/google.api.serviceusage.v1.EnableServiceResponse',
        event_about_labels_type:
          'type.googleapis.com/google.cloud.audit.AuditLog',
        event_about_labels_operation_first: 'true',
        event_about_labels_operation_id: 'operations/noop.DONE_OPERATION',
        event_about_labels_operation_last: 'true',
        event_about_labels_operation_producer: 'serviceusage.googleapis.com',
        event_about_labels_caller_network:
          '//compute.googleapis.com/projects/dummyProject/global/networks/__unknown__',
        event_securityResult_detectionFields_resource_name:
          'projects/dummyProject/services/cloudresourcemanager.googleapis.com',
        event_securityResult_detectionFields_resource:
          'services/cloudresourcemanager.googleapis.com, projectnumbers/429213313266/services/cloudresourcemanager.googleapis.com, projectnumbers/429213313266/services/cloudresourcemanager.googleapis.com',
        detection_detectionFields_service_account:
          'sa-cron-vm@scce-lab-401713.iam.gserviceaccount.com',
        detection_ruleLabels_reference:
          'https://cloud.google.com/security-command-center/docs/how-to-investigate-threats#service_account_self-investigation',
        detection_ruleLabels_rule_name:
          'SCC: Discovery: Service Account Self-Investigation with Resource Creation',
        detection_outcomes_roles: 'roles/storage.objectAdmin',
        detection_outcomes_principal_email_address:
          'sa-cron-vm@scce-lab-401713.iam.gserviceaccount.com',
        detection_outcomes_risk_score: '90',
        detection_outcomes_vendor_name: 'Google',
        detection_outcomes_product_name: 'Security Command Center',
      },
      Environment: null,
      SourceSystemName: null,
      Extensions: [],
    },
    {
      _fields: {
        BaseEventIds: [],
        ParentEventId: 0,
        DeviceVendor: 'Google Chronicle',
        DeviceProduct: 'RULE',
        DeviceEventClassId: 'USER_RESOURCE_CREATION',
      },
      _rawDataFields: {
        event_metadata_productLogId: 'vd8c62e14g32',
        event_metadata_eventTimestamp: '2024-02-02T10:05:10.128987Z',
        event_metadata_collectedTimestamp: '2024-02-02T10:05:10.469687373Z',
        event_metadata_eventType: 'USER_RESOURCE_CREATION',
        event_metadata_vendorName: 'Google Cloud Platform',
        event_metadata_productName: 'BigQuery',
        event_metadata_productEventType:
          'google.cloud.bigquery.v2.DatasetService.InsertDataset',
        event_metadata_urlBackToProduct:
          'projects/dummyProject/logs/cloudaudit.googleapis.com%2Factivity',
        event_metadata_ingestedTimestamp: '2024-02-02T10:05:14.039828Z',
        event_metadata_id: 'AAAAAMcawcMNJMNF/vmKgTCoBK4AAAAADgAAAAAAAAA=',
        event_metadata_logType: 'GCP_CLOUDAUDIT',
        event_metadata_baseLabels_logTypes_1: 'GCP_CLOUDAUDIT',
        event_metadata_baseLabels_allowScopedAccess: 'True',
        event_metadata_enrichmentLabels_logTypes_1: 'GCP_IAM_ANALYSIS',
        event_metadata_enrichmentLabels_logTypes_2: 'GCP_IAM_CONTEXT',
        event_metadata_enrichmentLabels_allowScopedAccess: 'True',
        'event_additional_requestMetadata.callerNetwork_1':
          'Request originated from a GCE VM or an on-prem VM behind a VPN, and the log was enhanced with additional information : REPLACED',
        event_additional_type:
          'type.googleapis.com/google.cloud.audit.AuditLog',
        event_additional_caller_network:
          '//compute.googleapis.com/projects/dummyProject/global/networks/__unknown__',
        event_additional_metadata_type:
          'type.googleapis.com/google.cloud.audit.BigQueryAuditMetadata',
        'event_additional_requestMetadata.callerIp_0':
          'Request came from a GCE VM in the same organization. : REPLACED',
        event_principal_hostname: '10.1.0.8',
        event_principal_user_userid: 'terraform-sa',
        event_principal_user_userDisplayName:
          'A SA to run the vm that refresh threats and resources',
        event_principal_user_emailAddresses_1:
          'sa-cron-vm@scce-lab-401713.iam.gserviceaccount.com',
        event_principal_user_emailAddresses_2:
          'sa-cron-vm@scce-lab-401713.iam.gserviceaccount.com',
        event_principal_user_emailAddresses_3:
          'terraform-sa@scce-lab-401713.iam.gserviceaccount.com',
        event_principal_user_emailAddresses_4:
          'sa-cron-vm@scce-lab-401713.iam.gserviceaccount.com',
        event_principal_user_productObjectId: '100282268471516296206',
        event_principal_user_attribute_cloud_environment:
          'GOOGLE_CLOUD_PLATFORM',
        event_principal_user_attribute_roles_1_name:
          'roles/storage.objectAdmin',
        event_principal_user_attribute_roles_1_type: 'SERVICE_ACCOUNT',
        event_principal_user_attribute_permissions_1_name:
          'bigquery.datasets.create',
        event_principal_ip_1: '10.1.0.8',
        event_principal_asset_hostname: '10.1.0.8',
        event_target_user_userid:
          'terraform-sa@scce-lab-401713.iam.gserviceaccount.com',
        event_target_application: 'bigquery.googleapis.com',
        event_target_resource_name: 'sccdemodataset',
        event_target_resource_resourceType: 'DATABASE',
        event_target_resource_resourceSubtype: 'bigquery_dataset',
        event_target_resource_productObjectId: 'sccdemodataset',
        event_target_cloud_project_name: 'scce-lab-401713',
        event_target_resourceAncestors_1_resourceType: 'DATABASE',
        event_target_resourceAncestors_2_name: 'scce-lab-401713',
        event_target_resourceAncestors_2_resourceType: 'CLOUD_PROJECT',
        event_securityResult_1_categoryDetails_1:
          'projects/dummyProject/logs/cloudaudit.googleapis.com%2Factivity',
        event_securityResult_1_description: 'CREATE',
        event_securityResult_1_action_1: 'ALLOW',
        event_securityResult_1_severity: 'INFORMATIONAL',
        event_network_http_userAgent:
          'google-cloud-sdk462.0.1 (gzip),gzip(gfe)',
        event_network_http_parsedUserAgent_family: 'USER_DEFINED',
        event_network_http_parsedUserAgent_device: 'google-cloud-sdk462.0.1',
        type: 'GCTI_FINDING',
        detection_1_ruleName:
          'SCC: Discovery: Service Account Self-Investigation with Resource Creation',
        detection_1_summary: 'Rule Detection',
        detection_1_description:
          'Detection of an IAM service account credential that is used to investigate the roles and permissions associated with that same service account',
        detection_1_severity: 'HIGH',
        detection_1_urlBackToProduct:
          'https://gglwl.backstory.chronicle.security/alert?alertId=de_bd51e7b7-3370-44c0-c738-2f8bcf5b3dd6',
        detection_1_ruleId: 'ur_c512c6b6-56fa-41d5-aeae-b01b2d52cfe8',
        detection_1_alertState: 'ALERTING',
        detection_1_ruleType: 'MULTI_EVENT',
        detection_1_detectionFields_1_key: 'service_account',
        detection_1_detectionFields_1_value:
          'sa-cron-vm@scce-lab-401713.iam.gserviceaccount.com',
        detection_1_detectionFields_1_source:
          'udm.principal.user.email_addresses',
        detection_1_ruleLabels_1_key: 'reference',
        detection_1_ruleLabels_1_value:
          'https://cloud.google.com/security-command-center/docs/how-to-investigate-threats#service_account_self-investigation',
        detection_1_ruleLabels_2_key: 'rule_name',
        detection_1_ruleLabels_2_value:
          'SCC: Discovery: Service Account Self-Investigation with Resource Creation',
        detection_1_outcomes_1_key: 'roles',
        detection_1_outcomes_1_value: 'roles/storage.objectAdmin',
        detection_1_outcomes_2_key: 'group_memberships',
        detection_1_outcomes_3_key: 'ip',
        detection_1_outcomes_3_source: 'udm.principal.ip',
        detection_1_outcomes_4_key: 'principal_email_address',
        detection_1_outcomes_4_value:
          'sa-cron-vm@scce-lab-401713.iam.gserviceaccount.com',
        detection_1_outcomes_4_source: 'udm.principal.user.email_addresses',
        detection_1_outcomes_5_key: 'risk_score',
        detection_1_outcomes_5_value: '90',
        detection_1_outcomes_6_key: 'vendor_name',
        detection_1_outcomes_6_value: 'Google',
        detection_1_outcomes_7_key: 'product_name',
        detection_1_outcomes_7_value: 'Security Command Center',
        detection_1_ruleSet: '92f84c0d-678c-c2ba-fd76-9baa399885a2',
        detection_1_ruleSetDisplayName:
          'CDIR SCC Enhanced Defense Discovery Alerts',
        detection_1_riskScore: '90',
        detection_1_rulesetCategoryDisplayName: 'Cloud Threats',
        createdTime: '2024-02-02T11:05:32.43988Z',
        lastUpdatedTime: '2024-02-02T11:05:32.43988Z',
        id: 'de_bd51e7b7-3370-44c0-c738-2f8bcf5b3dd6',
        timeWindow_startTime: '2024-02-02T09:36:00Z',
        timeWindow_endTime: '2024-02-02T10:06:00Z',
        detectionTime: '2024-02-02T10:06:00Z',
        tags_1: 'TA0007',
        tags_2: 'T1069.003',
        alert_type: 'RULE',
        event_type: 'USER_RESOURCE_CREATION',
        event_category: 'USER',
        event_principal_ip: '10.1.0.8',
        event_principal_user_emailAddresses:
          'sa-cron-vm@scce-lab-401713.iam.gserviceaccount.com',
        event_principal_user_attribute_labels_authorization_granted: 'true',
        'event_principal_labels_requestMetadata.callerIp':
          'Request came from a GCE VM in the same organization. : REPLACED',
        'event_principal_labels_requestMetadata.callerNetwork':
          'Request originated from a GCE VM or an on-prem VM behind a VPN, and the log was enhanced with additional information : REPLACED',
        event_about_labels_type:
          'type.googleapis.com/google.cloud.audit.AuditLog',
        event_about_labels_metadata_type:
          'type.googleapis.com/google.cloud.audit.BigQueryAuditMetadata',
        event_about_labels_caller_network:
          '//compute.googleapis.com/projects/dummyProject/global/networks/__unknown__',
        event_securityResult_detectionFields_resource_name:
          'projects/dummyProject/datasets/sccdemodataset',
        event_securityResult_detectionFields_resource:
          'projects/dummyProject//cloud.google.com/security-command-center/docs/how-to-investigate-threats#service_account_self-investigation',
        detection_ruleLabels_rule_name:
          'SCC: Discovery: Service Account Self-Investigation with Resource Creation',
        detection_outcomes_roles: 'roles/storage.objectAdmin',
        detection_outcomes_principal_email_address:
          'sa-cron-vm@scce-lab-401713.iam.gserviceaccount.com',
        detection_outcomes_risk_score: '90',
        detection_outcomes_vendor_name: 'Google',
        detection_outcomes_product_name: 'Security Command Center',
      },
      Environment: null,
      SourceSystemName: null,
      Extensions: [],
    },
    {
      _fields: {
        BaseEventIds: [],
        ParentEventId: 0,
        DeviceVendor: 'Google Chronicle',
        DeviceProduct: 'RULE',
        DeviceEventClassId: 'USER_RESOURCE_CREATION',
      },
      _rawDataFields: {
        event_metadata_productLogId: 'vd8c62e14g32',
        event_metadata_eventTimestamp: '2024-02-02T10:05:10.128987Z',
        event_metadata_collectedTimestamp: '2024-02-02T10:05:10.469687373Z',
        event_metadata_eventType: 'USER_RESOURCE_CREATION',
        event_metadata_vendorName: 'Google Cloud Platform',
        event_metadata_productName: 'BigQuery',
        event_metadata_productEventType:
          'google.cloud.bigquery.v2.DatasetService.InsertDataset',
        event_metadata_urlBackToProduct:
          'projects/dummyProject/logs/cloudaudit.googleapis.com%2Factivity',
        event_metadata_ingestedTimestamp: '2024-02-02T10:05:14.039828Z',
        event_metadata_id: 'AAAAAMcawcMNJMNF/vmKgTCoBK4AAAAADgAAAAAAAAA=',
        event_metadata_logType: 'GCP_CLOUDAUDIT',
        event_metadata_baseLabels_logTypes_1: 'GCP_CLOUDAUDIT',
        event_metadata_baseLabels_allowScopedAccess: 'True',
        event_metadata_enrichmentLabels_logTypes_1: 'GCP_IAM_ANALYSIS',
        event_metadata_enrichmentLabels_logTypes_2: 'GCP_IAM_CONTEXT',
        event_metadata_enrichmentLabels_allowScopedAccess: 'True',
        'event_additional_requestMetadata.callerNetwork_1':
          'Request originated from a GCE VM or an on-prem VM behind a VPN, and the log was enhanced with additional information : REPLACED',
        event_additional_type:
          'type.googleapis.com/google.cloud.audit.AuditLog',
        event_additional_caller_network:
          '//compute.googleapis.com/projects/dummyProject/global/networks/__unknown__',
        event_additional_metadata_type:
          'type.googleapis.com/google.cloud.audit.BigQueryAuditMetadata',
        'event_additional_requestMetadata.callerIp_0':
          'Request came from a GCE VM in the same organization. : REPLACED',
        event_principal_hostname: '10.1.0.8',
        event_principal_user_userid: 'terraform-sa',
        event_principal_user_userDisplayName:
          'A SA to run the vm that refresh threats and resources',
        event_principal_user_emailAddresses_1:
          'sa-cron-vm@scce-lab-401713.iam.gserviceaccount.com',
        event_principal_user_emailAddresses_2:
          'sa-cron-vm@scce-lab-401713.iam.gserviceaccount.com',
        event_principal_user_emailAddresses_3:
          'terraform-sa@scce-lab-401713.iam.gserviceaccount.com',
        event_principal_user_emailAddresses_4:
          'sa-cron-vm@scce-lab-401713.iam.gserviceaccount.com',
        event_principal_user_productObjectId: '100282268471516296206',
        event_principal_user_attribute_cloud_environment:
          'GOOGLE_CLOUD_PLATFORM',
        event_principal_user_attribute_roles_1_name:
          'roles/storage.objectAdmin',
        event_principal_user_attribute_roles_1_type: 'SERVICE_ACCOUNT',
        event_principal_user_attribute_permissions_1_name:
          'bigquery.datasets.create',
        event_principal_ip_1: '10.1.0.8',
        event_principal_asset_hostname: '10.1.0.8',
        event_target_user_userid:
          'terraform-sa@scce-lab-401713.iam.gserviceaccount.com',
        event_target_application: 'bigquery.googleapis.com',
        event_target_resource_name: 'sccdemodataset',
        event_target_resource_resourceType: 'DATABASE',
        event_target_resource_resourceSubtype: 'bigquery_dataset',
        event_target_resource_productObjectId: 'sccdemodataset',
        event_target_cloud_project_name: 'scce-lab-401713',
        event_target_resourceAncestors_1_resourceType: 'DATABASE',
        event_target_resourceAncestors_2_name: 'scce-lab-401713',
        event_target_resourceAncestors_2_resourceType: 'CLOUD_PROJECT',
        event_securityResult_1_categoryDetails_1:
          'projects/dummyProject/logs/cloudaudit.googleapis.com%2Factivity',
        event_securityResult_1_description: 'CREATE',
        event_securityResult_1_action_1: 'ALLOW',
        event_securityResult_1_severity: 'INFORMATIONAL',
        event_network_http_userAgent:
          'google-cloud-sdk462.0.1 (gzip),gzip(gfe)',
        event_network_http_parsedUserAgent_family: 'USER_DEFINED',
        event_network_http_parsedUserAgent_device: 'google-cloud-sdk462.0.1',
        type: 'GCTI_FINDING',
        detection_1_ruleName:
          'SCC: Discovery: Service Account Self-Investigation with Resource Creation',
        detection_1_summary: 'Rule Detection',
        detection_1_description:
          'Detection of an IAM service account credential that is used to investigate the roles and permissions associated with that same service account',
        detection_1_severity: 'HIGH',
        detection_1_urlBackToProduct:
          'https://gglwl.backstory.chronicle.security/alert?alertId=de_bd51e7b7-3370-44c0-c738-2f8bcf5b3dd6',
        detection_1_ruleId: 'ur_c512c6b6-56fa-41d5-aeae-b01b2d52cfe8',
        detection_1_alertState: 'ALERTING',
        detection_1_ruleType: 'MULTI_EVENT',
        detection_1_detectionFields_1_key: 'service_account',
        detection_1_detectionFields_1_value:
          'sa-cron-vm@scce-lab-401713.iam.gserviceaccount.com',
        detection_1_detectionFields_1_source:
          'udm.principal.user.email_addresses',
        detection_1_ruleLabels_1_key: 'reference',
        detection_1_ruleLabels_1_value:
          'https://cloud.google.com/security-command-center/docs/how-to-investigate-threats#service_account_self-investigation',
        detection_1_ruleLabels_2_key: 'rule_name',
        detection_1_ruleLabels_2_value:
          'SCC: Discovery: Service Account Self-Investigation with Resource Creation',
        detection_1_outcomes_1_key: 'roles',
        detection_1_outcomes_1_value: 'roles/storage.objectAdmin',
        detection_1_outcomes_2_key: 'group_memberships',
        detection_1_outcomes_3_key: 'ip',
        detection_1_outcomes_3_source: 'udm.principal.ip',
        detection_1_outcomes_4_key: 'principal_email_address',
        detection_1_outcomes_4_value:
          'sa-cron-vm@scce-lab-401713.iam.gserviceaccount.com',
        detection_1_outcomes_4_source: 'udm.principal.user.email_addresses',
        detection_1_outcomes_5_key: 'risk_score',
        detection_1_outcomes_5_value: '90',
        detection_1_outcomes_6_key: 'vendor_name',
        detection_1_outcomes_6_value: 'Google',
        detection_1_outcomes_7_key: 'product_name',
        detection_1_outcomes_7_value: 'Security Command Center',
        detection_1_ruleSet: '92f84c0d-678c-c2ba-fd76-9baa399885a2',
        detection_1_ruleSetDisplayName:
          'CDIR SCC Enhanced Defense Discovery Alerts',
        detection_1_riskScore: '90',
        detection_1_rulesetCategoryDisplayName: 'Cloud Threats',
        createdTime: '2024-02-02T11:05:32.43988Z',
        lastUpdatedTime: '2024-02-02T11:05:32.43988Z',
        id: 'de_bd51e7b7-3370-44c0-c738-2f8bcf5b3dd6',
        timeWindow_startTime: '2024-02-02T09:36:00Z',
        timeWindow_endTime: '2024-02-02T10:06:00Z',
        detectionTime: '2024-02-02T10:06:00Z',
        tags_1: 'TA0007',
        tags_2: 'T1069.003',
        alert_type: 'RULE',
        event_type: 'USER_RESOURCE_CREATION',
        event_category: 'USER',
        event_principal_ip: '',
        event_principal_user_emailAddresses:
          'sa-cron-vm@scce-lab-401713.iam.gserviceaccount.com',
        event_principal_user_attribute_labels_authorization_granted: 'true',
        'event_principal_labels_requestMetadata.callerIp':
          'Request came from a GCE VM in the same organization. : REPLACED',
        'event_principal_labels_requestMetadata.callerNetwork':
          'Request originated from a GCE VM or an on-prem VM behind a VPN, and the log was enhanced with additional information : REPLACED',
        event_about_labels_type:
          'type.googleapis.com/google.cloud.audit.AuditLog',
        event_about_labels_metadata_type:
          'type.googleapis.com/google.cloud.audit.BigQueryAuditMetadata',
        event_about_labels_caller_network:
          '//compute.googleapis.com/projects/dummyProject/global/networks/__unknown__',
        event_securityResult_detectionFields_resource_name:
          'projects/dummyProject/datasets/sccdemodataset',
        event_securityResult_detectionFields_resource:
          'projects/dummyProject//cloud.google.com/security-command-center/docs/how-to-investigate-threats#service_account_self-investigation',
        detection_ruleLabels_rule_name:
          'SCC: Discovery: Service Account Self-Investigation with Resource Creation',
        detection_outcomes_roles: 'roles/storage.objectAdmin',
        detection_outcomes_principal_email_address:
          'sa-cron-vm@scce-lab-401713.iam.gserviceaccount.com',
        detection_outcomes_risk_score: '90',
        detection_outcomes_vendor_name: 'Google',
        detection_outcomes_product_name: 'Security Command Center',
      },
      Environment: null,
      SourceSystemName: null,
      Extensions: [],
    },
    {
      _fields: {
        BaseEventIds: [],
        ParentEventId: 0,
        DeviceVendor: 'Google Chronicle',
        DeviceProduct: 'RULE',
        DeviceEventClassId: 'USER_RESOURCE_CREATION',
      },
      _rawDataFields: {
        event_metadata_productLogId: 'vd8c62e14g32',
        event_metadata_eventTimestamp: '2024-02-02T10:05:10.128987Z',
        event_metadata_collectedTimestamp: '2024-02-02T10:05:10.469687373Z',
        event_metadata_eventType: 'USER_RESOURCE_CREATION',
        event_metadata_vendorName: 'Google Cloud Platform',
        event_metadata_productName: 'BigQuery',
        event_metadata_productEventType:
          'google.cloud.bigquery.v2.DatasetService.InsertDataset',
        event_metadata_urlBackToProduct:
          'projects/dummyProject/logs/cloudaudit.googleapis.com%2Factivity',
        event_metadata_ingestedTimestamp: '2024-02-02T10:05:14.039828Z',
        event_metadata_id: 'AAAAAMcawcMNJMNF/vmKgTCoBK4AAAAADgAAAAAAAAA=',
        event_metadata_logType: 'GCP_CLOUDAUDIT',
        event_metadata_baseLabels_logTypes_1: 'GCP_CLOUDAUDIT',
        event_metadata_baseLabels_allowScopedAccess: 'True',
        event_metadata_enrichmentLabels_logTypes_1: 'GCP_IAM_ANALYSIS',
        event_metadata_enrichmentLabels_logTypes_2: 'GCP_IAM_CONTEXT',
        event_metadata_enrichmentLabels_allowScopedAccess: 'True',
        'event_additional_requestMetadata.callerNetwork_1':
          'Request originated from a GCE VM or an on-prem VM behind a VPN, and the log was enhanced with additional information : REPLACED',
        event_additional_type:
          'type.googleapis.com/google.cloud.audit.AuditLog',
        event_additional_caller_network:
          '//compute.googleapis.com/projects/dummyProject/global/networks/__unknown__',
        event_additional_metadata_type:
          'type.googleapis.com/google.cloud.audit.BigQueryAuditMetadata',
        'event_additional_requestMetadata.callerIp_0':
          'Request came from a GCE VM in the same organization. : REPLACED',
        event_principal_hostname: '10.1.0.8',
        event_principal_user_userid: 'terraform-sa',
        event_principal_user_userDisplayName:
          'A SA to run the vm that refresh threats and resources',
        event_principal_user_emailAddresses_1:
          'sa-cron-vm@scce-lab-401713.iam.gserviceaccount.com',
        event_principal_user_emailAddresses_2:
          'sa-cron-vm@scce-lab-401713.iam.gserviceaccount.com',
        event_principal_user_emailAddresses_3:
          'terraform-sa@scce-lab-401713.iam.gserviceaccount.com',
        event_principal_user_emailAddresses_4:
          'sa-cron-vm@scce-lab-401713.iam.gserviceaccount.com',
        event_principal_user_productObjectId: '100282268471516296206',
        event_principal_user_attribute_cloud_environment:
          'GOOGLE_CLOUD_PLATFORM',
        event_principal_user_attribute_roles_1_name:
          'roles/storage.objectAdmin',
        event_principal_user_attribute_roles_1_type: 'SERVICE_ACCOUNT',
        event_principal_user_attribute_permissions_1_name:
          'bigquery.datasets.create',
        event_principal_ip_1: '10.1.0.8',
        event_principal_asset_hostname: '10.1.0.8',
        event_target_user_userid:
          'terraform-sa@scce-lab-401713.iam.gserviceaccount.com',
        event_target_application: 'bigquery.googleapis.com',
        event_target_resource_name: 'sccdemodataset',
        event_target_resource_resourceType: 'DATABASE',
        event_target_resource_resourceSubtype: 'bigquery_dataset',
        event_target_resource_productObjectId: 'sccdemodataset',
        event_target_cloud_project_name: 'scce-lab-401713',
        event_target_resourceAncestors_1_resourceType: 'DATABASE',
        event_target_resourceAncestors_2_name: 'scce-lab-401713',
        event_target_resourceAncestors_2_resourceType: 'CLOUD_PROJECT',
        event_securityResult_1_categoryDetails_1:
          'projects/dummyProject/logs/cloudaudit.googleapis.com%2Factivity',
        event_securityResult_1_description: 'CREATE',
        event_securityResult_1_action_1: 'ALLOW',
        event_securityResult_1_severity: 'INFORMATIONAL',
        event_network_http_userAgent:
          'google-cloud-sdk462.0.1 (gzip),gzip(gfe)',
        event_network_http_parsedUserAgent_family: 'USER_DEFINED',
        event_network_http_parsedUserAgent_device: 'google-cloud-sdk462.0.1',
        type: 'GCTI_FINDING',
        detection_1_ruleName:
          'SCC: Discovery: Service Account Self-Investigation with Resource Creation',
        detection_1_summary: 'Rule Detection',
        detection_1_description:
          'Detection of an IAM service account credential that is used to investigate the roles and permissions associated with that same service account',
        detection_1_severity: 'HIGH',
        detection_1_urlBackToProduct:
          'https://gglwl.backstory.chronicle.security/alert?alertId=de_bd51e7b7-3370-44c0-c738-2f8bcf5b3dd6',
        detection_1_ruleId: 'ur_c512c6b6-56fa-41d5-aeae-b01b2d52cfe8',
        detection_1_alertState: 'ALERTING',
        detection_1_ruleType: 'MULTI_EVENT',
        detection_1_detectionFields_1_key: 'service_account',
        detection_1_detectionFields_1_value:
          'sa-cron-vm@scce-lab-401713.iam.gserviceaccount.com',
        detection_1_detectionFields_1_source:
          'udm.principal.user.email_addresses',
        detection_1_ruleLabels_1_key: 'reference',
        detection_1_ruleLabels_1_value:
          'https://cloud.google.com/security-command-center/docs/how-to-investigate-threats#service_account_self-investigation',
        detection_1_ruleLabels_2_key: 'rule_name',
        detection_1_ruleLabels_2_value:
          'SCC: Discovery: Service Account Self-Investigation with Resource Creation',
        detection_1_outcomes_1_key: 'roles',
        detection_1_outcomes_1_value: 'roles/storage.objectAdmin',
        detection_1_outcomes_2_key: 'group_memberships',
        detection_1_outcomes_3_key: 'ip',
        detection_1_outcomes_3_source: 'udm.principal.ip',
        detection_1_outcomes_4_key: 'principal_email_address',
        detection_1_outcomes_4_value:
          'sa-cron-vm@scce-lab-401713.iam.gserviceaccount.com',
        detection_1_outcomes_4_source: 'udm.principal.user.email_addresses',
        detection_1_outcomes_5_key: 'risk_score',
        detection_1_outcomes_5_value: '90',
        detection_1_outcomes_6_key: 'vendor_name',
        detection_1_outcomes_6_value: 'Google',
        detection_1_outcomes_7_key: 'product_name',
        detection_1_outcomes_7_value: 'Security Command Center',
        detection_1_ruleSet: '92f84c0d-678c-c2ba-fd76-9baa399885a2',
        detection_1_ruleSetDisplayName:
          'CDIR SCC Enhanced Defense Discovery Alerts',
        detection_1_riskScore: '90',
        detection_1_rulesetCategoryDisplayName: 'Cloud Threats',
        createdTime: '2024-02-02T11:05:32.43988Z',
        lastUpdatedTime: '2024-02-02T11:05:32.43988Z',
        id: 'de_bd51e7b7-3370-44c0-c738-2f8bcf5b3dd6',
        timeWindow_startTime: '2024-02-02T09:36:00Z',
        timeWindow_endTime: '2024-02-02T10:06:00Z',
        detectionTime: '2024-02-02T10:06:00Z',
        tags_1: 'TA0007',
        tags_2: 'T1069.003',
        alert_type: 'RULE',
        event_type: 'USER_RESOURCE_CREATION',
        event_category: 'USER',
        event_principal_ip: '',
        event_principal_user_emailAddresses:
          'terraform-sa@scce-lab-401713.iam.gserviceaccount.com',
        event_principal_user_attribute_labels_authorization_granted: 'true',
        'event_principal_labels_requestMetadata.callerIp':
          'Request came from a GCE VM in the same organization. : REPLACED',
        'event_principal_labels_requestMetadata.callerNetwork':
          'Request originated from a GCE VM or an on-prem VM behind a VPN, and the log was enhanced with additional information : REPLACED',
        event_about_labels_type:
          'type.googleapis.com/google.cloud.audit.AuditLog',
        event_about_labels_metadata_type:
          'type.googleapis.com/google.cloud.audit.BigQueryAuditMetadata',
        event_about_labels_caller_network:
          '//compute.googleapis.com/projects/dummyProject/global/networks/__unknown__',
        event_securityResult_detectionFields_resource_name:
          'projects/dummyProject/datasets/sccdemodataset',
        event_securityResult_detectionFields_resource:
          'projects/dummyProject//cloud.google.com/security-command-center/docs/how-to-investigate-threats#service_account_self-investigation',
        detection_ruleLabels_rule_name:
          'SCC: Discovery: Service Account Self-Investigation with Resource Creation',
        detection_outcomes_roles: 'roles/storage.objectAdmin',
        detection_outcomes_principal_email_address:
          'sa-cron-vm@scce-lab-401713.iam.gserviceaccount.com',
        detection_outcomes_risk_score: '90',
        detection_outcomes_vendor_name: 'Google',
        detection_outcomes_product_name: 'Security Command Center',
      },
      Environment: null,
      SourceSystemName: null,
      Extensions: [],
    },
    {
      _fields: {
        BaseEventIds: [],
        ParentEventId: 0,
        DeviceVendor: 'Google Chronicle',
        DeviceProduct: 'RULE',
        DeviceEventClassId: 'USER_RESOURCE_CREATION',
      },
      _rawDataFields: {
        event_metadata_productLogId: 'vd8c62e14g32',
        event_metadata_eventTimestamp: '2024-02-02T10:05:10.128987Z',
        event_metadata_collectedTimestamp: '2024-02-02T10:05:10.469687373Z',
        event_metadata_eventType: 'USER_RESOURCE_CREATION',
        event_metadata_vendorName: 'Google Cloud Platform',
        event_metadata_productName: 'BigQuery',
        event_metadata_productEventType:
          'google.cloud.bigquery.v2.DatasetService.InsertDataset',
        event_metadata_urlBackToProduct:
          'projects/dummyProject/logs/cloudaudit.googleapis.com%2Factivity',
        event_metadata_ingestedTimestamp: '2024-02-02T10:05:14.039828Z',
        event_metadata_id: 'AAAAAMcawcMNJMNF/vmKgTCoBK4AAAAADgAAAAAAAAA=',
        event_metadata_logType: 'GCP_CLOUDAUDIT',
        event_metadata_baseLabels_logTypes_1: 'GCP_CLOUDAUDIT',
        event_metadata_baseLabels_allowScopedAccess: 'True',
        event_metadata_enrichmentLabels_logTypes_1: 'GCP_IAM_ANALYSIS',
        event_metadata_enrichmentLabels_logTypes_2: 'GCP_IAM_CONTEXT',
        event_metadata_enrichmentLabels_allowScopedAccess: 'True',
        'event_additional_requestMetadata.callerNetwork_1':
          'Request originated from a GCE VM or an on-prem VM behind a VPN, and the log was enhanced with additional information : REPLACED',
        event_additional_type:
          'type.googleapis.com/google.cloud.audit.AuditLog',
        event_additional_caller_network:
          '//compute.googleapis.com/projects/dummyProject/global/networks/__unknown__',
        event_additional_metadata_type:
          'type.googleapis.com/google.cloud.audit.BigQueryAuditMetadata',
        'event_additional_requestMetadata.callerIp_0':
          'Request came from a GCE VM in the same organization. : REPLACED',
        event_principal_hostname: '10.1.0.8',
        event_principal_user_userid: 'terraform-sa',
        event_principal_user_userDisplayName:
          'A SA to run the vm that refresh threats and resources',
        event_principal_user_emailAddresses_1:
          'sa-cron-vm@scce-lab-401713.iam.gserviceaccount.com',
        event_principal_user_emailAddresses_2:
          'sa-cron-vm@scce-lab-401713.iam.gserviceaccount.com',
        event_principal_user_emailAddresses_3:
          'terraform-sa@scce-lab-401713.iam.gserviceaccount.com',
        event_principal_user_emailAddresses_4:
          'sa-cron-vm@scce-lab-401713.iam.gserviceaccount.com',
        event_principal_user_productObjectId: '100282268471516296206',
        event_principal_user_attribute_cloud_environment:
          'GOOGLE_CLOUD_PLATFORM',
        event_principal_user_attribute_roles_1_name:
          'roles/storage.objectAdmin',
        event_principal_user_attribute_roles_1_type: 'SERVICE_ACCOUNT',
        event_principal_user_attribute_permissions_1_name:
          'bigquery.datasets.create',
        event_principal_ip_1: '10.1.0.8',
        event_principal_asset_hostname: '10.1.0.8',
        event_target_user_userid:
          'terraform-sa@scce-lab-401713.iam.gserviceaccount.com',
        event_target_application: 'bigquery.googleapis.com',
        event_target_resource_name: 'sccdemodataset',
        event_target_resource_resourceType: 'DATABASE',
        event_target_resource_resourceSubtype: 'bigquery_dataset',
        event_target_resource_productObjectId: 'sccdemodataset',
        event_target_cloud_project_name: 'scce-lab-401713',
        event_target_resourceAncestors_1_resourceType: 'DATABASE',
        event_target_resourceAncestors_2_name: 'scce-lab-401713',
        event_target_resourceAncestors_2_resourceType: 'CLOUD_PROJECT',
        event_securityResult_1_categoryDetails_1:
          'projects/dummyProject/logs/cloudaudit.googleapis.com%2Factivity',
        event_securityResult_1_description: 'CREATE',
        event_securityResult_1_action_1: 'ALLOW',
        event_securityResult_1_severity: 'INFORMATIONAL',
        event_network_http_userAgent:
          'google-cloud-sdk462.0.1 (gzip),gzip(gfe)',
        event_network_http_parsedUserAgent_family: 'USER_DEFINED',
        event_network_http_parsedUserAgent_device: 'google-cloud-sdk462.0.1',
        type: 'GCTI_FINDING',
        detection_1_ruleName:
          'SCC: Discovery: Service Account Self-Investigation with Resource Creation',
        detection_1_summary: 'Rule Detection',
        detection_1_description:
          'Detection of an IAM service account credential that is used to investigate the roles and permissions associated with that same service account',
        detection_1_severity: 'HIGH',
        detection_1_urlBackToProduct:
          'https://gglwl.backstory.chronicle.security/alert?alertId=de_bd51e7b7-3370-44c0-c738-2f8bcf5b3dd6',
        detection_1_ruleId: 'ur_c512c6b6-56fa-41d5-aeae-b01b2d52cfe8',
        detection_1_alertState: 'ALERTING',
        detection_1_ruleType: 'MULTI_EVENT',
        detection_1_detectionFields_1_key: 'service_account',
        detection_1_detectionFields_1_value:
          'sa-cron-vm@scce-lab-401713.iam.gserviceaccount.com',
        detection_1_detectionFields_1_source:
          'udm.principal.user.email_addresses',
        detection_1_ruleLabels_1_key: 'reference',
        detection_1_ruleLabels_1_value:
          'https://cloud.google.com/security-command-center/docs/how-to-investigate-threats#service_account_self-investigation',
        detection_1_ruleLabels_2_key: 'rule_name',
        detection_1_ruleLabels_2_value:
          'SCC: Discovery: Service Account Self-Investigation with Resource Creation',
        detection_1_outcomes_1_key: 'roles',
        detection_1_outcomes_1_value: 'roles/storage.objectAdmin',
        detection_1_outcomes_2_key: 'group_memberships',
        detection_1_outcomes_3_key: 'ip',
        detection_1_outcomes_3_source: 'udm.principal.ip',
        detection_1_outcomes_4_key: 'principal_email_address',
        detection_1_outcomes_4_value:
          'sa-cron-vm@scce-lab-401713.iam.gserviceaccount.com',
        detection_1_outcomes_4_source: 'udm.principal.user.email_addresses',
        detection_1_outcomes_5_key: 'risk_score',
        detection_1_outcomes_5_value: '90',
        detection_1_outcomes_6_key: 'vendor_name',
        detection_1_outcomes_6_value: 'Google',
        detection_1_outcomes_7_key: 'product_name',
        detection_1_outcomes_7_value: 'Security Command Center',
        detection_1_ruleSet: '92f84c0d-678c-c2ba-fd76-9baa399885a2',
        detection_1_ruleSetDisplayName:
          'CDIR SCC Enhanced Defense Discovery Alerts',
        detection_1_riskScore: '90',
        detection_1_rulesetCategoryDisplayName: 'Cloud Threats',
        createdTime: '2024-02-02T11:05:32.43988Z',
        lastUpdatedTime: '2024-02-02T11:05:32.43988Z',
        id: 'de_bd51e7b7-3370-44c0-c738-2f8bcf5b3dd6',
        timeWindow_startTime: '2024-02-02T09:36:00Z',
        timeWindow_endTime: '2024-02-02T10:06:00Z',
        detectionTime: '2024-02-02T10:06:00Z',
        tags_1: 'TA0007',
        tags_2: 'T1069.003',
        alert_type: 'RULE',
        event_type: 'USER_RESOURCE_CREATION',
        event_category: 'USER',
        event_principal_ip: '',
        event_principal_user_emailAddresses:
          'sa-cron-vm@scce-lab-401713.iam.gserviceaccount.com',
        event_principal_user_attribute_labels_authorization_granted: 'true',
        'event_principal_labels_requestMetadata.callerIp':
          'Request came from a GCE VM in the same organization. : REPLACED',
        'event_principal_labels_requestMetadata.callerNetwork':
          'Request originated from a GCE VM or an on-prem VM behind a VPN, and the log was enhanced with additional information : REPLACED',
        event_about_labels_type:
          'type.googleapis.com/google.cloud.audit.AuditLog',
        event_about_labels_metadata_type:
          'type.googleapis.com/google.cloud.audit.BigQueryAuditMetadata',
        event_about_labels_caller_network:
          '//compute.googleapis.com/projects/dummyProject/global/networks/__unknown__',
        event_securityResult_detectionFields_resource_name:
          'projects/dummyProject/datasets/sccdemodataset',
        event_securityResult_detectionFields_resource:
          'projects/dummyProject//cloud.google.com/security-command-center/docs/how-to-investigate-threats#service_account_self-investigation',
        detection_ruleLabels_rule_name:
          'SCC: Discovery: Service Account Self-Investigation with Resource Creation',
        detection_outcomes_roles: 'roles/storage.objectAdmin',
        detection_outcomes_principal_email_address:
          'sa-cron-vm@scce-lab-401713.iam.gserviceaccount.com',
        detection_outcomes_risk_score: '90',
        detection_outcomes_vendor_name: 'Google',
        detection_outcomes_product_name: 'Security Command Center',
      },
      Environment: null,
      SourceSystemName: null,
      Extensions: [],
    },
    {
      _fields: {
        BaseEventIds: [],
        ParentEventId: 0,
        DeviceVendor: 'Google Chronicle',
        DeviceProduct: 'RULE',
        DeviceEventClassId: 'RESOURCE_DELETION',
      },
      _rawDataFields: {
        event_metadata_productLogId: '1gpwmqbekaw93',
        event_metadata_eventTimestamp: '2024-02-02T10:05:30.115158087Z',
        event_metadata_collectedTimestamp: '2024-02-02T10:05:31.792035518Z',
        event_metadata_eventType: 'RESOURCE_DELETION',
        event_metadata_vendorName: 'Google Cloud Platform',
        event_metadata_productName: 'Google Cloud Storage',
        event_metadata_productEventType: 'storage.buckets.delete',
        event_metadata_urlBackToProduct:
          'projects/dummyProject/logs/cloudaudit.googleapis.com%2Factivity',
        event_metadata_ingestedTimestamp: '2024-02-02T10:05:34.685986Z',
        event_metadata_id: 'AAAAAPM/L9OPWdfBQLmKTkZGCxkAAAAADgAAAAAAAAA=',
        event_metadata_logType: 'GCP_CLOUDAUDIT',
        event_metadata_baseLabels_logTypes_1: 'GCP_CLOUDAUDIT',
        event_metadata_baseLabels_allowScopedAccess: 'True',
        event_metadata_enrichmentLabels_logTypes_1: 'GCP_IAM_ANALYSIS',
        event_metadata_enrichmentLabels_logTypes_2: 'GCP_IAM_CONTEXT',
        event_metadata_enrichmentLabels_allowScopedAccess: 'True',
        event_additional_request_time: '2024-02-02T10:05:30.120690627Z',
        event_additional_type:
          'type.googleapis.com/google.cloud.audit.AuditLog',
        event_additional_caller_network:
          '//compute.googleapis.com/projects/dummyProject/global/networks/__unknown__',
        'event_additional_requestMetadata.callerIp_0':
          'Request came from a GCE VM in the same organization. : REPLACED',
        'event_additional_requestMetadata.callerNetwork_1':
          'Request originated from a GCE VM or an on-prem VM behind a VPN, and the log was enhanced with additional information : REPLACED',
        event_additional_request_attributes_time:
          '2024-02-02T10:05:30.120690627Z',
        event_principal_hostname: '10.1.0.8',
        event_principal_user_userid: 'terraform-sa',
        event_principal_user_userDisplayName: 'Terraform Service account',
        event_principal_user_emailAddresses_1:
          'terraform-sa@scce-lab-401713.iam.gserviceaccount.com',
        event_principal_user_emailAddresses_2:
          'terraform-sa@scce-lab-401713.iam.gserviceaccount.com',
        event_principal_user_emailAddresses_3:
          'terraform-sa@scce-lab-401713.iam.gserviceaccount.com',
        event_principal_user_emailAddresses_4:
          'sa-cron-vm@scce-lab-401713.iam.gserviceaccount.com',
        event_principal_user_productObjectId: '109464150361893883794',
        event_principal_user_attribute_cloud_environment:
          'GOOGLE_CLOUD_PLATFORM',
        event_principal_user_attribute_roles_1_name:
          'roles/resourcemanager.organizationAdmin',
        event_principal_user_attribute_roles_1_type: 'SERVICE_ACCOUNT',
        event_principal_user_attribute_permissions_1_name:
          'storage.buckets.delete',
        event_principal_ip_1: '10.1.0.8',
        event_principal_asset_hostname: '10.1.0.8',
        event_target_user_userid:
          'terraform-sa@scce-lab-401713.iam.gserviceaccount.com',
        event_target_file_fullPath:
          'projects/dummyProject/buckets/temp_49750abbbe5db43adf5aff877202b882061f1fd4',
        event_target_application: 'storage.googleapis.com',
        event_target_location_name: 'eu',
        event_target_resource_name:
          'temp_49750abbbe5db43adf5aff877202b882061f1fd4',
        event_target_resource_resourceType: 'STORAGE_BUCKET',
        event_target_resource_resourceSubtype: 'gcs_bucket',
        event_target_resource_attribute_cloud_availabilityZone: 'eu',
        event_target_cloud_project_name: 'scce-lab-401713',
        event_target_resourceAncestors_1_resourceType: 'STORAGE_BUCKET',
        event_target_resourceAncestors_2_name: 'scce-lab-401713',
        event_target_resourceAncestors_2_resourceType: 'CLOUD_PROJECT',
        event_securityResult_1_categoryDetails_1:
          'projects/dummyProject/logs/cloudaudit.googleapis.com%2Factivity',
        event_securityResult_1_action_1: 'ALLOW',
        event_securityResult_1_severity: 'INFORMATIONAL',
        event_network_http_userAgent:
          'google-cloud-sdk gcloud/462.0.1 command/gcloud.alpha.storage.rm invocation-id/1a47d07ffe8c4db39184772df2d92872 environment/GCE environment-version/None client-os/LINUX client-os-ver/5.10.0 client-pltf-arch/x86_64 interactive/False from-script/False python/3.11.7 term/xterm-256color (Linux 5.10.0-26-cloud-amd64),gzip(gfe)',
        event_network_http_parsedUserAgent_family: 'USER_DEFINED',
        type: 'GCTI_FINDING',
        detection_1_ruleName:
          'SCC: Discovery: Service Account Self-Investigation with Resource Creation',
        detection_1_summary: 'Rule Detection',
        detection_1_description:
          'Detection of an IAM service account credential that is used to investigate the roles and permissions associated with that same service account',
        detection_1_severity: 'HIGH',
        detection_1_urlBackToProduct:
          'https://gglwl.backstory.chronicle.security/alert?alertId=de_bd51e7b7-3370-44c0-c738-2f8bcf5b3dd6',
        detection_1_ruleId: 'ur_c512c6b6-56fa-41d5-aeae-b01b2d52cfe8',
        detection_1_alertState: 'ALERTING',
        detection_1_ruleType: 'MULTI_EVENT',
        detection_1_detectionFields_1_key: 'service_account',
        detection_1_detectionFields_1_value:
          'sa-cron-vm@scce-lab-401713.iam.gserviceaccount.com',
        detection_1_detectionFields_1_source:
          'udm.principal.user.email_addresses',
        detection_1_ruleLabels_1_key: 'reference',
        detection_1_ruleLabels_1_value:
          'https://cloud.google.com/security-command-center/docs/how-to-investigate-threats#service_account_self-investigation',
        detection_1_ruleLabels_2_key: 'rule_name',
        detection_1_ruleLabels_2_value:
          'SCC: Discovery: Service Account Self-Investigation with Resource Creation',
        detection_1_outcomes_1_key: 'roles',
        detection_1_outcomes_1_value: 'roles/storage.objectAdmin',
        detection_1_outcomes_2_key: 'group_memberships',
        detection_1_outcomes_3_key: 'ip',
        detection_1_outcomes_3_source: 'udm.principal.ip',
        detection_1_outcomes_4_key: 'principal_email_address',
        detection_1_outcomes_4_value:
          'sa-cron-vm@scce-lab-401713.iam.gserviceaccount.com',
        detection_1_outcomes_4_source: 'udm.principal.user.email_addresses',
        detection_1_outcomes_5_key: 'risk_score',
        detection_1_outcomes_5_value: '90',
        detection_1_outcomes_6_key: 'vendor_name',
        detection_1_outcomes_6_value: 'Google',
        detection_1_outcomes_7_key: 'product_name',
        detection_1_outcomes_7_value: 'Security Command Center',
        detection_1_ruleSet: '92f84c0d-678c-c2ba-fd76-9baa399885a2',
        detection_1_ruleSetDisplayName:
          'CDIR SCC Enhanced Defense Discovery Alerts',
        detection_1_riskScore: '90',
        detection_1_rulesetCategoryDisplayName: 'Cloud Threats',
        createdTime: '2024-02-02T11:05:32.43988Z',
        lastUpdatedTime: '2024-02-02T11:05:32.43988Z',
        id: 'de_bd51e7b7-3370-44c0-c738-2f8bcf5b3dd6',
        timeWindow_startTime: '2024-02-02T09:36:00Z',
        timeWindow_endTime: '2024-02-02T10:06:00Z',
        detectionTime: '2024-02-02T10:06:00Z',
        tags_1: 'TA0007',
        tags_2: 'T1069.003',
        alert_type: 'RULE',
        event_type: 'RESOURCE_DELETION',
        event_category: 'RESOURCE',
        event_principal_ip: '10.1.0.8',
        event_principal_user_emailAddresses:
          'terraform-sa@scce-lab-401713.iam.gserviceaccount.com',
        event_principal_user_attribute_labels_authorization_granted: 'true',
        'event_principal_labels_requestMetadata.callerIp':
          'Request came from a GCE VM in the same organization. : REPLACED',
        'event_principal_labels_requestMetadata.callerNetwork':
          'Request originated from a GCE VM or an on-prem VM behind a VPN, and the log was enhanced with additional information : REPLACED',
        event_principal_labels_request_attributes_time:
          '2024-02-02T10:05:30.120690627Z',
        event_about_labels_type:
          'type.googleapis.com/google.cloud.audit.AuditLog',
        event_about_labels_request_time: '2024-02-02T10:05:30.120690627Z',
        event_about_labels_caller_network:
          '//compute.googleapis.com/projects/dummyProject/global/networks/__unknown__',
        event_securityResult_detectionFields_resource_name:
          'projects/dummyProject/buckets/temp_49750abbbe5db43adf5aff877202b882061f1fd4',
        event_securityResult_detectionFields_resource:
          'projects/dummyProject/buckets/temp_49750abbbe5db43adf5aff877202b882061f1fd4',
        detection_detectionFields_service_account:
          'sa-cron-vm@scce-lab-401713.iam.gserviceaccount.com',
        detection_ruleLabels_reference:
          'https://cloud.google.com/security-command-center/docs/how-to-investigate-threats#service_account_self-investigation',
        detection_ruleLabels_rule_name:
          'SCC: Discovery: Service Account Self-Investigation with Resource Creation',
        detection_outcomes_roles: 'roles/storage.objectAdmin',
        detection_outcomes_principal_email_address:
          'sa-cron-vm@scce-lab-401713.iam.gserviceaccount.com',
        detection_outcomes_risk_score: '90',
        detection_outcomes_vendor_name: 'Google',
        detection_outcomes_product_name: 'Security Command Center',
      },
      Environment: null,
      SourceSystemName: null,
      Extensions: [],
    },
    {
      _fields: {
        BaseEventIds: [],
        ParentEventId: 0,
        DeviceVendor: 'Google Chronicle',
        DeviceProduct: 'RULE',
        DeviceEventClassId: 'RESOURCE_DELETION',
      },
      _rawDataFields: {
        event_metadata_productLogId: '1gpwmqbekaw93',
        event_metadata_eventTimestamp: '2024-02-02T10:05:30.115158087Z',
        event_metadata_collectedTimestamp: '2024-02-02T10:05:31.792035518Z',
        event_metadata_eventType: 'RESOURCE_DELETION',
        event_metadata_vendorName: 'Google Cloud Platform',
        event_metadata_productName: 'Google Cloud Storage',
        event_metadata_productEventType: 'storage.buckets.delete',
        event_metadata_urlBackToProduct:
          'projects/dummyProject/logs/cloudaudit.googleapis.com%2Factivity',
        event_metadata_ingestedTimestamp: '2024-02-02T10:05:34.685986Z',
        event_metadata_id: 'AAAAAPM/L9OPWdfBQLmKTkZGCxkAAAAADgAAAAAAAAA=',
        event_metadata_logType: 'GCP_CLOUDAUDIT',
        event_metadata_baseLabels_logTypes_1: 'GCP_CLOUDAUDIT',
        event_metadata_baseLabels_allowScopedAccess: 'True',
        event_metadata_enrichmentLabels_logTypes_1: 'GCP_IAM_ANALYSIS',
        event_metadata_enrichmentLabels_logTypes_2: 'GCP_IAM_CONTEXT',
        event_metadata_enrichmentLabels_allowScopedAccess: 'True',
        event_additional_request_time: '2024-02-02T10:05:30.120690627Z',
        event_additional_type:
          'type.googleapis.com/google.cloud.audit.AuditLog',
        event_additional_caller_network:
          '//compute.googleapis.com/projects/dummyProject/global/networks/__unknown__',
        'event_additional_requestMetadata.callerIp_0':
          'Request came from a GCE VM in the same organization. : REPLACED',
        'event_additional_requestMetadata.callerNetwork_1':
          'Request originated from a GCE VM or an on-prem VM behind a VPN, and the log was enhanced with additional information : REPLACED',
        event_additional_request_attributes_time:
          '2024-02-02T10:05:30.120690627Z',
        event_principal_hostname: '10.1.0.8',
        event_principal_user_userid: 'terraform-sa',
        event_principal_user_userDisplayName: 'Terraform Service account',
        event_principal_user_emailAddresses_1:
          'terraform-sa@scce-lab-401713.iam.gserviceaccount.com',
        event_principal_user_emailAddresses_2:
          'terraform-sa@scce-lab-401713.iam.gserviceaccount.com',
        event_principal_user_emailAddresses_3:
          'terraform-sa@scce-lab-401713.iam.gserviceaccount.com',
        event_principal_user_emailAddresses_4:
          'sa-cron-vm@scce-lab-401713.iam.gserviceaccount.com',
        event_principal_user_productObjectId: '109464150361893883794',
        event_principal_user_attribute_cloud_environment:
          'GOOGLE_CLOUD_PLATFORM',
        event_principal_user_attribute_roles_1_name:
          'roles/resourcemanager.organizationAdmin',
        event_principal_user_attribute_roles_1_type: 'SERVICE_ACCOUNT',
        event_principal_user_attribute_permissions_1_name:
          'storage.buckets.delete',
        event_principal_ip_1: '10.1.0.8',
        event_principal_asset_hostname: '10.1.0.8',
        event_target_user_userid:
          'terraform-sa@scce-lab-401713.iam.gserviceaccount.com',
        event_target_file_fullPath:
          'projects/dummyProject/buckets/temp_49750abbbe5db43adf5aff877202b882061f1fd4',
        event_target_application: 'storage.googleapis.com',
        event_target_location_name: 'eu',
        event_target_resource_name:
          'temp_49750abbbe5db43adf5aff877202b882061f1fd4',
        event_target_resource_resourceType: 'STORAGE_BUCKET',
        event_target_resource_resourceSubtype: 'gcs_bucket',
        event_target_resource_attribute_cloud_availabilityZone: 'eu',
        event_target_cloud_project_name: 'scce-lab-401713',
        event_target_resourceAncestors_1_resourceType: 'STORAGE_BUCKET',
        event_target_resourceAncestors_2_name: 'scce-lab-401713',
        event_target_resourceAncestors_2_resourceType: 'CLOUD_PROJECT',
        event_securityResult_1_categoryDetails_1:
          'projects/dummyProject/logs/cloudaudit.googleapis.com%2Factivity',
        event_securityResult_1_action_1: 'ALLOW',
        event_securityResult_1_severity: 'INFORMATIONAL',
        event_network_http_userAgent:
          'google-cloud-sdk gcloud/462.0.1 command/gcloud.alpha.storage.rm invocation-id/1a47d07ffe8c4db39184772df2d92872 environment/GCE environment-version/None client-os/LINUX client-os-ver/5.10.0 client-pltf-arch/x86_64 interactive/False from-script/False python/3.11.7 term/xterm-256color (Linux 5.10.0-26-cloud-amd64),gzip(gfe)',
        event_network_http_parsedUserAgent_family: 'USER_DEFINED',
        type: 'GCTI_FINDING',
        detection_1_ruleName:
          'SCC: Discovery: Service Account Self-Investigation with Resource Creation',
        detection_1_summary: 'Rule Detection',
        detection_1_description:
          'Detection of an IAM service account credential that is used to investigate the roles and permissions associated with that same service account',
        detection_1_severity: 'HIGH',
        detection_1_urlBackToProduct:
          'https://gglwl.backstory.chronicle.security/alert?alertId=de_bd51e7b7-3370-44c0-c738-2f8bcf5b3dd6',
        detection_1_ruleId: 'ur_c512c6b6-56fa-41d5-aeae-b01b2d52cfe8',
        detection_1_alertState: 'ALERTING',
        detection_1_ruleType: 'MULTI_EVENT',
        detection_1_detectionFields_1_key: 'service_account',
        detection_1_detectionFields_1_value:
          'sa-cron-vm@scce-lab-401713.iam.gserviceaccount.com',
        detection_1_detectionFields_1_source:
          'udm.principal.user.email_addresses',
        detection_1_ruleLabels_1_key: 'reference',
        detection_1_ruleLabels_1_value:
          'https://cloud.google.com/security-command-center/docs/how-to-investigate-threats#service_account_self-investigation',
        detection_1_ruleLabels_2_key: 'rule_name',
        detection_1_ruleLabels_2_value:
          'SCC: Discovery: Service Account Self-Investigation with Resource Creation',
        detection_1_outcomes_1_key: 'roles',
        detection_1_outcomes_1_value: 'roles/storage.objectAdmin',
        detection_1_outcomes_2_key: 'group_memberships',
        detection_1_outcomes_3_key: 'ip',
        detection_1_outcomes_3_source: 'udm.principal.ip',
        detection_1_outcomes_4_key: 'principal_email_address',
        detection_1_outcomes_4_value:
          'sa-cron-vm@scce-lab-401713.iam.gserviceaccount.com',
        detection_1_outcomes_4_source: 'udm.principal.user.email_addresses',
        detection_1_outcomes_5_key: 'risk_score',
        detection_1_outcomes_5_value: '90',
        detection_1_outcomes_6_key: 'vendor_name',
        detection_1_outcomes_6_value: 'Google',
        detection_1_outcomes_7_key: 'product_name',
        detection_1_outcomes_7_value: 'Security Command Center',
        detection_1_ruleSet: '92f84c0d-678c-c2ba-fd76-9baa399885a2',
        detection_1_ruleSetDisplayName:
          'CDIR SCC Enhanced Defense Discovery Alerts',
        detection_1_riskScore: '90',
        detection_1_rulesetCategoryDisplayName: 'Cloud Threats',
        createdTime: '2024-02-02T11:05:32.43988Z',
        lastUpdatedTime: '2024-02-02T11:05:32.43988Z',
        id: 'de_bd51e7b7-3370-44c0-c738-2f8bcf5b3dd6',
        timeWindow_startTime: '2024-02-02T09:36:00Z',
        timeWindow_endTime: '2024-02-02T10:06:00Z',
        detectionTime: '2024-02-02T10:06:00Z',
        tags_1: 'TA0007',
        tags_2: 'T1069.003',
        alert_type: 'RULE',
        event_type: 'RESOURCE_DELETION',
        event_category: 'RESOURCE',
        event_principal_ip: '',
        event_principal_user_emailAddresses:
          'terraform-sa@scce-lab-401713.iam.gserviceaccount.com',
        event_principal_user_attribute_labels_authorization_granted: 'true',
        'event_principal_labels_requestMetadata.callerIp':
          'Request came from a GCE VM in the same organization. : REPLACED',
        'event_principal_labels_requestMetadata.callerNetwork':
          'Request originated from a GCE VM or an on-prem VM behind a VPN, and the log was enhanced with additional information : REPLACED',
        event_principal_labels_request_attributes_time:
          '2024-02-02T10:05:30.120690627Z',
        event_about_labels_type:
          'type.googleapis.com/google.cloud.audit.AuditLog',
        event_about_labels_request_time: '2024-02-02T10:05:30.120690627Z',
        event_about_labels_caller_network:
          '//compute.googleapis.com/projects/dummyProject/global/networks/__unknown__',
        event_securityResult_detectionFields_resource_name:
          'projects/dummyProject/buckets/temp_49750abbbe5db43adf5aff877202b882061f1fd4',
        event_securityResult_detectionFields_resource:
          'projects/dummyProject/buckets/temp_49750abbbe5db43adf5aff877202b882061f1fd4',
        detection_detectionFields_service_account:
          'sa-cron-vm@scce-lab-401713.iam.gserviceaccount.com',
        detection_ruleLabels_reference:
          'https://cloud.google.com/security-command-center/docs/how-to-investigate-threats#service_account_self-investigation',
        detection_ruleLabels_rule_name:
          'SCC: Discovery: Service Account Self-Investigation with Resource Creation',
        detection_outcomes_roles: 'roles/storage.objectAdmin',
        detection_outcomes_principal_email_address:
          'sa-cron-vm@scce-lab-401713.iam.gserviceaccount.com',
        detection_outcomes_risk_score: '90',
        detection_outcomes_vendor_name: 'Google',
        detection_outcomes_product_name: 'Security Command Center',
      },
      Environment: null,
      SourceSystemName: null,
      Extensions: [],
    },
    {
      _fields: {
        BaseEventIds: [],
        ParentEventId: 0,
        DeviceVendor: 'Google Chronicle',
        DeviceProduct: 'RULE',
        DeviceEventClassId: 'RESOURCE_DELETION',
      },
      _rawDataFields: {
        event_metadata_productLogId: '1gpwmqbekaw93',
        event_metadata_eventTimestamp: '2024-02-02T10:05:30.115158087Z',
        event_metadata_collectedTimestamp: '2024-02-02T10:05:31.792035518Z',
        event_metadata_eventType: 'RESOURCE_DELETION',
        event_metadata_vendorName: 'Google Cloud Platform',
        event_metadata_productName: 'Google Cloud Storage',
        event_metadata_productEventType: 'storage.buckets.delete',
        event_metadata_urlBackToProduct:
          'projects/dummyProject/logs/cloudaudit.googleapis.com%2Factivity',
        event_metadata_ingestedTimestamp: '2024-02-02T10:05:34.685986Z',
        event_metadata_id: 'AAAAAPM/L9OPWdfBQLmKTkZGCxkAAAAADgAAAAAAAAA=',
        event_metadata_logType: 'GCP_CLOUDAUDIT',
        event_metadata_baseLabels_logTypes_1: 'GCP_CLOUDAUDIT',
        event_metadata_baseLabels_allowScopedAccess: 'True',
        event_metadata_enrichmentLabels_logTypes_1: 'GCP_IAM_ANALYSIS',
        event_metadata_enrichmentLabels_logTypes_2: 'GCP_IAM_CONTEXT',
        event_metadata_enrichmentLabels_allowScopedAccess: 'True',
        event_additional_request_time: '2024-02-02T10:05:30.120690627Z',
        event_additional_type:
          'type.googleapis.com/google.cloud.audit.AuditLog',
        event_additional_caller_network:
          '//compute.googleapis.com/projects/dummyProject/global/networks/__unknown__',
        'event_additional_requestMetadata.callerIp_0':
          'Request came from a GCE VM in the same organization. : REPLACED',
        'event_additional_requestMetadata.callerNetwork_1':
          'Request originated from a GCE VM or an on-prem VM behind a VPN, and the log was enhanced with additional information : REPLACED',
        event_additional_request_attributes_time:
          '2024-02-02T10:05:30.120690627Z',
        event_principal_hostname: '10.1.0.8',
        event_principal_user_userid: 'terraform-sa',
        event_principal_user_userDisplayName: 'Terraform Service account',
        event_principal_user_emailAddresses_1:
          'terraform-sa@scce-lab-401713.iam.gserviceaccount.com',
        event_principal_user_emailAddresses_2:
          'terraform-sa@scce-lab-401713.iam.gserviceaccount.com',
        event_principal_user_emailAddresses_3:
          'terraform-sa@scce-lab-401713.iam.gserviceaccount.com',
        event_principal_user_emailAddresses_4:
          'sa-cron-vm@scce-lab-401713.iam.gserviceaccount.com',
        event_principal_user_productObjectId: '109464150361893883794',
        event_principal_user_attribute_cloud_environment:
          'GOOGLE_CLOUD_PLATFORM',
        event_principal_user_attribute_roles_1_name:
          'roles/resourcemanager.organizationAdmin',
        event_principal_user_attribute_roles_1_type: 'SERVICE_ACCOUNT',
        event_principal_user_attribute_permissions_1_name:
          'storage.buckets.delete',
        event_principal_ip_1: '10.1.0.8',
        event_principal_asset_hostname: '10.1.0.8',
        event_target_user_userid:
          'terraform-sa@scce-lab-401713.iam.gserviceaccount.com',
        event_target_file_fullPath:
          'projects/dummyProject/buckets/temp_49750abbbe5db43adf5aff877202b882061f1fd4',
        event_target_application: 'storage.googleapis.com',
        event_target_location_name: 'eu',
        event_target_resource_name:
          'temp_49750abbbe5db43adf5aff877202b882061f1fd4',
        event_target_resource_resourceType: 'STORAGE_BUCKET',
        event_target_resource_resourceSubtype: 'gcs_bucket',
        event_target_resource_attribute_cloud_availabilityZone: 'eu',
        event_target_cloud_project_name: 'scce-lab-401713',
        event_target_resourceAncestors_1_resourceType: 'STORAGE_BUCKET',
        event_target_resourceAncestors_2_name: 'scce-lab-401713',
        event_target_resourceAncestors_2_resourceType: 'CLOUD_PROJECT',
        event_securityResult_1_categoryDetails_1:
          'projects/dummyProject/logs/cloudaudit.googleapis.com%2Factivity',
        event_securityResult_1_action_1: 'ALLOW',
        event_securityResult_1_severity: 'INFORMATIONAL',
        event_network_http_userAgent:
          'google-cloud-sdk gcloud/462.0.1 command/gcloud.alpha.storage.rm invocation-id/1a47d07ffe8c4db39184772df2d92872 environment/GCE environment-version/None client-os/LINUX client-os-ver/5.10.0 client-pltf-arch/x86_64 interactive/False from-script/False python/3.11.7 term/xterm-256color (Linux 5.10.0-26-cloud-amd64),gzip(gfe)',
        event_network_http_parsedUserAgent_family: 'USER_DEFINED',
        type: 'GCTI_FINDING',
        detection_1_ruleName:
          'SCC: Discovery: Service Account Self-Investigation with Resource Creation',
        detection_1_summary: 'Rule Detection',
        detection_1_description:
          'Detection of an IAM service account credential that is used to investigate the roles and permissions associated with that same service account',
        detection_1_severity: 'HIGH',
        detection_1_urlBackToProduct:
          'https://gglwl.backstory.chronicle.security/alert?alertId=de_bd51e7b7-3370-44c0-c738-2f8bcf5b3dd6',
        detection_1_ruleId: 'ur_c512c6b6-56fa-41d5-aeae-b01b2d52cfe8',
        detection_1_alertState: 'ALERTING',
        detection_1_ruleType: 'MULTI_EVENT',
        detection_1_detectionFields_1_key: 'service_account',
        detection_1_detectionFields_1_value:
          'sa-cron-vm@scce-lab-401713.iam.gserviceaccount.com',
        detection_1_detectionFields_1_source:
          'udm.principal.user.email_addresses',
        detection_1_ruleLabels_1_key: 'reference',
        detection_1_ruleLabels_1_value:
          'https://cloud.google.com/security-command-center/docs/how-to-investigate-threats#service_account_self-investigation',
        detection_1_ruleLabels_2_key: 'rule_name',
        detection_1_ruleLabels_2_value:
          'SCC: Discovery: Service Account Self-Investigation with Resource Creation',
        detection_1_outcomes_1_key: 'roles',
        detection_1_outcomes_1_value: 'roles/storage.objectAdmin',
        detection_1_outcomes_2_key: 'group_memberships',
        detection_1_outcomes_3_key: 'ip',
        detection_1_outcomes_3_source: 'udm.principal.ip',
        detection_1_outcomes_4_key: 'principal_email_address',
        detection_1_outcomes_4_value:
          'sa-cron-vm@scce-lab-401713.iam.gserviceaccount.com',
        detection_1_outcomes_4_source: 'udm.principal.user.email_addresses',
        detection_1_outcomes_5_key: 'risk_score',
        detection_1_outcomes_5_value: '90',
        detection_1_outcomes_6_key: 'vendor_name',
        detection_1_outcomes_6_value: 'Google',
        detection_1_outcomes_7_key: 'product_name',
        detection_1_outcomes_7_value: 'Security Command Center',
        detection_1_ruleSet: '92f84c0d-678c-c2ba-fd76-9baa399885a2',
        detection_1_ruleSetDisplayName:
          'CDIR SCC Enhanced Defense Discovery Alerts',
        detection_1_riskScore: '90',
        detection_1_rulesetCategoryDisplayName: 'Cloud Threats',
        createdTime: '2024-02-02T11:05:32.43988Z',
        lastUpdatedTime: '2024-02-02T11:05:32.43988Z',
        id: 'de_bd51e7b7-3370-44c0-c738-2f8bcf5b3dd6',
        timeWindow_startTime: '2024-02-02T09:36:00Z',
        timeWindow_endTime: '2024-02-02T10:06:00Z',
        detectionTime: '2024-02-02T10:06:00Z',
        tags_1: 'TA0007',
        tags_2: 'T1069.003',
        alert_type: 'RULE',
        event_type: 'RESOURCE_DELETION',
        event_category: 'RESOURCE',
        event_principal_ip: '',
        event_principal_user_emailAddresses:
          'terraform-sa@scce-lab-401713.iam.gserviceaccount.com',
        event_principal_user_attribute_labels_authorization_granted: 'true',
        'event_principal_labels_requestMetadata.callerIp':
          'Request came from a GCE VM in the same organization. : REPLACED',
        'event_principal_labels_requestMetadata.callerNetwork':
          'Request originated from a GCE VM or an on-prem VM behind a VPN, and the log was enhanced with additional information : REPLACED',
        event_principal_labels_request_attributes_time:
          '2024-02-02T10:05:30.120690627Z',
        event_about_labels_type:
          'type.googleapis.com/google.cloud.audit.AuditLog',
        event_about_labels_request_time: '2024-02-02T10:05:30.120690627Z',
        event_about_labels_caller_network:
          '//compute.googleapis.com/projects/dummyProject/global/networks/__unknown__',
        event_securityResult_detectionFields_resource_name:
          'projects/dummyProject/buckets/temp_49750abbbe5db43adf5aff877202b882061f1fd4',
        event_securityResult_detectionFields_resource:
          'projects/dummyProject/buckets/temp_49750abbbe5db43adf5aff877202b882061f1fd4',
        detection_detectionFields_service_account:
          'sa-cron-vm@scce-lab-401713.iam.gserviceaccount.com',
        detection_ruleLabels_reference:
          'https://cloud.google.com/security-command-center/docs/how-to-investigate-threats#service_account_self-investigation',
        detection_ruleLabels_rule_name:
          'SCC: Discovery: Service Account Self-Investigation with Resource Creation',
        detection_outcomes_roles: 'roles/storage.objectAdmin',
        detection_outcomes_principal_email_address:
          'sa-cron-vm@scce-lab-401713.iam.gserviceaccount.com',
        detection_outcomes_risk_score: '90',
        detection_outcomes_vendor_name: 'Google',
        detection_outcomes_product_name: 'Security Command Center',
      },
      Environment: null,
      SourceSystemName: null,
      Extensions: [],
    },
    {
      _fields: {
        BaseEventIds: [],
        ParentEventId: 0,
        DeviceVendor: 'Google Chronicle',
        DeviceProduct: 'RULE',
        DeviceEventClassId: 'RESOURCE_DELETION',
      },
      _rawDataFields: {
        event_metadata_productLogId: '1gpwmqbekaw93',
        event_metadata_eventTimestamp: '2024-02-02T10:05:30.115158087Z',
        event_metadata_collectedTimestamp: '2024-02-02T10:05:31.792035518Z',
        event_metadata_eventType: 'RESOURCE_DELETION',
        event_metadata_vendorName: 'Google Cloud Platform',
        event_metadata_productName: 'Google Cloud Storage',
        event_metadata_productEventType: 'storage.buckets.delete',
        event_metadata_urlBackToProduct:
          'projects/dummyProject/logs/cloudaudit.googleapis.com%2Factivity',
        event_metadata_ingestedTimestamp: '2024-02-02T10:05:34.685986Z',
        event_metadata_id: 'AAAAAPM/L9OPWdfBQLmKTkZGCxkAAAAADgAAAAAAAAA=',
        event_metadata_logType: 'GCP_CLOUDAUDIT',
        event_metadata_baseLabels_logTypes_1: 'GCP_CLOUDAUDIT',
        event_metadata_baseLabels_allowScopedAccess: 'True',
        event_metadata_enrichmentLabels_logTypes_1: 'GCP_IAM_ANALYSIS',
        event_metadata_enrichmentLabels_logTypes_2: 'GCP_IAM_CONTEXT',
        event_metadata_enrichmentLabels_allowScopedAccess: 'True',
        event_additional_request_time: '2024-02-02T10:05:30.120690627Z',
        event_additional_type:
          'type.googleapis.com/google.cloud.audit.AuditLog',
        event_additional_caller_network:
          '//compute.googleapis.com/projects/dummyProject/global/networks/__unknown__',
        'event_additional_requestMetadata.callerIp_0':
          'Request came from a GCE VM in the same organization. : REPLACED',
        'event_additional_requestMetadata.callerNetwork_1':
          'Request originated from a GCE VM or an on-prem VM behind a VPN, and the log was enhanced with additional information : REPLACED',
        event_additional_request_attributes_time:
          '2024-02-02T10:05:30.120690627Z',
        event_principal_hostname: '10.1.0.8',
        event_principal_user_userid: 'terraform-sa',
        event_principal_user_userDisplayName: 'Terraform Service account',
        event_principal_user_emailAddresses_1:
          'terraform-sa@scce-lab-401713.iam.gserviceaccount.com',
        event_principal_user_emailAddresses_2:
          'terraform-sa@scce-lab-401713.iam.gserviceaccount.com',
        event_principal_user_emailAddresses_3:
          'terraform-sa@scce-lab-401713.iam.gserviceaccount.com',
        event_principal_user_emailAddresses_4:
          'sa-cron-vm@scce-lab-401713.iam.gserviceaccount.com',
        event_principal_user_productObjectId: '109464150361893883794',
        event_principal_user_attribute_cloud_environment:
          'GOOGLE_CLOUD_PLATFORM',
        event_principal_user_attribute_roles_1_name:
          'roles/resourcemanager.organizationAdmin',
        event_principal_user_attribute_roles_1_type: 'SERVICE_ACCOUNT',
        event_principal_user_attribute_permissions_1_name:
          'storage.buckets.delete',
        event_principal_ip_1: '10.1.0.8',
        event_principal_asset_hostname: '10.1.0.8',
        event_target_user_userid:
          'terraform-sa@scce-lab-401713.iam.gserviceaccount.com',
        event_target_file_fullPath:
          'projects/dummyProject/buckets/temp_49750abbbe5db43adf5aff877202b882061f1fd4',
        event_target_application: 'storage.googleapis.com',
        event_target_location_name: 'eu',
        event_target_resource_name:
          'temp_49750abbbe5db43adf5aff877202b882061f1fd4',
        event_target_resource_resourceType: 'STORAGE_BUCKET',
        event_target_resource_resourceSubtype: 'gcs_bucket',
        event_target_resource_attribute_cloud_availabilityZone: 'eu',
        event_target_cloud_project_name: 'scce-lab-401713',
        event_target_resourceAncestors_1_resourceType: 'STORAGE_BUCKET',
        event_target_resourceAncestors_2_name: 'scce-lab-401713',
        event_target_resourceAncestors_2_resourceType: 'CLOUD_PROJECT',
        event_securityResult_1_categoryDetails_1:
          'projects/dummyProject/logs/cloudaudit.googleapis.com%2Factivity',
        event_securityResult_1_action_1: 'ALLOW',
        event_securityResult_1_severity: 'INFORMATIONAL',
        event_network_http_userAgent:
          'google-cloud-sdk gcloud/462.0.1 command/gcloud.alpha.storage.rm invocation-id/1a47d07ffe8c4db39184772df2d92872 environment/GCE environment-version/None client-os/LINUX client-os-ver/5.10.0 client-pltf-arch/x86_64 interactive/False from-script/False python/3.11.7 term/xterm-256color (Linux 5.10.0-26-cloud-amd64),gzip(gfe)',
        event_network_http_parsedUserAgent_family: 'USER_DEFINED',
        type: 'GCTI_FINDING',
        detection_1_ruleName:
          'SCC: Discovery: Service Account Self-Investigation with Resource Creation',
        detection_1_summary: 'Rule Detection',
        detection_1_description:
          'Detection of an IAM service account credential that is used to investigate the roles and permissions associated with that same service account',
        detection_1_severity: 'HIGH',
        detection_1_urlBackToProduct:
          'https://gglwl.backstory.chronicle.security/alert?alertId=de_bd51e7b7-3370-44c0-c738-2f8bcf5b3dd6',
        detection_1_ruleId: 'ur_c512c6b6-56fa-41d5-aeae-b01b2d52cfe8',
        detection_1_alertState: 'ALERTING',
        detection_1_ruleType: 'MULTI_EVENT',
        detection_1_detectionFields_1_key: 'service_account',
        detection_1_detectionFields_1_value:
          'sa-cron-vm@scce-lab-401713.iam.gserviceaccount.com',
        detection_1_detectionFields_1_source:
          'udm.principal.user.email_addresses',
        detection_1_ruleLabels_1_key: 'reference',
        detection_1_ruleLabels_1_value:
          'https://cloud.google.com/security-command-center/docs/how-to-investigate-threats#service_account_self-investigation',
        detection_1_ruleLabels_2_key: 'rule_name',
        detection_1_ruleLabels_2_value:
          'SCC: Discovery: Service Account Self-Investigation with Resource Creation',
        detection_1_outcomes_1_key: 'roles',
        detection_1_outcomes_1_value: 'roles/storage.objectAdmin',
        detection_1_outcomes_2_key: 'group_memberships',
        detection_1_outcomes_3_key: 'ip',
        detection_1_outcomes_3_source: 'udm.principal.ip',
        detection_1_outcomes_4_key: 'principal_email_address',
        detection_1_outcomes_4_value:
          'sa-cron-vm@scce-lab-401713.iam.gserviceaccount.com',
        detection_1_outcomes_4_source: 'udm.principal.user.email_addresses',
        detection_1_outcomes_5_key: 'risk_score',
        detection_1_outcomes_5_value: '90',
        detection_1_outcomes_6_key: 'vendor_name',
        detection_1_outcomes_6_value: 'Google',
        detection_1_outcomes_7_key: 'product_name',
        detection_1_outcomes_7_value: 'Security Command Center',
        detection_1_ruleSet: '92f84c0d-678c-c2ba-fd76-9baa399885a2',
        detection_1_ruleSetDisplayName:
          'CDIR SCC Enhanced Defense Discovery Alerts',
        detection_1_riskScore: '90',
        detection_1_rulesetCategoryDisplayName: 'Cloud Threats',
        createdTime: '2024-02-02T11:05:32.43988Z',
        lastUpdatedTime: '2024-02-02T11:05:32.43988Z',
        id: 'de_bd51e7b7-3370-44c0-c738-2f8bcf5b3dd6',
        timeWindow_startTime: '2024-02-02T09:36:00Z',
        timeWindow_endTime: '2024-02-02T10:06:00Z',
        detectionTime: '2024-02-02T10:06:00Z',
        tags_1: 'TA0007',
        tags_2: 'T1069.003',
        alert_type: 'RULE',
        event_type: 'RESOURCE_DELETION',
        event_category: 'RESOURCE',
        event_principal_ip: '',
        event_principal_user_emailAddresses:
          'sa-cron-vm@scce-lab-401713.iam.gserviceaccount.com',
        event_principal_user_attribute_labels_authorization_granted: 'true',
        'event_principal_labels_requestMetadata.callerIp':
          'Request came from a GCE VM in the same organization. : REPLACED',
        'event_principal_labels_requestMetadata.callerNetwork':
          'Request originated from a GCE VM or an on-prem VM behind a VPN, and the log was enhanced with additional information : REPLACED',
        event_principal_labels_request_attributes_time:
          '2024-02-02T10:05:30.120690627Z',
        event_about_labels_type:
          'type.googleapis.com/google.cloud.audit.AuditLog',
        event_about_labels_request_time: '2024-02-02T10:05:30.120690627Z',
        event_about_labels_caller_network:
          '//compute.googleapis.com/projects/dummyProject/global/networks/__unknown__',
        event_securityResult_detectionFields_resource_name:
          'projects/dummyProject/buckets/temp_49750abbbe5db43adf5aff877202b882061f1fd4',
        event_securityResult_detectionFields_resource:
          'projects/dummyProject/buckets/temp_49750abbbe5db43adf5aff877202b882061f1fd4',
        detection_detectionFields_service_account:
          'sa-cron-vm@scce-lab-401713.iam.gserviceaccount.com',
        detection_ruleLabels_reference:
          'https://cloud.google.com/security-command-center/docs/how-to-investigate-threats#service_account_self-investigation',
        detection_ruleLabels_rule_name:
          'SCC: Discovery: Service Account Self-Investigation with Resource Creation',
        detection_outcomes_roles: 'roles/storage.objectAdmin',
        detection_outcomes_principal_email_address:
          'sa-cron-vm@scce-lab-401713.iam.gserviceaccount.com',
        detection_outcomes_risk_score: '90',
        detection_outcomes_vendor_name: 'Google',
        detection_outcomes_product_name: 'Security Command Center',
      },
      Environment: null,
      SourceSystemName: null,
      Extensions: [],
    },
    {
      _fields: {
        BaseEventIds: [],
        ParentEventId: 0,
        DeviceVendor: 'Google Chronicle',
        DeviceProduct: 'RULE',
        DeviceEventClassId: 'USER_RESOURCE_DELETION',
      },
      _rawDataFields: {
        event_metadata_productLogId: '-1dx951e1bohf',
        event_metadata_eventTimestamp: '2024-02-02T10:05:33.042463Z',
        event_metadata_collectedTimestamp: '2024-02-02T10:05:33.754434041Z',
        event_metadata_eventType: 'USER_RESOURCE_DELETION',
        event_metadata_vendorName: 'Google Cloud Platform',
        event_metadata_productName: 'BigQuery',
        event_metadata_productEventType:
          'google.cloud.bigquery.v2.DatasetService.DeleteDataset',
        event_metadata_urlBackToProduct:
          'projects/dummyProject/logs/cloudaudit.googleapis.com%2Factivity',
        event_metadata_ingestedTimestamp: '2024-02-02T10:05:34.880976Z',
        event_metadata_id: 'AAAAAK0mdcLyzRZ2hAjZIvzsy6gAAAAADgAAAAEAAAA=',
        event_metadata_logType: 'GCP_CLOUDAUDIT',
        event_metadata_baseLabels_logTypes_1: 'GCP_CLOUDAUDIT',
        event_metadata_baseLabels_allowScopedAccess: 'True',
        event_metadata_enrichmentLabels_logTypes_1: 'GCP_IAM_ANALYSIS',
        event_metadata_enrichmentLabels_logTypes_2: 'GCP_IAM_CONTEXT',
        event_metadata_enrichmentLabels_allowScopedAccess: 'True',
        event_additional_caller_network:
          '//compute.googleapis.com/projects/dummyProject/global/networks/__unknown__',
        event_additional_metadata_type:
          'type.googleapis.com/google.cloud.audit.BigQueryAuditMetadata',
        'event_additional_requestMetadata.callerIp_0':
          'Request came from a GCE VM in the same organization. : REPLACED',
        'event_additional_requestMetadata.callerNetwork_1':
          'Request originated from a GCE VM or an on-prem VM behind a VPN, and the log was enhanced with additional information : REPLACED',
        event_additional_type:
          'type.googleapis.com/google.cloud.audit.AuditLog',
        event_principal_hostname: '10.1.0.8',
        event_principal_user_userid: 'terraform-sa',
        event_principal_user_userDisplayName:
          'A SA to run the vm that refresh threats and resources',
        event_principal_user_emailAddresses_1:
          'sa-cron-vm@scce-lab-401713.iam.gserviceaccount.com',
        event_principal_user_emailAddresses_2:
          'sa-cron-vm@scce-lab-401713.iam.gserviceaccount.com',
        event_principal_user_emailAddresses_3:
          'terraform-sa@scce-lab-401713.iam.gserviceaccount.com',
        event_principal_user_emailAddresses_4:
          'sa-cron-vm@scce-lab-401713.iam.gserviceaccount.com',
        event_principal_user_productObjectId: '100282268471516296206',
        event_principal_user_attribute_cloud_environment:
          'GOOGLE_CLOUD_PLATFORM',
        event_principal_user_attribute_roles_1_name:
          'roles/storage.objectAdmin',
        event_principal_user_attribute_roles_1_type: 'SERVICE_ACCOUNT',
        event_principal_user_attribute_permissions_1_name:
          'bigquery.datasets.delete',
        event_principal_ip_1: '10.1.0.8',
        event_principal_asset_hostname: '10.1.0.8',
        event_target_user_userid:
          'terraform-sa@scce-lab-401713.iam.gserviceaccount.com',
        event_target_application: 'bigquery.googleapis.com',
        event_target_resource_name: 'sccdemodataset',
        event_target_resource_resourceType: 'DATABASE',
        event_target_resource_resourceSubtype: 'bigquery_dataset',
        event_target_resource_productObjectId: 'sccdemodataset',
        event_target_cloud_project_name: 'scce-lab-401713',
        event_target_resourceAncestors_1_resourceType: 'DATABASE',
        event_target_resourceAncestors_2_name: 'scce-lab-401713',
        event_target_resourceAncestors_2_resourceType: 'CLOUD_PROJECT',
        event_securityResult_1_categoryDetails_1:
          'projects/dummyProject/logs/cloudaudit.googleapis.com%2Factivity',
        event_securityResult_1_description: 'DELETE',
        event_securityResult_1_action_1: 'ALLOW',
        event_securityResult_1_severity: 'INFORMATIONAL',
        event_network_http_userAgent:
          'google-cloud-sdk462.0.1 (gzip),gzip(gfe)',
        event_network_http_parsedUserAgent_family: 'USER_DEFINED',
        event_network_http_parsedUserAgent_device: 'google-cloud-sdk462.0.1',
        type: 'GCTI_FINDING',
        detection_1_ruleName:
          'SCC: Discovery: Service Account Self-Investigation with Resource Creation',
        detection_1_summary: 'Rule Detection',
        detection_1_description:
          'Detection of an IAM service account credential that is used to investigate the roles and permissions associated with that same service account',
        detection_1_severity: 'HIGH',
        detection_1_urlBackToProduct:
          'https://gglwl.backstory.chronicle.security/alert?alertId=de_bd51e7b7-3370-44c0-c738-2f8bcf5b3dd6',
        detection_1_ruleId: 'ur_c512c6b6-56fa-41d5-aeae-b01b2d52cfe8',
        detection_1_alertState: 'ALERTING',
        detection_1_ruleType: 'MULTI_EVENT',
        detection_1_detectionFields_1_key: 'service_account',
        detection_1_detectionFields_1_value:
          'sa-cron-vm@scce-lab-401713.iam.gserviceaccount.com',
        detection_1_detectionFields_1_source:
          'udm.principal.user.email_addresses',
        detection_1_ruleLabels_1_key: 'reference',
        detection_1_ruleLabels_1_value:
          'https://cloud.google.com/security-command-center/docs/how-to-investigate-threats#service_account_self-investigation',
        detection_1_ruleLabels_2_key: 'rule_name',
        detection_1_ruleLabels_2_value:
          'SCC: Discovery: Service Account Self-Investigation with Resource Creation',
        detection_1_outcomes_1_key: 'roles',
        detection_1_outcomes_1_value: 'roles/storage.objectAdmin',
        detection_1_outcomes_2_key: 'group_memberships',
        detection_1_outcomes_3_key: 'ip',
        detection_1_outcomes_3_source: 'udm.principal.ip',
        detection_1_outcomes_4_key: 'principal_email_address',
        detection_1_outcomes_4_value:
          'sa-cron-vm@scce-lab-401713.iam.gserviceaccount.com',
        detection_1_outcomes_4_source: 'udm.principal.user.email_addresses',
        detection_1_outcomes_5_key: 'risk_score',
        detection_1_outcomes_5_value: '90',
        detection_1_outcomes_6_key: 'vendor_name',
        detection_1_outcomes_6_value: 'Google',
        detection_1_outcomes_7_key: 'product_name',
        detection_1_outcomes_7_value: 'Security Command Center',
        detection_1_ruleSet: '92f84c0d-678c-c2ba-fd76-9baa399885a2',
        detection_1_ruleSetDisplayName:
          'CDIR SCC Enhanced Defense Discovery Alerts',
        detection_1_riskScore: '90',
        detection_1_rulesetCategoryDisplayName: 'Cloud Threats',
        createdTime: '2024-02-02T11:05:32.43988Z',
        lastUpdatedTime: '2024-02-02T11:05:32.43988Z',
        id: 'de_bd51e7b7-3370-44c0-c738-2f8bcf5b3dd6',
        timeWindow_startTime: '2024-02-02T09:36:00Z',
        timeWindow_endTime: '2024-02-02T10:06:00Z',
        detectionTime: '2024-02-02T10:06:00Z',
        tags_1: 'TA0007',
        tags_2: 'T1069.003',
        alert_type: 'RULE',
        event_type: 'USER_RESOURCE_DELETION',
        event_category: 'USER',
        event_principal_ip: '10.1.0.8',
        event_principal_user_emailAddresses:
          'sa-cron-vm@scce-lab-401713.iam.gserviceaccount.com',
        event_principal_user_attribute_labels_authorization_granted: 'true',
        'event_principal_labels_requestMetadata.callerIp':
          'Request came from a GCE VM in the same organization. : REPLACED',
        'event_principal_labels_requestMetadata.callerNetwork':
          'Request originated from a GCE VM or an on-prem VM behind a VPN, and the log was enhanced with additional information : REPLACED',
        event_about_labels_type:
          'type.googleapis.com/google.cloud.audit.AuditLog',
        event_about_labels_metadata_type:
          'type.googleapis.com/google.cloud.audit.BigQueryAuditMetadata',
        event_about_labels_caller_network:
          '//compute.googleapis.com/projects/dummyProject/global/networks/__unknown__',
        event_securityResult_detectionFields_resource_name:
          'projects/dummyProject/datasets/sccdemodataset',
        event_securityResult_detectionFields_resource:
          'projects/dummyProject/datasets/sccdemodataset',
        detection_detectionFields_service_account:
          'sa-cron-vm@scce-lab-401713.iam.gserviceaccount.com',
        detection_ruleLabels_reference:
          'https://cloud.google.com/security-command-center/docs/how-to-investigate-threats#service_account_self-investigation',
        detection_ruleLabels_rule_name:
          'SCC: Discovery: Service Account Self-Investigation with Resource Creation',
        detection_outcomes_roles: 'roles/storage.objectAdmin',
        detection_outcomes_principal_email_address:
          'sa-cron-vm@scce-lab-401713.iam.gserviceaccount.com',
        detection_outcomes_risk_score: '90',
        detection_outcomes_vendor_name: 'Google',
        detection_outcomes_product_name: 'Security Command Center',
      },
      Environment: null,
      SourceSystemName: null,
      Extensions: [],
    },
    {
      _fields: {
        BaseEventIds: [],
        ParentEventId: 0,
        DeviceVendor: 'Google Chronicle',
        DeviceProduct: 'RULE',
        DeviceEventClassId: 'USER_RESOURCE_DELETION',
      },
      _rawDataFields: {
        event_metadata_productLogId: '-1dx951e1bohf',
        event_metadata_eventTimestamp: '2024-02-02T10:05:33.042463Z',
        event_metadata_collectedTimestamp: '2024-02-02T10:05:33.754434041Z',
        event_metadata_eventType: 'USER_RESOURCE_DELETION',
        event_metadata_vendorName: 'Google Cloud Platform',
        event_metadata_productName: 'BigQuery',
        event_metadata_productEventType:
          'google.cloud.bigquery.v2.DatasetService.DeleteDataset',
        event_metadata_urlBackToProduct:
          'projects/dummyProject/logs/cloudaudit.googleapis.com%2Factivity',
        event_metadata_ingestedTimestamp: '2024-02-02T10:05:34.880976Z',
        event_metadata_id: 'AAAAAK0mdcLyzRZ2hAjZIvzsy6gAAAAADgAAAAEAAAA=',
        event_metadata_logType: 'GCP_CLOUDAUDIT',
        event_metadata_baseLabels_logTypes_1: 'GCP_CLOUDAUDIT',
        event_metadata_baseLabels_allowScopedAccess: 'True',
        event_metadata_enrichmentLabels_logTypes_1: 'GCP_IAM_ANALYSIS',
        event_metadata_enrichmentLabels_logTypes_2: 'GCP_IAM_CONTEXT',
        event_metadata_enrichmentLabels_allowScopedAccess: 'True',
        event_additional_caller_network:
          '//compute.googleapis.com/projects/dummyProject/global/networks/__unknown__',
        event_additional_metadata_type:
          'type.googleapis.com/google.cloud.audit.BigQueryAuditMetadata',
        'event_additional_requestMetadata.callerIp_0':
          'Request came from a GCE VM in the same organization. : REPLACED',
        'event_additional_requestMetadata.callerNetwork_1':
          'Request originated from a GCE VM or an on-prem VM behind a VPN, and the log was enhanced with additional information : REPLACED',
        event_additional_type:
          'type.googleapis.com/google.cloud.audit.AuditLog',
        event_principal_hostname: '10.1.0.8',
        event_principal_user_userid: 'terraform-sa',
        event_principal_user_userDisplayName:
          'A SA to run the vm that refresh threats and resources',
        event_principal_user_emailAddresses_1:
          'sa-cron-vm@scce-lab-401713.iam.gserviceaccount.com',
        event_principal_user_emailAddresses_2:
          'sa-cron-vm@scce-lab-401713.iam.gserviceaccount.com',
        event_principal_user_emailAddresses_3:
          'terraform-sa@scce-lab-401713.iam.gserviceaccount.com',
        event_principal_user_emailAddresses_4:
          'sa-cron-vm@scce-lab-401713.iam.gserviceaccount.com',
        event_principal_user_productObjectId: '100282268471516296206',
        event_principal_user_attribute_cloud_environment:
          'GOOGLE_CLOUD_PLATFORM',
        event_principal_user_attribute_roles_1_name:
          'roles/storage.objectAdmin',
        event_principal_user_attribute_roles_1_type: 'SERVICE_ACCOUNT',
        event_principal_user_attribute_permissions_1_name:
          'bigquery.datasets.delete',
        event_principal_ip_1: '10.1.0.8',
        event_principal_asset_hostname: '10.1.0.8',
        event_target_user_userid:
          'terraform-sa@scce-lab-401713.iam.gserviceaccount.com',
        event_target_application: 'bigquery.googleapis.com',
        event_target_resource_name: 'sccdemodataset',
        event_target_resource_resourceType: 'DATABASE',
        event_target_resource_resourceSubtype: 'bigquery_dataset',
        event_target_resource_productObjectId: 'sccdemodataset',
        event_target_cloud_project_name: 'scce-lab-401713',
        event_target_resourceAncestors_1_resourceType: 'DATABASE',
        event_target_resourceAncestors_2_name: 'scce-lab-401713',
        event_target_resourceAncestors_2_resourceType: 'CLOUD_PROJECT',
        event_securityResult_1_categoryDetails_1:
          'projects/dummyProject/logs/cloudaudit.googleapis.com%2Factivity',
        event_securityResult_1_description: 'DELETE',
        event_securityResult_1_action_1: 'ALLOW',
        event_securityResult_1_severity: 'INFORMATIONAL',
        event_network_http_userAgent:
          'google-cloud-sdk462.0.1 (gzip),gzip(gfe)',
        event_network_http_parsedUserAgent_family: 'USER_DEFINED',
        event_network_http_parsedUserAgent_device: 'google-cloud-sdk462.0.1',
        type: 'GCTI_FINDING',
        detection_1_ruleName:
          'SCC: Discovery: Service Account Self-Investigation with Resource Creation',
        detection_1_summary: 'Rule Detection',
        detection_1_description:
          'Detection of an IAM service account credential that is used to investigate the roles and permissions associated with that same service account',
        detection_1_severity: 'HIGH',
        detection_1_urlBackToProduct:
          'https://gglwl.backstory.chronicle.security/alert?alertId=de_bd51e7b7-3370-44c0-c738-2f8bcf5b3dd6',
        detection_1_ruleId: 'ur_c512c6b6-56fa-41d5-aeae-b01b2d52cfe8',
        detection_1_alertState: 'ALERTING',
        detection_1_ruleType: 'MULTI_EVENT',
        detection_1_detectionFields_1_key: 'service_account',
        detection_1_detectionFields_1_value:
          'sa-cron-vm@scce-lab-401713.iam.gserviceaccount.com',
        detection_1_detectionFields_1_source:
          'udm.principal.user.email_addresses',
        detection_1_ruleLabels_1_key: 'reference',
        detection_1_ruleLabels_1_value:
          'https://cloud.google.com/security-command-center/docs/how-to-investigate-threats#service_account_self-investigation',
        detection_1_ruleLabels_2_key: 'rule_name',
        detection_1_ruleLabels_2_value:
          'SCC: Discovery: Service Account Self-Investigation with Resource Creation',
        detection_1_outcomes_1_key: 'roles',
        detection_1_outcomes_1_value: 'roles/storage.objectAdmin',
        detection_1_outcomes_2_key: 'group_memberships',
        detection_1_outcomes_3_key: 'ip',
        detection_1_outcomes_3_source: 'udm.principal.ip',
        detection_1_outcomes_4_key: 'principal_email_address',
        detection_1_outcomes_4_value:
          'sa-cron-vm@scce-lab-401713.iam.gserviceaccount.com',
        detection_1_outcomes_4_source: 'udm.principal.user.email_addresses',
        detection_1_outcomes_5_key: 'risk_score',
        detection_1_outcomes_5_value: '90',
        detection_1_outcomes_6_key: 'vendor_name',
        detection_1_outcomes_6_value: 'Google',
        detection_1_outcomes_7_key: 'product_name',
        detection_1_outcomes_7_value: 'Security Command Center',
        detection_1_ruleSet: '92f84c0d-678c-c2ba-fd76-9baa399885a2',
        detection_1_ruleSetDisplayName:
          'CDIR SCC Enhanced Defense Discovery Alerts',
        detection_1_riskScore: '90',
        detection_1_rulesetCategoryDisplayName: 'Cloud Threats',
        createdTime: '2024-02-02T11:05:32.43988Z',
        lastUpdatedTime: '2024-02-02T11:05:32.43988Z',
        id: 'de_bd51e7b7-3370-44c0-c738-2f8bcf5b3dd6',
        timeWindow_startTime: '2024-02-02T09:36:00Z',
        timeWindow_endTime: '2024-02-02T10:06:00Z',
        detectionTime: '2024-02-02T10:06:00Z',
        tags_1: 'TA0007',
        tags_2: 'T1069.003',
        alert_type: 'RULE',
        event_type: 'USER_RESOURCE_DELETION',
        event_category: 'USER',
        event_principal_ip: '',
        event_principal_user_emailAddresses:
          'sa-cron-vm@scce-lab-401713.iam.gserviceaccount.com',
        event_principal_user_attribute_labels_authorization_granted: 'true',
        'event_principal_labels_requestMetadata.callerIp':
          'Request came from a GCE VM in the same organization. : REPLACED',
        'event_principal_labels_requestMetadata.callerNetwork':
          'Request originated from a GCE VM or an on-prem VM behind a VPN, and the log was enhanced with additional information : REPLACED',
        event_about_labels_type:
          'type.googleapis.com/google.cloud.audit.AuditLog',
        event_about_labels_metadata_type:
          'type.googleapis.com/google.cloud.audit.BigQueryAuditMetadata',
        event_about_labels_caller_network:
          '//compute.googleapis.com/projects/dummyProject/global/networks/__unknown__',
        event_securityResult_detectionFields_resource_name:
          'projects/dummyProject/datasets/sccdemodataset',
        event_securityResult_detectionFields_resource:
          'projects/dummyProject/datasets/sccdemodataset',
        detection_detectionFields_service_account:
          'sa-cron-vm@scce-lab-401713.iam.gserviceaccount.com',
        detection_ruleLabels_reference:
          'https://cloud.google.com/security-command-center/docs/how-to-investigate-threats#service_account_self-investigation',
        detection_ruleLabels_rule_name:
          'SCC: Discovery: Service Account Self-Investigation with Resource Creation',
        detection_outcomes_roles: 'roles/storage.objectAdmin',
        detection_outcomes_principal_email_address:
          'sa-cron-vm@scce-lab-401713.iam.gserviceaccount.com',
        detection_outcomes_risk_score: '90',
        detection_outcomes_vendor_name: 'Google',
        detection_outcomes_product_name: 'Security Command Center',
      },
      Environment: null,
      SourceSystemName: null,
      Extensions: [],
    },
    {
      _fields: {
        BaseEventIds: [],
        ParentEventId: 0,
        DeviceVendor: 'Google Chronicle',
        DeviceProduct: 'RULE',
        DeviceEventClassId: 'USER_RESOURCE_DELETION',
      },
      _rawDataFields: {
        event_metadata_productLogId: '-1dx951e1bohf',
        event_metadata_eventTimestamp: '2024-02-02T10:05:33.042463Z',
        event_metadata_collectedTimestamp: '2024-02-02T10:05:33.754434041Z',
        event_metadata_eventType: 'USER_RESOURCE_DELETION',
        event_metadata_vendorName: 'Google Cloud Platform',
        event_metadata_productName: 'BigQuery',
        event_metadata_productEventType:
          'google.cloud.bigquery.v2.DatasetService.DeleteDataset',
        event_metadata_urlBackToProduct:
          'projects/dummyProject/logs/cloudaudit.googleapis.com%2Factivity',
        event_metadata_ingestedTimestamp: '2024-02-02T10:05:34.880976Z',
        event_metadata_id: 'AAAAAK0mdcLyzRZ2hAjZIvzsy6gAAAAADgAAAAEAAAA=',
        event_metadata_logType: 'GCP_CLOUDAUDIT',
        event_metadata_baseLabels_logTypes_1: 'GCP_CLOUDAUDIT',
        event_metadata_baseLabels_allowScopedAccess: 'True',
        event_metadata_enrichmentLabels_logTypes_1: 'GCP_IAM_ANALYSIS',
        event_metadata_enrichmentLabels_logTypes_2: 'GCP_IAM_CONTEXT',
        event_metadata_enrichmentLabels_allowScopedAccess: 'True',
        event_additional_caller_network:
          '//compute.googleapis.com/projects/dummyProject/global/networks/__unknown__',
        event_additional_metadata_type:
          'type.googleapis.com/google.cloud.audit.BigQueryAuditMetadata',
        'event_additional_requestMetadata.callerIp_0':
          'Request came from a GCE VM in the same organization. : REPLACED',
        'event_additional_requestMetadata.callerNetwork_1':
          'Request originated from a GCE VM or an on-prem VM behind a VPN, and the log was enhanced with additional information : REPLACED',
        event_additional_type:
          'type.googleapis.com/google.cloud.audit.AuditLog',
        event_principal_hostname: '10.1.0.8',
        event_principal_user_userid: 'terraform-sa',
        event_principal_user_userDisplayName:
          'A SA to run the vm that refresh threats and resources',
        event_principal_user_emailAddresses_1:
          'sa-cron-vm@scce-lab-401713.iam.gserviceaccount.com',
        event_principal_user_emailAddresses_2:
          'sa-cron-vm@scce-lab-401713.iam.gserviceaccount.com',
        event_principal_user_emailAddresses_3:
          'terraform-sa@scce-lab-401713.iam.gserviceaccount.com',
        event_principal_user_emailAddresses_4:
          'sa-cron-vm@scce-lab-401713.iam.gserviceaccount.com',
        event_principal_user_productObjectId: '100282268471516296206',
        event_principal_user_attribute_cloud_environment:
          'GOOGLE_CLOUD_PLATFORM',
        event_principal_user_attribute_roles_1_name:
          'roles/storage.objectAdmin',
        event_principal_user_attribute_roles_1_type: 'SERVICE_ACCOUNT',
        event_principal_user_attribute_permissions_1_name:
          'bigquery.datasets.delete',
        event_principal_ip_1: '10.1.0.8',
        event_principal_asset_hostname: '10.1.0.8',
        event_target_user_userid:
          'terraform-sa@scce-lab-401713.iam.gserviceaccount.com',
        event_target_application: 'bigquery.googleapis.com',
        event_target_resource_name: 'sccdemodataset',
        event_target_resource_resourceType: 'DATABASE',
        event_target_resource_resourceSubtype: 'bigquery_dataset',
        event_target_resource_productObjectId: 'sccdemodataset',
        event_target_cloud_project_name: 'scce-lab-401713',
        event_target_resourceAncestors_1_resourceType: 'DATABASE',
        event_target_resourceAncestors_2_name: 'scce-lab-401713',
        event_target_resourceAncestors_2_resourceType: 'CLOUD_PROJECT',
        event_securityResult_1_categoryDetails_1:
          'projects/dummyProject/logs/cloudaudit.googleapis.com%2Factivity',
        event_securityResult_1_description: 'DELETE',
        event_securityResult_1_action_1: 'ALLOW',
        event_securityResult_1_severity: 'INFORMATIONAL',
        event_network_http_userAgent:
          'google-cloud-sdk462.0.1 (gzip),gzip(gfe)',
        event_network_http_parsedUserAgent_family: 'USER_DEFINED',
        event_network_http_parsedUserAgent_device: 'google-cloud-sdk462.0.1',
        type: 'GCTI_FINDING',
        detection_1_ruleName:
          'SCC: Discovery: Service Account Self-Investigation with Resource Creation',
        detection_1_summary: 'Rule Detection',
        detection_1_description:
          'Detection of an IAM service account credential that is used to investigate the roles and permissions associated with that same service account',
        detection_1_severity: 'HIGH',
        detection_1_urlBackToProduct:
          'https://gglwl.backstory.chronicle.security/alert?alertId=de_bd51e7b7-3370-44c0-c738-2f8bcf5b3dd6',
        detection_1_ruleId: 'ur_c512c6b6-56fa-41d5-aeae-b01b2d52cfe8',
        detection_1_alertState: 'ALERTING',
        detection_1_ruleType: 'MULTI_EVENT',
        detection_1_detectionFields_1_key: 'service_account',
        detection_1_detectionFields_1_value:
          'sa-cron-vm@scce-lab-401713.iam.gserviceaccount.com',
        detection_1_detectionFields_1_source:
          'udm.principal.user.email_addresses',
        detection_1_ruleLabels_1_key: 'reference',
        detection_1_ruleLabels_1_value:
          'https://cloud.google.com/security-command-center/docs/how-to-investigate-threats#service_account_self-investigation',
        detection_1_ruleLabels_2_key: 'rule_name',
        detection_1_ruleLabels_2_value:
          'SCC: Discovery: Service Account Self-Investigation with Resource Creation',
        detection_1_outcomes_1_key: 'roles',
        detection_1_outcomes_1_value: 'roles/storage.objectAdmin',
        detection_1_outcomes_2_key: 'group_memberships',
        detection_1_outcomes_3_key: 'ip',
        detection_1_outcomes_3_source: 'udm.principal.ip',
        detection_1_outcomes_4_key: 'principal_email_address',
        detection_1_outcomes_4_value:
          'sa-cron-vm@scce-lab-401713.iam.gserviceaccount.com',
        detection_1_outcomes_4_source: 'udm.principal.user.email_addresses',
        detection_1_outcomes_5_key: 'risk_score',
        detection_1_outcomes_5_value: '90',
        detection_1_outcomes_6_key: 'vendor_name',
        detection_1_outcomes_6_value: 'Google',
        detection_1_outcomes_7_key: 'product_name',
        detection_1_outcomes_7_value: 'Security Command Center',
        detection_1_ruleSet: '92f84c0d-678c-c2ba-fd76-9baa399885a2',
        detection_1_ruleSetDisplayName:
          'CDIR SCC Enhanced Defense Discovery Alerts',
        detection_1_riskScore: '90',
        detection_1_rulesetCategoryDisplayName: 'Cloud Threats',
        createdTime: '2024-02-02T11:05:32.43988Z',
        lastUpdatedTime: '2024-02-02T11:05:32.43988Z',
        id: 'de_bd51e7b7-3370-44c0-c738-2f8bcf5b3dd6',
        timeWindow_startTime: '2024-02-02T09:36:00Z',
        timeWindow_endTime: '2024-02-02T10:06:00Z',
        detectionTime: '2024-02-02T10:06:00Z',
        tags_1: 'TA0007',
        tags_2: 'T1069.003',
        alert_type: 'RULE',
        event_type: 'USER_RESOURCE_DELETION',
        event_category: 'USER',
        event_principal_ip: '',
        event_principal_user_emailAddresses:
          'terraform-sa@scce-lab-401713.iam.gserviceaccount.com',
        event_principal_user_attribute_labels_authorization_granted: 'true',
        'event_principal_labels_requestMetadata.callerIp':
          'Request came from a GCE VM in the same organization. : REPLACED',
        'event_principal_labels_requestMetadata.callerNetwork':
          'Request originated from a GCE VM or an on-prem VM behind a VPN, and the log was enhanced with additional information : REPLACED',
        event_about_labels_type:
          'type.googleapis.com/google.cloud.audit.AuditLog',
        event_about_labels_metadata_type:
          'type.googleapis.com/google.cloud.audit.BigQueryAuditMetadata',
        event_about_labels_caller_network:
          '//compute.googleapis.com/projects/dummyProject/global/networks/__unknown__',
        event_securityResult_detectionFields_resource_name:
          'projects/dummyProject/datasets/sccdemodataset',
        event_securityResult_detectionFields_resource:
          'projects/dummyProject/datasets/sccdemodataset',
        detection_detectionFields_service_account:
          'sa-cron-vm@scce-lab-401713.iam.gserviceaccount.com',
        detection_ruleLabels_reference:
          'https://cloud.google.com/security-command-center/docs/how-to-investigate-threats#service_account_self-investigation',
        detection_ruleLabels_rule_name:
          'SCC: Discovery: Service Account Self-Investigation with Resource Creation',
        detection_outcomes_roles: 'roles/storage.objectAdmin',
        detection_outcomes_principal_email_address:
          'sa-cron-vm@scce-lab-401713.iam.gserviceaccount.com',
        detection_outcomes_risk_score: '90',
        detection_outcomes_vendor_name: 'Google',
        detection_outcomes_product_name: 'Security Command Center',
      },
      Environment: null,
      SourceSystemName: null,
      Extensions: [],
    },
    {
      _fields: {
        BaseEventIds: [],
        ParentEventId: 0,
        DeviceVendor: 'Google Chronicle',
        DeviceProduct: 'RULE',
        DeviceEventClassId: 'USER_RESOURCE_DELETION',
      },
      _rawDataFields: {
        event_metadata_productLogId: '-1dx951e1bohf',
        event_metadata_eventTimestamp: '2024-02-02T10:05:33.042463Z',
        event_metadata_collectedTimestamp: '2024-02-02T10:05:33.754434041Z',
        event_metadata_eventType: 'USER_RESOURCE_DELETION',
        event_metadata_vendorName: 'Google Cloud Platform',
        event_metadata_productName: 'BigQuery',
        event_metadata_productEventType:
          'google.cloud.bigquery.v2.DatasetService.DeleteDataset',
        event_metadata_urlBackToProduct:
          'projects/dummyProject/logs/cloudaudit.googleapis.com%2Factivity',
        event_metadata_ingestedTimestamp: '2024-02-02T10:05:34.880976Z',
        event_metadata_id: 'AAAAAK0mdcLyzRZ2hAjZIvzsy6gAAAAADgAAAAEAAAA=',
        event_metadata_logType: 'GCP_CLOUDAUDIT',
        event_metadata_baseLabels_logTypes_1: 'GCP_CLOUDAUDIT',
        event_metadata_baseLabels_allowScopedAccess: 'True',
        event_metadata_enrichmentLabels_logTypes_1: 'GCP_IAM_ANALYSIS',
        event_metadata_enrichmentLabels_logTypes_2: 'GCP_IAM_CONTEXT',
        event_metadata_enrichmentLabels_allowScopedAccess: 'True',
        event_additional_caller_network:
          '//compute.googleapis.com/projects/dummyProject/global/networks/__unknown__',
        event_additional_metadata_type:
          'type.googleapis.com/google.cloud.audit.BigQueryAuditMetadata',
        'event_additional_requestMetadata.callerIp_0':
          'Request came from a GCE VM in the same organization. : REPLACED',
        'event_additional_requestMetadata.callerNetwork_1':
          'Request originated from a GCE VM or an on-prem VM behind a VPN, and the log was enhanced with additional information : REPLACED',
        event_additional_type:
          'type.googleapis.com/google.cloud.audit.AuditLog',
        event_principal_hostname: '10.1.0.8',
        event_principal_user_userid: 'terraform-sa',
        event_principal_user_userDisplayName:
          'A SA to run the vm that refresh threats and resources',
        event_principal_user_emailAddresses_1:
          'sa-cron-vm@scce-lab-401713.iam.gserviceaccount.com',
        event_principal_user_emailAddresses_2:
          'sa-cron-vm@scce-lab-401713.iam.gserviceaccount.com',
        event_principal_user_emailAddresses_3:
          'terraform-sa@scce-lab-401713.iam.gserviceaccount.com',
        event_principal_user_emailAddresses_4:
          'sa-cron-vm@scce-lab-401713.iam.gserviceaccount.com',
        event_principal_user_productObjectId: '100282268471516296206',
        event_principal_user_attribute_cloud_environment:
          'GOOGLE_CLOUD_PLATFORM',
        event_principal_user_attribute_roles_1_name:
          'roles/storage.objectAdmin',
        event_principal_user_attribute_roles_1_type: 'SERVICE_ACCOUNT',
        event_principal_user_attribute_permissions_1_name:
          'bigquery.datasets.delete',
        event_principal_ip_1: '10.1.0.8',
        event_principal_asset_hostname: '10.1.0.8',
        event_target_user_userid:
          'terraform-sa@scce-lab-401713.iam.gserviceaccount.com',
        event_target_application: 'bigquery.googleapis.com',
        event_target_resource_name: 'sccdemodataset',
        event_target_resource_resourceType: 'DATABASE',
        event_target_resource_resourceSubtype: 'bigquery_dataset',
        event_target_resource_productObjectId: 'sccdemodataset',
        event_target_cloud_project_name: 'scce-lab-401713',
        event_target_resourceAncestors_1_resourceType: 'DATABASE',
        event_target_resourceAncestors_2_name: 'scce-lab-401713',
        event_target_resourceAncestors_2_resourceType: 'CLOUD_PROJECT',
        event_securityResult_1_categoryDetails_1:
          'projects/dummyProject/logs/cloudaudit.googleapis.com%2Factivity',
        event_securityResult_1_description: 'DELETE',
        event_securityResult_1_action_1: 'ALLOW',
        event_securityResult_1_severity: 'INFORMATIONAL',
        event_network_http_userAgent:
          'google-cloud-sdk462.0.1 (gzip),gzip(gfe)',
        event_network_http_parsedUserAgent_family: 'USER_DEFINED',
        event_network_http_parsedUserAgent_device: 'google-cloud-sdk462.0.1',
        type: 'GCTI_FINDING',
        detection_1_ruleName:
          'SCC: Discovery: Service Account Self-Investigation with Resource Creation',
        detection_1_summary: 'Rule Detection',
        detection_1_description:
          'Detection of an IAM service account credential that is used to investigate the roles and permissions associated with that same service account',
        detection_1_severity: 'HIGH',
        detection_1_urlBackToProduct:
          'https://gglwl.backstory.chronicle.security/alert?alertId=de_bd51e7b7-3370-44c0-c738-2f8bcf5b3dd6',
        detection_1_ruleId: 'ur_c512c6b6-56fa-41d5-aeae-b01b2d52cfe8',
        detection_1_alertState: 'ALERTING',
        detection_1_ruleType: 'MULTI_EVENT',
        detection_1_detectionFields_1_key: 'service_account',
        detection_1_detectionFields_1_value:
          'sa-cron-vm@scce-lab-401713.iam.gserviceaccount.com',
        detection_1_detectionFields_1_source:
          'udm.principal.user.email_addresses',
        detection_1_ruleLabels_1_key: 'reference',
        detection_1_ruleLabels_1_value:
          'https://cloud.google.com/security-command-center/docs/how-to-investigate-threats#service_account_self-investigation',
        detection_1_ruleLabels_2_key: 'rule_name',
        detection_1_ruleLabels_2_value:
          'SCC: Discovery: Service Account Self-Investigation with Resource Creation',
        detection_1_outcomes_1_key: 'roles',
        detection_1_outcomes_1_value: 'roles/storage.objectAdmin',
        detection_1_outcomes_2_key: 'group_memberships',
        detection_1_outcomes_3_key: 'ip',
        detection_1_outcomes_3_source: 'udm.principal.ip',
        detection_1_outcomes_4_key: 'principal_email_address',
        detection_1_outcomes_4_value:
          'sa-cron-vm@scce-lab-401713.iam.gserviceaccount.com',
        detection_1_outcomes_4_source: 'udm.principal.user.email_addresses',
        detection_1_outcomes_5_key: 'risk_score',
        detection_1_outcomes_5_value: '90',
        detection_1_outcomes_6_key: 'vendor_name',
        detection_1_outcomes_6_value: 'Google',
        detection_1_outcomes_7_key: 'product_name',
        detection_1_outcomes_7_value: 'Security Command Center',
        detection_1_ruleSet: '92f84c0d-678c-c2ba-fd76-9baa399885a2',
        detection_1_ruleSetDisplayName:
          'CDIR SCC Enhanced Defense Discovery Alerts',
        detection_1_riskScore: '90',
        detection_1_rulesetCategoryDisplayName: 'Cloud Threats',
        createdTime: '2024-02-02T11:05:32.43988Z',
        lastUpdatedTime: '2024-02-02T11:05:32.43988Z',
        id: 'de_bd51e7b7-3370-44c0-c738-2f8bcf5b3dd6',
        timeWindow_startTime: '2024-02-02T09:36:00Z',
        timeWindow_endTime: '2024-02-02T10:06:00Z',
        detectionTime: '2024-02-02T10:06:00Z',
        tags_1: 'TA0007',
        tags_2: 'T1069.003',
        alert_type: 'RULE',
        event_type: 'USER_RESOURCE_DELETION',
        event_category: 'USER',
        event_principal_ip: '',
        event_principal_user_emailAddresses:
          'sa-cron-vm@scce-lab-401713.iam.gserviceaccount.com',
        event_principal_user_attribute_labels_authorization_granted: 'true',
        'event_principal_labels_requestMetadata.callerIp':
          'Request came from a GCE VM in the same organization. : REPLACED',
        'event_principal_labels_requestMetadata.callerNetwork':
          'Request originated from a GCE VM or an on-prem VM behind a VPN, and the log was enhanced with additional information : REPLACED',
        event_about_labels_type:
          'type.googleapis.com/google.cloud.audit.AuditLog',
        event_about_labels_metadata_type:
          'type.googleapis.com/google.cloud.audit.BigQueryAuditMetadata',
        event_about_labels_caller_network:
          '//compute.googleapis.com/projects/dummyProject/global/networks/__unknown__',
        event_securityResult_detectionFields_resource_name:
          'projects/dummyProject/datasets/sccdemodataset',
        event_securityResult_detectionFields_resource:
          'projects/dummyProject/datasets/sccdemodataset',
        detection_detectionFields_service_account:
          'sa-cron-vm@scce-lab-401713.iam.gserviceaccount.com',
        detection_ruleLabels_reference:
          'https://cloud.google.com/security-command-center/docs/how-to-investigate-threats#service_account_self-investigation',
        detection_ruleLabels_rule_name:
          'SCC: Discovery: Service Account Self-Investigation with Resource Creation',
        detection_outcomes_roles: 'roles/storage.objectAdmin',
        detection_outcomes_principal_email_address:
          'sa-cron-vm@scce-lab-401713.iam.gserviceaccount.com',
        detection_outcomes_risk_score: '90',
        detection_outcomes_vendor_name: 'Google',
        detection_outcomes_product_name: 'Security Command Center',
      },
      Environment: null,
      SourceSystemName: null,
      Extensions: [],
    },
    {
      _fields: {
        BaseEventIds: [],
        ParentEventId: 0,
        DeviceVendor: 'Google Chronicle',
        DeviceProduct: 'RULE',
        DeviceEventClassId: 'USER_RESOURCE_UPDATE_PERMISSIONS',
      },
      _rawDataFields: {
        event_metadata_productLogId: '1xn79uve4fxi8',
        event_metadata_eventTimestamp: '2024-02-02T10:05:38.173267620Z',
        event_metadata_collectedTimestamp: '2024-02-02T10:05:39.153105009Z',
        event_metadata_eventType: 'USER_RESOURCE_UPDATE_PERMISSIONS',
        event_metadata_vendorName: 'Google Cloud Platform',
        event_metadata_productName: 'Google Cloud IAM',
        event_metadata_productEventType: 'google.iam.admin.v1.SetIAMPolicy',
        event_metadata_urlBackToProduct:
          'projects/dummyProject/logs/cloudaudit.googleapis.com%2Factivity',
        event_metadata_ingestedTimestamp: '2024-02-02T10:05:39.966493Z',
        event_metadata_id: 'AAAAAMfeLRET4dcdOc62veME2B8AAAAADgAAAAAAAAA=',
        event_metadata_logType: 'GCP_CLOUDAUDIT',
        event_metadata_baseLabels_logTypes_1: 'GCP_CLOUDAUDIT',
        event_metadata_baseLabels_allowScopedAccess: 'True',
        event_metadata_enrichmentLabels_logTypes_1: 'GCP_IAM_ANALYSIS',
        event_metadata_enrichmentLabels_logTypes_2: 'GCP_IAM_CONTEXT',
        event_metadata_enrichmentLabels_allowScopedAccess: 'True',
        event_additional_response_bindings_members_1_0:
          'serviceAccount:sa-cron-vm@scce-lab-401713.iam.gserviceaccount.com',
        event_additional_req_bindings_members_0_1:
          'serviceAccount:terraform-sa@scce-lab-401713.iam.gserviceaccount.com',
        event_additional_req_bindings_members_1_0:
          'serviceAccount:sa-cron-vm@scce-lab-401713.iam.gserviceaccount.com',
        'event_additional_requestMetadata.callerIp_0':
          'Request came from a GCE VM in a different organization. : REPLACED',
        event_additional_req_policy_etag: 'BwYQY0DTrBg=',
        event_additional_req_bindings_members_0_0:
          'serviceAccount:sa-cron-vm@scce-lab-401713.iam.gserviceaccount.com',
        event_additional_response_bindings_members_0_0:
          'serviceAccount:sa-cron-vm@scce-lab-401713.iam.gserviceaccount.com',
        'event_additional_requestMetadata.callerIsGceClient_1':
          'Request originated from a GCE VM or an on-prem VM behind a VPN, and the log was enhanced with additional information : REPLACED',
        event_additional_res_version: '1',
        event_additional_response_bindings_members_1_1:
          'serviceAccount:terraform-sa@scce-lab-401713.iam.gserviceaccount.com',
        event_additional_response_bindings_members_0_1:
          'serviceAccount:terraform-sa@scce-lab-401713.iam.gserviceaccount.com',
        event_additional_req_bindings_members_1_1:
          'serviceAccount:terraform-sa@scce-lab-401713.iam.gserviceaccount.com',
        event_additional_request_time: '2024-02-02T10:05:38.368015418Z',
        event_additional_request_attributes_time:
          '2024-02-02T10:05:38.368015418Z',
        event_additional_type:
          'type.googleapis.com/google.cloud.audit.AuditLog',
        event_principal_hostname: 'gce-internal-ip',
        event_principal_user_userid:
          'terraform-sa@scce-lab-401713.iam.gserviceaccount.com',
        event_principal_user_userDisplayName:
          'A SA to run the vm that refresh threats and resources',
        event_principal_user_emailAddresses_1:
          'sa-cron-vm@scce-lab-401713.iam.gserviceaccount.com',
        event_principal_user_emailAddresses_2:
          'sa-cron-vm@scce-lab-401713.iam.gserviceaccount.com',
        event_principal_user_emailAddresses_3:
          'terraform-sa@scce-lab-401713.iam.gserviceaccount.com',
        event_principal_user_emailAddresses_4:
          'sa-cron-vm@scce-lab-401713.iam.gserviceaccount.com',
        event_principal_user_productObjectId: '100282268471516296206',
        event_principal_user_attribute_cloud_environment:
          'GOOGLE_CLOUD_PLATFORM',
        event_principal_user_attribute_roles_1_name:
          'roles/storage.objectAdmin',
        event_principal_user_attribute_roles_1_type: 'SERVICE_ACCOUNT',
        event_principal_user_attribute_permissions_1_name:
          'iam.serviceAccounts.setIamPolicy',
        event_principal_asset_hostname: 'gce-internal-ip',
        event_target_user_userid:
          'terraform-sa@scce-lab-401713.iam.gserviceaccount.com',
        event_target_user_userDisplayName: 'A SA with Zero Access',
        event_target_user_emailAddresses_1:
          'sa-no-access@scce-lab-401713.iam.gserviceaccount.com',
        event_target_user_emailAddresses_2:
          'sa-no-access@scce-lab-401713.iam.gserviceaccount.com',
        event_target_user_productObjectId: '108132278076916519438',
        event_target_user_attribute_cloud_environment: 'GOOGLE_CLOUD_PLATFORM',
        event_target_user_attribute_roles_1_name:
          'roles/iam.serviceAccountTokenCreator',
        event_target_user_attribute_roles_2_name:
          'roles/iam.serviceAccountUser',
        event_target_application: 'iam.googleapis.com',
        event_target_resource_name:
          'sa-no-access@scce-lab-401713.iam.gserviceaccount.com',
        event_target_resource_resourceType: 'SERVICE_ACCOUNT',
        event_target_resource_resourceSubtype: 'service_account',
        event_target_resource_productObjectId: '108132278076916519438',
        event_target_cloud_project_name: 'scce-lab-401713',
        event_target_resourceAncestors_1_resourceType: 'SERVICE_ACCOUNT',
        event_target_resourceAncestors_2_name: 'scce-lab-401713',
        event_target_resourceAncestors_2_resourceType: 'CLOUD_PROJECT',
        event_target_resourceAncestors_3_name:
          'projects/dummyProject/serviceAccounts/108132278076916519438',
        event_securityResult_1_categoryDetails_1:
          'projects/dummyProject/logs/cloudaudit.googleapis.com%2Factivity',
        event_securityResult_1_action_1: 'ALLOW',
        event_securityResult_1_severity: 'INFORMATIONAL',
        event_network_http_userAgent:
          'google-cloud-sdk gcloud/462.0.1 command/gcloud.iam.service-accounts.add-iam-policy-binding invocation-id/44032e1dafba4adeb6e6ff19b4058c39 environment/GCE environment-version/None client-os/LINUX client-os-ver/5.10.0 client-pltf-arch/x86_64 interactive/True from-script/False python/3.11.7 term/xterm-256color (Linux 5.10.0-26-cloud-amd64),gzip(gfe)',
        event_network_http_parsedUserAgent_family: 'USER_DEFINED',
        type: 'GCTI_FINDING',
        detection_1_ruleName:
          'SCC: Discovery: Service Account Self-Investigation with Resource Creation',
        detection_1_summary: 'Rule Detection',
        detection_1_description:
          'Detection of an IAM service account credential that is used to investigate the roles and permissions associated with that same service account',
        detection_1_severity: 'HIGH',
        detection_1_urlBackToProduct:
          'https://gglwl.backstory.chronicle.security/alert?alertId=de_bd51e7b7-3370-44c0-c738-2f8bcf5b3dd6',
        detection_1_ruleId: 'ur_c512c6b6-56fa-41d5-aeae-b01b2d52cfe8',
        detection_1_alertState: 'ALERTING',
        detection_1_ruleType: 'MULTI_EVENT',
        detection_1_detectionFields_1_key: 'service_account',
        detection_1_detectionFields_1_value:
          'sa-cron-vm@scce-lab-401713.iam.gserviceaccount.com',
        detection_1_detectionFields_1_source:
          'udm.principal.user.email_addresses',
        detection_1_ruleLabels_1_key: 'reference',
        detection_1_ruleLabels_1_value:
          'https://cloud.google.com/security-command-center/docs/how-to-investigate-threats#service_account_self-investigation',
        detection_1_ruleLabels_2_key: 'rule_name',
        detection_1_ruleLabels_2_value:
          'SCC: Discovery: Service Account Self-Investigation with Resource Creation',
        detection_1_outcomes_1_key: 'roles',
        detection_1_outcomes_1_value: 'roles/storage.objectAdmin',
        detection_1_outcomes_2_key: 'group_memberships',
        detection_1_outcomes_3_key: 'ip',
        detection_1_outcomes_3_source: 'udm.principal.ip',
        detection_1_outcomes_4_key: 'principal_email_address',
        detection_1_outcomes_4_value:
          'sa-cron-vm@scce-lab-401713.iam.gserviceaccount.com',
        detection_1_outcomes_4_source: 'udm.principal.user.email_addresses',
        detection_1_outcomes_5_key: 'risk_score',
        detection_1_outcomes_5_value: '90',
        detection_1_outcomes_6_key: 'vendor_name',
        detection_1_outcomes_6_value: 'Google',
        detection_1_outcomes_7_key: 'product_name',
        detection_1_outcomes_7_value: 'Security Command Center',
        detection_1_ruleSet: '92f84c0d-678c-c2ba-fd76-9baa399885a2',
        detection_1_ruleSetDisplayName:
          'CDIR SCC Enhanced Defense Discovery Alerts',
        detection_1_riskScore: '90',
        detection_1_rulesetCategoryDisplayName: 'Cloud Threats',
        createdTime: '2024-02-02T11:05:32.43988Z',
        lastUpdatedTime: '2024-02-02T11:05:32.43988Z',
        id: 'de_bd51e7b7-3370-44c0-c738-2f8bcf5b3dd6',
        timeWindow_startTime: '2024-02-02T09:36:00Z',
        timeWindow_endTime: '2024-02-02T10:06:00Z',
        detectionTime: '2024-02-02T10:06:00Z',
        tags_1: 'TA0007',
        tags_2: 'T1069.003',
        alert_type: 'RULE',
        event_type: 'USER_RESOURCE_UPDATE_PERMISSIONS',
        event_category: 'USER',
        event_principal_user_emailAddresses:
          'sa-cron-vm@scce-lab-401713.iam.gserviceaccount.com',
        event_target_user_emailAddresses:
          'sa-no-access@scce-lab-401713.iam.gserviceaccount.com',
        event_principal_user_attribute_labels_authorization_granted: 'true',
        event_principal_labels_req_bindings_members:
          'serviceAccount:terraform-sa@scce-lab-401713.iam.gserviceaccount.com, serviceAccount:sa-cron-vm@scce-lab-401713.iam.gserviceaccount.com, serviceAccount:terraform-sa@scce-lab-401713.iam.gserviceaccount.com, serviceAccount:sa-cron-vm@scce-lab-401713.iam.gserviceaccount.com',
        'event_principal_labels_requestMetadata.callerIp':
          'Request came from a GCE VM in a different organization. : REPLACED',
        'event_principal_labels_requestMetadata.callerIsGceClient':
          'Request originated from a GCE VM or an on-prem VM behind a VPN, and the log was enhanced with additional information : REPLACED',
        event_principal_labels_request_attributes_time:
          '2024-02-02T10:05:38.368015418Z',
        event_target_resource_attribute_labels_email_id:
          'sa-no-access@scce-lab-401713.iam.gserviceaccount.com',
        event_target_resource_attribute_labels_res_etag: 'BwYQY0D8Nuc=',
        event_target_resource_attribute_labels_ser_type:
          'type.googleapis.com/google.iam.v1.logging.AuditData',
        event_target_resource_attribute_labels_request_type:
          'type.googleapis.com/google.iam.v1.SetIamPolicyRequest',
        event_target_resource_attribute_labels_res_type:
          'type.googleapis.com/google.iam.v1.Policy',
        event_target_labels_response_bindings_members:
          'serviceAccount:terraform-sa@scce-lab-401713.iam.gserviceaccount.com, serviceAccount:sa-cron-vm@scce-lab-401713.iam.gserviceaccount.com, serviceAccount:terraform-sa@scce-lab-401713.iam.gserviceaccount.com, serviceAccount:sa-cron-vm@scce-lab-401713.iam.gserviceaccount.com',
        event_about_labels_type:
          'type.googleapis.com/google.cloud.audit.AuditLog',
        event_about_labels_req_policy_etag: 'BwYQY0DTrBg=',
        event_about_labels_res_version: '1',
        event_about_labels_request_time: '2024-02-02T10:05:38.368015418Z',
        event_securityResult_detectionFields_resource_name:
          'projects/dummyProject/serviceAccounts/108132278076916519438',
        event_securityResult_detectionFields_resource:
          'projects/dummyProject/serviceAccounts/108132278076916519438',
        detection_detectionFields_service_account:
          'sa-cron-vm@scce-lab-401713.iam.gserviceaccount.com',
        detection_ruleLabels_reference:
          'https://cloud.google.com/security-command-center/docs/how-to-investigate-threats#service_account_self-investigation',
        detection_ruleLabels_rule_name:
          'SCC: Discovery: Service Account Self-Investigation with Resource Creation',
        detection_outcomes_roles: 'roles/storage.objectAdmin',
        detection_outcomes_principal_email_address:
          'sa-cron-vm@scce-lab-401713.iam.gserviceaccount.com',
        detection_outcomes_risk_score: '90',
        detection_outcomes_vendor_name: 'Google',
        detection_outcomes_product_name: 'Security Command Center',
      },
      Environment: null,
      SourceSystemName: null,
      Extensions: [],
    },
    {
      _fields: {
        BaseEventIds: [],
        ParentEventId: 0,
        DeviceVendor: 'Google Chronicle',
        DeviceProduct: 'RULE',
        DeviceEventClassId: 'USER_RESOURCE_UPDATE_PERMISSIONS',
      },
      _rawDataFields: {
        event_metadata_productLogId: '1xn79uve4fxi8',
        event_metadata_eventTimestamp: '2024-02-02T10:05:38.173267620Z',
        event_metadata_collectedTimestamp: '2024-02-02T10:05:39.153105009Z',
        event_metadata_eventType: 'USER_RESOURCE_UPDATE_PERMISSIONS',
        event_metadata_vendorName: 'Google Cloud Platform',
        event_metadata_productName: 'Google Cloud IAM',
        event_metadata_productEventType: 'google.iam.admin.v1.SetIAMPolicy',
        event_metadata_urlBackToProduct:
          'projects/dummyProject/logs/cloudaudit.googleapis.com%2Factivity',
        event_metadata_ingestedTimestamp: '2024-02-02T10:05:39.966493Z',
        event_metadata_id: 'AAAAAMfeLRET4dcdOc62veME2B8AAAAADgAAAAAAAAA=',
        event_metadata_logType: 'GCP_CLOUDAUDIT',
        event_metadata_baseLabels_logTypes_1: 'GCP_CLOUDAUDIT',
        event_metadata_baseLabels_allowScopedAccess: 'True',
        event_metadata_enrichmentLabels_logTypes_1: 'GCP_IAM_ANALYSIS',
        event_metadata_enrichmentLabels_logTypes_2: 'GCP_IAM_CONTEXT',
        event_metadata_enrichmentLabels_allowScopedAccess: 'True',
        event_additional_response_bindings_members_1_0:
          'serviceAccount:sa-cron-vm@scce-lab-401713.iam.gserviceaccount.com',
        event_additional_req_bindings_members_0_1:
          'serviceAccount:terraform-sa@scce-lab-401713.iam.gserviceaccount.com',
        event_additional_req_bindings_members_1_0:
          'serviceAccount:sa-cron-vm@scce-lab-401713.iam.gserviceaccount.com',
        'event_additional_requestMetadata.callerIp_0':
          'Request came from a GCE VM in a different organization. : REPLACED',
        event_additional_req_policy_etag: 'BwYQY0DTrBg=',
        event_additional_req_bindings_members_0_0:
          'serviceAccount:sa-cron-vm@scce-lab-401713.iam.gserviceaccount.com',
        event_additional_response_bindings_members_0_0:
          'serviceAccount:sa-cron-vm@scce-lab-401713.iam.gserviceaccount.com',
        'event_additional_requestMetadata.callerIsGceClient_1':
          'Request originated from a GCE VM or an on-prem VM behind a VPN, and the log was enhanced with additional information : REPLACED',
        event_additional_res_version: '1',
        event_additional_response_bindings_members_1_1:
          'serviceAccount:terraform-sa@scce-lab-401713.iam.gserviceaccount.com',
        event_additional_response_bindings_members_0_1:
          'serviceAccount:terraform-sa@scce-lab-401713.iam.gserviceaccount.com',
        event_additional_req_bindings_members_1_1:
          'serviceAccount:terraform-sa@scce-lab-401713.iam.gserviceaccount.com',
        event_additional_request_time: '2024-02-02T10:05:38.368015418Z',
        event_additional_request_attributes_time:
          '2024-02-02T10:05:38.368015418Z',
        event_additional_type:
          'type.googleapis.com/google.cloud.audit.AuditLog',
        event_principal_hostname: 'gce-internal-ip',
        event_principal_user_userid:
          'terraform-sa@scce-lab-401713.iam.gserviceaccount.com',
        event_principal_user_userDisplayName:
          'A SA to run the vm that refresh threats and resources',
        event_principal_user_emailAddresses_1:
          'sa-cron-vm@scce-lab-401713.iam.gserviceaccount.com',
        event_principal_user_emailAddresses_2:
          'sa-cron-vm@scce-lab-401713.iam.gserviceaccount.com',
        event_principal_user_emailAddresses_3:
          'terraform-sa@scce-lab-401713.iam.gserviceaccount.com',
        event_principal_user_emailAddresses_4:
          'sa-cron-vm@scce-lab-401713.iam.gserviceaccount.com',
        event_principal_user_productObjectId: '100282268471516296206',
        event_principal_user_attribute_cloud_environment:
          'GOOGLE_CLOUD_PLATFORM',
        event_principal_user_attribute_roles_1_name:
          'roles/storage.objectAdmin',
        event_principal_user_attribute_roles_1_type: 'SERVICE_ACCOUNT',
        event_principal_user_attribute_permissions_1_name:
          'iam.serviceAccounts.setIamPolicy',
        event_principal_asset_hostname: 'gce-internal-ip',
        event_target_user_userid:
          'terraform-sa@scce-lab-401713.iam.gserviceaccount.com',
        event_target_user_userDisplayName: 'A SA with Zero Access',
        event_target_user_emailAddresses_1:
          'sa-no-access@scce-lab-401713.iam.gserviceaccount.com',
        event_target_user_emailAddresses_2:
          'sa-no-access@scce-lab-401713.iam.gserviceaccount.com',
        event_target_user_productObjectId: '108132278076916519438',
        event_target_user_attribute_cloud_environment: 'GOOGLE_CLOUD_PLATFORM',
        event_target_user_attribute_roles_1_name:
          'roles/iam.serviceAccountTokenCreator',
        event_target_user_attribute_roles_2_name:
          'roles/iam.serviceAccountUser',
        event_target_application: 'iam.googleapis.com',
        event_target_resource_name:
          'sa-no-access@scce-lab-401713.iam.gserviceaccount.com',
        event_target_resource_resourceType: 'SERVICE_ACCOUNT',
        event_target_resource_resourceSubtype: 'service_account',
        event_target_resource_productObjectId: '108132278076916519438',
        event_target_cloud_project_name: 'scce-lab-401713',
        event_target_resourceAncestors_1_resourceType: 'SERVICE_ACCOUNT',
        event_target_resourceAncestors_2_name: 'scce-lab-401713',
        event_target_resourceAncestors_2_resourceType: 'CLOUD_PROJECT',
        event_target_resourceAncestors_3_name:
          'projects/dummyProject/serviceAccounts/108132278076916519438',
        event_securityResult_1_categoryDetails_1:
          'projects/dummyProject/logs/cloudaudit.googleapis.com%2Factivity',
        event_securityResult_1_action_1: 'ALLOW',
        event_securityResult_1_severity: 'INFORMATIONAL',
        event_network_http_userAgent:
          'google-cloud-sdk gcloud/462.0.1 command/gcloud.iam.service-accounts.add-iam-policy-binding invocation-id/44032e1dafba4adeb6e6ff19b4058c39 environment/GCE environment-version/None client-os/LINUX client-os-ver/5.10.0 client-pltf-arch/x86_64 interactive/True from-script/False python/3.11.7 term/xterm-256color (Linux 5.10.0-26-cloud-amd64),gzip(gfe)',
        event_network_http_parsedUserAgent_family: 'USER_DEFINED',
        type: 'GCTI_FINDING',
        detection_1_ruleName:
          'SCC: Discovery: Service Account Self-Investigation with Resource Creation',
        detection_1_summary: 'Rule Detection',
        detection_1_description:
          'Detection of an IAM service account credential that is used to investigate the roles and permissions associated with that same service account',
        detection_1_severity: 'HIGH',
        detection_1_urlBackToProduct:
          'https://gglwl.backstory.chronicle.security/alert?alertId=de_bd51e7b7-3370-44c0-c738-2f8bcf5b3dd6',
        detection_1_ruleId: 'ur_c512c6b6-56fa-41d5-aeae-b01b2d52cfe8',
        detection_1_alertState: 'ALERTING',
        detection_1_ruleType: 'MULTI_EVENT',
        detection_1_detectionFields_1_key: 'service_account',
        detection_1_detectionFields_1_value:
          'sa-cron-vm@scce-lab-401713.iam.gserviceaccount.com',
        detection_1_detectionFields_1_source:
          'udm.principal.user.email_addresses',
        detection_1_ruleLabels_1_key: 'reference',
        detection_1_ruleLabels_1_value:
          'https://cloud.google.com/security-command-center/docs/how-to-investigate-threats#service_account_self-investigation',
        detection_1_ruleLabels_2_key: 'rule_name',
        detection_1_ruleLabels_2_value:
          'SCC: Discovery: Service Account Self-Investigation with Resource Creation',
        detection_1_outcomes_1_key: 'roles',
        detection_1_outcomes_1_value: 'roles/storage.objectAdmin',
        detection_1_outcomes_2_key: 'group_memberships',
        detection_1_outcomes_3_key: 'ip',
        detection_1_outcomes_3_source: 'udm.principal.ip',
        detection_1_outcomes_4_key: 'principal_email_address',
        detection_1_outcomes_4_value:
          'sa-cron-vm@scce-lab-401713.iam.gserviceaccount.com',
        detection_1_outcomes_4_source: 'udm.principal.user.email_addresses',
        detection_1_outcomes_5_key: 'risk_score',
        detection_1_outcomes_5_value: '90',
        detection_1_outcomes_6_key: 'vendor_name',
        detection_1_outcomes_6_value: 'Google',
        detection_1_outcomes_7_key: 'product_name',
        detection_1_outcomes_7_value: 'Security Command Center',
        detection_1_ruleSet: '92f84c0d-678c-c2ba-fd76-9baa399885a2',
        detection_1_ruleSetDisplayName:
          'CDIR SCC Enhanced Defense Discovery Alerts',
        detection_1_riskScore: '90',
        detection_1_rulesetCategoryDisplayName: 'Cloud Threats',
        createdTime: '2024-02-02T11:05:32.43988Z',
        lastUpdatedTime: '2024-02-02T11:05:32.43988Z',
        id: 'de_bd51e7b7-3370-44c0-c738-2f8bcf5b3dd6',
        timeWindow_startTime: '2024-02-02T09:36:00Z',
        timeWindow_endTime: '2024-02-02T10:06:00Z',
        detectionTime: '2024-02-02T10:06:00Z',
        tags_1: 'TA0007',
        tags_2: 'T1069.003',
        alert_type: 'RULE',
        event_type: 'USER_RESOURCE_UPDATE_PERMISSIONS',
        event_category: 'USER',
        event_principal_user_emailAddresses:
          'sa-cron-vm@scce-lab-401713.iam.gserviceaccount.com',
        event_target_user_emailAddresses:
          'sa-no-access@scce-lab-401713.iam.gserviceaccount.com',
        event_principal_user_attribute_labels_authorization_granted: 'true',
        event_principal_labels_req_bindings_members:
          'serviceAccount:terraform-sa@scce-lab-401713.iam.gserviceaccount.com, serviceAccount:sa-cron-vm@scce-lab-401713.iam.gserviceaccount.com, serviceAccount:terraform-sa@scce-lab-401713.iam.gserviceaccount.com, serviceAccount:sa-cron-vm@scce-lab-401713.iam.gserviceaccount.com',
        'event_principal_labels_requestMetadata.callerIp':
          'Request came from a GCE VM in a different organization. : REPLACED',
        'event_principal_labels_requestMetadata.callerIsGceClient':
          'Request originated from a GCE VM or an on-prem VM behind a VPN, and the log was enhanced with additional information : REPLACED',
        event_principal_labels_request_attributes_time:
          '2024-02-02T10:05:38.368015418Z',
        event_target_resource_attribute_labels_email_id:
          'sa-no-access@scce-lab-401713.iam.gserviceaccount.com',
        event_target_resource_attribute_labels_res_etag: 'BwYQY0D8Nuc=',
        event_target_resource_attribute_labels_ser_type:
          'type.googleapis.com/google.iam.v1.logging.AuditData',
        event_target_resource_attribute_labels_request_type:
          'type.googleapis.com/google.iam.v1.SetIamPolicyRequest',
        event_target_resource_attribute_labels_res_type:
          'type.googleapis.com/google.iam.v1.Policy',
        event_target_labels_response_bindings_members:
          'serviceAccount:terraform-sa@scce-lab-401713.iam.gserviceaccount.com, serviceAccount:sa-cron-vm@scce-lab-401713.iam.gserviceaccount.com, serviceAccount:terraform-sa@scce-lab-401713.iam.gserviceaccount.com, serviceAccount:sa-cron-vm@scce-lab-401713.iam.gserviceaccount.com',
        event_about_labels_type:
          'type.googleapis.com/google.cloud.audit.AuditLog',
        event_about_labels_req_policy_etag: 'BwYQY0DTrBg=',
        event_about_labels_res_version: '1',
        event_about_labels_request_time: '2024-02-02T10:05:38.368015418Z',
        event_securityResult_detectionFields_resource_name:
          'projects/dummyProject/serviceAccounts/108132278076916519438',
        event_securityResult_detectionFields_resource:
          'projects/dummyProject/serviceAccounts/108132278076916519438',
        detection_detectionFields_service_account:
          'sa-cron-vm@scce-lab-401713.iam.gserviceaccount.com',
        detection_ruleLabels_reference:
          'https://cloud.google.com/security-command-center/docs/how-to-investigate-threats#service_account_self-investigation',
        detection_ruleLabels_rule_name:
          'SCC: Discovery: Service Account Self-Investigation with Resource Creation',
        detection_outcomes_roles: 'roles/storage.objectAdmin',
        detection_outcomes_principal_email_address:
          'sa-cron-vm@scce-lab-401713.iam.gserviceaccount.com',
        detection_outcomes_risk_score: '90',
        detection_outcomes_vendor_name: 'Google',
        detection_outcomes_product_name: 'Security Command Center',
      },
      Environment: null,
      SourceSystemName: null,
      Extensions: [],
    },
    {
      _fields: {
        BaseEventIds: [],
        ParentEventId: 0,
        DeviceVendor: 'Google Chronicle',
        DeviceProduct: 'RULE',
        DeviceEventClassId: 'USER_RESOURCE_UPDATE_PERMISSIONS',
      },
      _rawDataFields: {
        event_metadata_productLogId: '1xn79uve4fxi8',
        event_metadata_eventTimestamp: '2024-02-02T10:05:38.173267620Z',
        event_metadata_collectedTimestamp: '2024-02-02T10:05:39.153105009Z',
        event_metadata_eventType: 'USER_RESOURCE_UPDATE_PERMISSIONS',
        event_metadata_vendorName: 'Google Cloud Platform',
        event_metadata_productName: 'Google Cloud IAM',
        event_metadata_productEventType: 'google.iam.admin.v1.SetIAMPolicy',
        event_metadata_urlBackToProduct:
          'projects/dummyProject/logs/cloudaudit.googleapis.com%2Factivity',
        event_metadata_ingestedTimestamp: '2024-02-02T10:05:39.966493Z',
        event_metadata_id: 'AAAAAMfeLRET4dcdOc62veME2B8AAAAADgAAAAAAAAA=',
        event_metadata_logType: 'GCP_CLOUDAUDIT',
        event_metadata_baseLabels_logTypes_1: 'GCP_CLOUDAUDIT',
        event_metadata_baseLabels_allowScopedAccess: 'True',
        event_metadata_enrichmentLabels_logTypes_1: 'GCP_IAM_ANALYSIS',
        event_metadata_enrichmentLabels_logTypes_2: 'GCP_IAM_CONTEXT',
        event_metadata_enrichmentLabels_allowScopedAccess: 'True',
        event_additional_response_bindings_members_1_0:
          'serviceAccount:sa-cron-vm@scce-lab-401713.iam.gserviceaccount.com',
        event_additional_req_bindings_members_0_1:
          'serviceAccount:terraform-sa@scce-lab-401713.iam.gserviceaccount.com',
        event_additional_req_bindings_members_1_0:
          'serviceAccount:sa-cron-vm@scce-lab-401713.iam.gserviceaccount.com',
        'event_additional_requestMetadata.callerIp_0':
          'Request came from a GCE VM in a different organization. : REPLACED',
        event_additional_req_policy_etag: 'BwYQY0DTrBg=',
        event_additional_req_bindings_members_0_0:
          'serviceAccount:sa-cron-vm@scce-lab-401713.iam.gserviceaccount.com',
        event_additional_response_bindings_members_0_0:
          'serviceAccount:sa-cron-vm@scce-lab-401713.iam.gserviceaccount.com',
        'event_additional_requestMetadata.callerIsGceClient_1':
          'Request originated from a GCE VM or an on-prem VM behind a VPN, and the log was enhanced with additional information : REPLACED',
        event_additional_res_version: '1',
        event_additional_response_bindings_members_1_1:
          'serviceAccount:terraform-sa@scce-lab-401713.iam.gserviceaccount.com',
        event_additional_response_bindings_members_0_1:
          'serviceAccount:terraform-sa@scce-lab-401713.iam.gserviceaccount.com',
        event_additional_req_bindings_members_1_1:
          'serviceAccount:terraform-sa@scce-lab-401713.iam.gserviceaccount.com',
        event_additional_request_time: '2024-02-02T10:05:38.368015418Z',
        event_additional_request_attributes_time:
          '2024-02-02T10:05:38.368015418Z',
        event_additional_type:
          'type.googleapis.com/google.cloud.audit.AuditLog',
        event_principal_hostname: 'gce-internal-ip',
        event_principal_user_userid:
          'terraform-sa@scce-lab-401713.iam.gserviceaccount.com',
        event_principal_user_userDisplayName:
          'A SA to run the vm that refresh threats and resources',
        event_principal_user_emailAddresses_1:
          'sa-cron-vm@scce-lab-401713.iam.gserviceaccount.com',
        event_principal_user_emailAddresses_2:
          'sa-cron-vm@scce-lab-401713.iam.gserviceaccount.com',
        event_principal_user_emailAddresses_3:
          'terraform-sa@scce-lab-401713.iam.gserviceaccount.com',
        event_principal_user_emailAddresses_4:
          'sa-cron-vm@scce-lab-401713.iam.gserviceaccount.com',
        event_principal_user_productObjectId: '100282268471516296206',
        event_principal_user_attribute_cloud_environment:
          'GOOGLE_CLOUD_PLATFORM',
        event_principal_user_attribute_roles_1_name:
          'roles/storage.objectAdmin',
        event_principal_user_attribute_roles_1_type: 'SERVICE_ACCOUNT',
        event_principal_user_attribute_permissions_1_name:
          'iam.serviceAccounts.setIamPolicy',
        event_principal_asset_hostname: 'gce-internal-ip',
        event_target_user_userid:
          'terraform-sa@scce-lab-401713.iam.gserviceaccount.com',
        event_target_user_userDisplayName: 'A SA with Zero Access',
        event_target_user_emailAddresses_1:
          'sa-no-access@scce-lab-401713.iam.gserviceaccount.com',
        event_target_user_emailAddresses_2:
          'sa-no-access@scce-lab-401713.iam.gserviceaccount.com',
        event_target_user_productObjectId: '108132278076916519438',
        event_target_user_attribute_cloud_environment: 'GOOGLE_CLOUD_PLATFORM',
        event_target_user_attribute_roles_1_name:
          'roles/iam.serviceAccountTokenCreator',
        event_target_user_attribute_roles_2_name:
          'roles/iam.serviceAccountUser',
        event_target_application: 'iam.googleapis.com',
        event_target_resource_name:
          'sa-no-access@scce-lab-401713.iam.gserviceaccount.com',
        event_target_resource_resourceType: 'SERVICE_ACCOUNT',
        event_target_resource_resourceSubtype: 'service_account',
        event_target_resource_productObjectId: '108132278076916519438',
        event_target_cloud_project_name: 'scce-lab-401713',
        event_target_resourceAncestors_1_resourceType: 'SERVICE_ACCOUNT',
        event_target_resourceAncestors_2_name: 'scce-lab-401713',
        event_target_resourceAncestors_2_resourceType: 'CLOUD_PROJECT',
        event_target_resourceAncestors_3_name:
          'projects/dummyProject/serviceAccounts/108132278076916519438',
        event_securityResult_1_categoryDetails_1:
          'projects/dummyProject/logs/cloudaudit.googleapis.com%2Factivity',
        event_securityResult_1_action_1: 'ALLOW',
        event_securityResult_1_severity: 'INFORMATIONAL',
        event_network_http_userAgent:
          'google-cloud-sdk gcloud/462.0.1 command/gcloud.iam.service-accounts.add-iam-policy-binding invocation-id/44032e1dafba4adeb6e6ff19b4058c39 environment/GCE environment-version/None client-os/LINUX client-os-ver/5.10.0 client-pltf-arch/x86_64 interactive/True from-script/False python/3.11.7 term/xterm-256color (Linux 5.10.0-26-cloud-amd64),gzip(gfe)',
        event_network_http_parsedUserAgent_family: 'USER_DEFINED',
        type: 'GCTI_FINDING',
        detection_1_ruleName:
          'SCC: Discovery: Service Account Self-Investigation with Resource Creation',
        detection_1_summary: 'Rule Detection',
        detection_1_description:
          'Detection of an IAM service account credential that is used to investigate the roles and permissions associated with that same service account',
        detection_1_severity: 'HIGH',
        detection_1_urlBackToProduct:
          'https://gglwl.backstory.chronicle.security/alert?alertId=de_bd51e7b7-3370-44c0-c738-2f8bcf5b3dd6',
        detection_1_ruleId: 'ur_c512c6b6-56fa-41d5-aeae-b01b2d52cfe8',
        detection_1_alertState: 'ALERTING',
        detection_1_ruleType: 'MULTI_EVENT',
        detection_1_detectionFields_1_key: 'service_account',
        detection_1_detectionFields_1_value:
          'sa-cron-vm@scce-lab-401713.iam.gserviceaccount.com',
        detection_1_detectionFields_1_source:
          'udm.principal.user.email_addresses',
        detection_1_ruleLabels_1_key: 'reference',
        detection_1_ruleLabels_1_value:
          'https://cloud.google.com/security-command-center/docs/how-to-investigate-threats#service_account_self-investigation',
        detection_1_ruleLabels_2_key: 'rule_name',
        detection_1_ruleLabels_2_value:
          'SCC: Discovery: Service Account Self-Investigation with Resource Creation',
        detection_1_outcomes_1_key: 'roles',
        detection_1_outcomes_1_value: 'roles/storage.objectAdmin',
        detection_1_outcomes_2_key: 'group_memberships',
        detection_1_outcomes_3_key: 'ip',
        detection_1_outcomes_3_source: 'udm.principal.ip',
        detection_1_outcomes_4_key: 'principal_email_address',
        detection_1_outcomes_4_value:
          'sa-cron-vm@scce-lab-401713.iam.gserviceaccount.com',
        detection_1_outcomes_4_source: 'udm.principal.user.email_addresses',
        detection_1_outcomes_5_key: 'risk_score',
        detection_1_outcomes_5_value: '90',
        detection_1_outcomes_6_key: 'vendor_name',
        detection_1_outcomes_6_value: 'Google',
        detection_1_outcomes_7_key: 'product_name',
        detection_1_outcomes_7_value: 'Security Command Center',
        detection_1_ruleSet: '92f84c0d-678c-c2ba-fd76-9baa399885a2',
        detection_1_ruleSetDisplayName:
          'CDIR SCC Enhanced Defense Discovery Alerts',
        detection_1_riskScore: '90',
        detection_1_rulesetCategoryDisplayName: 'Cloud Threats',
        createdTime: '2024-02-02T11:05:32.43988Z',
        lastUpdatedTime: '2024-02-02T11:05:32.43988Z',
        id: 'de_bd51e7b7-3370-44c0-c738-2f8bcf5b3dd6',
        timeWindow_startTime: '2024-02-02T09:36:00Z',
        timeWindow_endTime: '2024-02-02T10:06:00Z',
        detectionTime: '2024-02-02T10:06:00Z',
        tags_1: 'TA0007',
        tags_2: 'T1069.003',
        alert_type: 'RULE',
        event_type: 'USER_RESOURCE_UPDATE_PERMISSIONS',
        event_category: 'USER',
        event_principal_user_emailAddresses:
          'terraform-sa@scce-lab-401713.iam.gserviceaccount.com',
        event_target_user_emailAddresses: '',
        event_principal_user_attribute_labels_authorization_granted: 'true',
        event_principal_labels_req_bindings_members:
          'serviceAccount:terraform-sa@scce-lab-401713.iam.gserviceaccount.com, serviceAccount:sa-cron-vm@scce-lab-401713.iam.gserviceaccount.com, serviceAccount:terraform-sa@scce-lab-401713.iam.gserviceaccount.com, serviceAccount:sa-cron-vm@scce-lab-401713.iam.gserviceaccount.com',
        'event_principal_labels_requestMetadata.callerIp':
          'Request came from a GCE VM in a different organization. : REPLACED',
        'event_principal_labels_requestMetadata.callerIsGceClient':
          'Request originated from a GCE VM or an on-prem VM behind a VPN, and the log was enhanced with additional information : REPLACED',
        event_principal_labels_request_attributes_time:
          '2024-02-02T10:05:38.368015418Z',
        event_target_resource_attribute_labels_email_id:
          'sa-no-access@scce-lab-401713.iam.gserviceaccount.com',
        event_target_resource_attribute_labels_res_etag: 'BwYQY0D8Nuc=',
        event_target_resource_attribute_labels_ser_type:
          'type.googleapis.com/google.iam.v1.logging.AuditData',
        event_target_resource_attribute_labels_request_type:
          'type.googleapis.com/google.iam.v1.SetIamPolicyRequest',
        event_target_resource_attribute_labels_res_type:
          'type.googleapis.com/google.iam.v1.Policy',
        event_target_labels_response_bindings_members:
          'serviceAccount:terraform-sa@scce-lab-401713.iam.gserviceaccount.com, serviceAccount:sa-cron-vm@scce-lab-401713.iam.gserviceaccount.com, serviceAccount:terraform-sa@scce-lab-401713.iam.gserviceaccount.com, serviceAccount:sa-cron-vm@scce-lab-401713.iam.gserviceaccount.com',
        event_about_labels_type:
          'type.googleapis.com/google.cloud.audit.AuditLog',
        event_about_labels_req_policy_etag: 'BwYQY0DTrBg=',
        event_about_labels_res_version: '1',
        event_about_labels_request_time: '2024-02-02T10:05:38.368015418Z',
        event_securityResult_detectionFields_resource_name:
          'projects/dummyProject/serviceAccounts/108132278076916519438',
        event_securityResult_detectionFields_resource:
          'projects/dummyProject/serviceAccounts/108132278076916519438',
        detection_detectionFields_service_account:
          'sa-cron-vm@scce-lab-401713.iam.gserviceaccount.com',
        detection_ruleLabels_reference:
          'https://cloud.google.com/security-command-center/docs/how-to-investigate-threats#service_account_self-investigation',
        detection_ruleLabels_rule_name:
          'SCC: Discovery: Service Account Self-Investigation with Resource Creation',
        detection_outcomes_roles: 'roles/storage.objectAdmin',
        detection_outcomes_principal_email_address:
          'sa-cron-vm@scce-lab-401713.iam.gserviceaccount.com',
        detection_outcomes_risk_score: '90',
        detection_outcomes_vendor_name: 'Google',
        detection_outcomes_product_name: 'Security Command Center',
      },
      Environment: null,
      SourceSystemName: null,
      Extensions: [],
    },
    {
      _fields: {
        BaseEventIds: [],
        ParentEventId: 0,
        DeviceVendor: 'Google Chronicle',
        DeviceProduct: 'RULE',
        DeviceEventClassId: 'USER_RESOURCE_UPDATE_PERMISSIONS',
      },
      _rawDataFields: {
        event_metadata_productLogId: '1xn79uve4fxi8',
        event_metadata_eventTimestamp: '2024-02-02T10:05:38.173267620Z',
        event_metadata_collectedTimestamp: '2024-02-02T10:05:39.153105009Z',
        event_metadata_eventType: 'USER_RESOURCE_UPDATE_PERMISSIONS',
        event_metadata_vendorName: 'Google Cloud Platform',
        event_metadata_productName: 'Google Cloud IAM',
        event_metadata_productEventType: 'google.iam.admin.v1.SetIAMPolicy',
        event_metadata_urlBackToProduct:
          'projects/dummyProject/logs/cloudaudit.googleapis.com%2Factivity',
        event_metadata_ingestedTimestamp: '2024-02-02T10:05:39.966493Z',
        event_metadata_id: 'AAAAAMfeLRET4dcdOc62veME2B8AAAAADgAAAAAAAAA=',
        event_metadata_logType: 'GCP_CLOUDAUDIT',
        event_metadata_baseLabels_logTypes_1: 'GCP_CLOUDAUDIT',
        event_metadata_baseLabels_allowScopedAccess: 'True',
        event_metadata_enrichmentLabels_logTypes_1: 'GCP_IAM_ANALYSIS',
        event_metadata_enrichmentLabels_logTypes_2: 'GCP_IAM_CONTEXT',
        event_metadata_enrichmentLabels_allowScopedAccess: 'True',
        event_additional_response_bindings_members_1_0:
          'serviceAccount:sa-cron-vm@scce-lab-401713.iam.gserviceaccount.com',
        event_additional_req_bindings_members_0_1:
          'serviceAccount:terraform-sa@scce-lab-401713.iam.gserviceaccount.com',
        event_additional_req_bindings_members_1_0:
          'serviceAccount:sa-cron-vm@scce-lab-401713.iam.gserviceaccount.com',
        'event_additional_requestMetadata.callerIp_0':
          'Request came from a GCE VM in a different organization. : REPLACED',
        event_additional_req_policy_etag: 'BwYQY0DTrBg=',
        event_additional_req_bindings_members_0_0:
          'serviceAccount:sa-cron-vm@scce-lab-401713.iam.gserviceaccount.com',
        event_additional_response_bindings_members_0_0:
          'serviceAccount:sa-cron-vm@scce-lab-401713.iam.gserviceaccount.com',
        'event_additional_requestMetadata.callerIsGceClient_1':
          'Request originated from a GCE VM or an on-prem VM behind a VPN, and the log was enhanced with additional information : REPLACED',
        event_additional_res_version: '1',
        event_additional_response_bindings_members_1_1:
          'serviceAccount:terraform-sa@scce-lab-401713.iam.gserviceaccount.com',
        event_additional_response_bindings_members_0_1:
          'serviceAccount:terraform-sa@scce-lab-401713.iam.gserviceaccount.com',
        event_additional_req_bindings_members_1_1:
          'serviceAccount:terraform-sa@scce-lab-401713.iam.gserviceaccount.com',
        event_additional_request_time: '2024-02-02T10:05:38.368015418Z',
        event_additional_request_attributes_time:
          '2024-02-02T10:05:38.368015418Z',
        event_additional_type:
          'type.googleapis.com/google.cloud.audit.AuditLog',
        event_principal_hostname: 'gce-internal-ip',
        event_principal_user_userid:
          'terraform-sa@scce-lab-401713.iam.gserviceaccount.com',
        event_principal_user_userDisplayName:
          'A SA to run the vm that refresh threats and resources',
        event_principal_user_emailAddresses_1:
          'sa-cron-vm@scce-lab-401713.iam.gserviceaccount.com',
        event_principal_user_emailAddresses_2:
          'sa-cron-vm@scce-lab-401713.iam.gserviceaccount.com',
        event_principal_user_emailAddresses_3:
          'terraform-sa@scce-lab-401713.iam.gserviceaccount.com',
        event_principal_user_emailAddresses_4:
          'sa-cron-vm@scce-lab-401713.iam.gserviceaccount.com',
        event_principal_user_productObjectId: '100282268471516296206',
        event_principal_user_attribute_cloud_environment:
          'GOOGLE_CLOUD_PLATFORM',
        event_principal_user_attribute_roles_1_name:
          'roles/storage.objectAdmin',
        event_principal_user_attribute_roles_1_type: 'SERVICE_ACCOUNT',
        event_principal_user_attribute_permissions_1_name:
          'iam.serviceAccounts.setIamPolicy',
        event_principal_asset_hostname: 'gce-internal-ip',
        event_target_user_userid:
          'terraform-sa@scce-lab-401713.iam.gserviceaccount.com',
        event_target_user_userDisplayName: 'A SA with Zero Access',
        event_target_user_emailAddresses_1:
          'sa-no-access@scce-lab-401713.iam.gserviceaccount.com',
        event_target_user_emailAddresses_2:
          'sa-no-access@scce-lab-401713.iam.gserviceaccount.com',
        event_target_user_productObjectId: '108132278076916519438',
        event_target_user_attribute_cloud_environment: 'GOOGLE_CLOUD_PLATFORM',
        event_target_user_attribute_roles_1_name:
          'roles/iam.serviceAccountTokenCreator',
        event_target_user_attribute_roles_2_name:
          'roles/iam.serviceAccountUser',
        event_target_application: 'iam.googleapis.com',
        event_target_resource_name:
          'sa-no-access@scce-lab-401713.iam.gserviceaccount.com',
        event_target_resource_resourceType: 'SERVICE_ACCOUNT',
        event_target_resource_resourceSubtype: 'service_account',
        event_target_resource_productObjectId: '108132278076916519438',
        event_target_cloud_project_name: 'scce-lab-401713',
        event_target_resourceAncestors_1_resourceType: 'SERVICE_ACCOUNT',
        event_target_resourceAncestors_2_name: 'scce-lab-401713',
        event_target_resourceAncestors_2_resourceType: 'CLOUD_PROJECT',
        event_target_resourceAncestors_3_name:
          'projects/dummyProject/serviceAccounts/108132278076916519438',
        event_securityResult_1_categoryDetails_1:
          'projects/dummyProject/logs/cloudaudit.googleapis.com%2Factivity',
        event_securityResult_1_action_1: 'ALLOW',
        event_securityResult_1_severity: 'INFORMATIONAL',
        event_network_http_userAgent:
          'google-cloud-sdk gcloud/462.0.1 command/gcloud.iam.service-accounts.add-iam-policy-binding invocation-id/44032e1dafba4adeb6e6ff19b4058c39 environment/GCE environment-version/None client-os/LINUX client-os-ver/5.10.0 client-pltf-arch/x86_64 interactive/True from-script/False python/3.11.7 term/xterm-256color (Linux 5.10.0-26-cloud-amd64),gzip(gfe)',
        event_network_http_parsedUserAgent_family: 'USER_DEFINED',
        type: 'GCTI_FINDING',
        detection_1_ruleName:
          'SCC: Discovery: Service Account Self-Investigation with Resource Creation',
        detection_1_summary: 'Rule Detection',
        detection_1_description:
          'Detection of an IAM service account credential that is used to investigate the roles and permissions associated with that same service account',
        detection_1_severity: 'HIGH',
        detection_1_urlBackToProduct:
          'https://gglwl.backstory.chronicle.security/alert?alertId=de_bd51e7b7-3370-44c0-c738-2f8bcf5b3dd6',
        detection_1_ruleId: 'ur_c512c6b6-56fa-41d5-aeae-b01b2d52cfe8',
        detection_1_alertState: 'ALERTING',
        detection_1_ruleType: 'MULTI_EVENT',
        detection_1_detectionFields_1_key: 'service_account',
        detection_1_detectionFields_1_value:
          'sa-cron-vm@scce-lab-401713.iam.gserviceaccount.com',
        detection_1_detectionFields_1_source:
          'udm.principal.user.email_addresses',
        detection_1_ruleLabels_1_key: 'reference',
        detection_1_ruleLabels_1_value:
          'https://cloud.google.com/security-command-center/docs/how-to-investigate-threats#service_account_self-investigation',
        detection_1_ruleLabels_2_key: 'rule_name',
        detection_1_ruleLabels_2_value:
          'SCC: Discovery: Service Account Self-Investigation with Resource Creation',
        detection_1_outcomes_1_key: 'roles',
        detection_1_outcomes_1_value: 'roles/storage.objectAdmin',
        detection_1_outcomes_2_key: 'group_memberships',
        detection_1_outcomes_3_key: 'ip',
        detection_1_outcomes_3_source: 'udm.principal.ip',
        detection_1_outcomes_4_key: 'principal_email_address',
        detection_1_outcomes_4_value:
          'sa-cron-vm@scce-lab-401713.iam.gserviceaccount.com',
        detection_1_outcomes_4_source: 'udm.principal.user.email_addresses',
        detection_1_outcomes_5_key: 'risk_score',
        detection_1_outcomes_5_value: '90',
        detection_1_outcomes_6_key: 'vendor_name',
        detection_1_outcomes_6_value: 'Google',
        detection_1_outcomes_7_key: 'product_name',
        detection_1_outcomes_7_value: 'Security Command Center',
        detection_1_ruleSet: '92f84c0d-678c-c2ba-fd76-9baa399885a2',
        detection_1_ruleSetDisplayName:
          'CDIR SCC Enhanced Defense Discovery Alerts',
        detection_1_riskScore: '90',
        detection_1_rulesetCategoryDisplayName: 'Cloud Threats',
        createdTime: '2024-02-02T11:05:32.43988Z',
        lastUpdatedTime: '2024-02-02T11:05:32.43988Z',
        id: 'de_bd51e7b7-3370-44c0-c738-2f8bcf5b3dd6',
        timeWindow_startTime: '2024-02-02T09:36:00Z',
        timeWindow_endTime: '2024-02-02T10:06:00Z',
        detectionTime: '2024-02-02T10:06:00Z',
        tags_1: 'TA0007',
        tags_2: 'T1069.003',
        alert_type: 'RULE',
        event_type: 'USER_RESOURCE_UPDATE_PERMISSIONS',
        event_category: 'USER',
        event_principal_user_emailAddresses:
          'sa-cron-vm@scce-lab-401713.iam.gserviceaccount.com',
        event_target_user_emailAddresses: '',
        event_principal_user_attribute_labels_authorization_granted: 'true',
        event_principal_labels_req_bindings_members:
          'serviceAccount:terraform-sa@scce-lab-401713.iam.gserviceaccount.com, serviceAccount:sa-cron-vm@scce-lab-401713.iam.gserviceaccount.com, serviceAccount:terraform-sa@scce-lab-401713.iam.gserviceaccount.com, serviceAccount:sa-cron-vm@scce-lab-401713.iam.gserviceaccount.com',
        'event_principal_labels_requestMetadata.callerIp':
          'Request came from a GCE VM in a different organization. : REPLACED',
        'event_principal_labels_requestMetadata.callerIsGceClient':
          'Request originated from a GCE VM or an on-prem VM behind a VPN, and the log was enhanced with additional information : REPLACED',
        event_principal_labels_request_attributes_time:
          '2024-02-02T10:05:38.368015418Z',
        event_target_resource_attribute_labels_email_id:
          'sa-no-access@scce-lab-401713.iam.gserviceaccount.com',
        event_target_resource_attribute_labels_res_etag: 'BwYQY0D8Nuc=',
        event_target_resource_attribute_labels_ser_type:
          'type.googleapis.com/google.iam.v1.logging.AuditData',
        event_target_resource_attribute_labels_request_type:
          'type.googleapis.com/google.iam.v1.SetIamPolicyRequest',
        event_target_resource_attribute_labels_res_type:
          'type.googleapis.com/google.iam.v1.Policy',
        event_target_labels_response_bindings_members:
          'serviceAccount:terraform-sa@scce-lab-401713.iam.gserviceaccount.com, serviceAccount:sa-cron-vm@scce-lab-401713.iam.gserviceaccount.com, serviceAccount:terraform-sa@scce-lab-401713.iam.gserviceaccount.com, serviceAccount:sa-cron-vm@scce-lab-401713.iam.gserviceaccount.com',
        event_about_labels_type:
          'type.googleapis.com/google.cloud.audit.AuditLog',
        event_about_labels_req_policy_etag: 'BwYQY0DTrBg=',
        event_about_labels_res_version: '1',
        event_about_labels_request_time: '2024-02-02T10:05:38.368015418Z',
        event_securityResult_detectionFields_resource_name:
          'projects/dummyProject/serviceAccounts/108132278076916519438',
        event_securityResult_detectionFields_resource:
          'projects/dummyProject/serviceAccounts/108132278076916519438',
        detection_detectionFields_service_account:
          'sa-cron-vm@scce-lab-401713.iam.gserviceaccount.com',
        detection_ruleLabels_reference:
          'https://cloud.google.com/security-command-center/docs/how-to-investigate-threats#service_account_self-investigation',
        detection_ruleLabels_rule_name:
          'SCC: Discovery: Service Account Self-Investigation with Resource Creation',
        detection_outcomes_roles: 'roles/storage.objectAdmin',
        detection_outcomes_principal_email_address:
          'sa-cron-vm@scce-lab-401713.iam.gserviceaccount.com',
        detection_outcomes_risk_score: '90',
        detection_outcomes_vendor_name: 'Google',
        detection_outcomes_product_name: 'Security Command Center',
      },
      Environment: null,
      SourceSystemName: null,
      Extensions: [],
    },
  ],
  Environment: 'Default Environment',
  SourceSystemName: 'GoogleChronicle',
  TicketId: 'de_bd51e7b7-3370-44c0-c738-2f8bcf5b3dd6',
  Description: '',
  DisplayId: 'GChronicle_de_bd51e7b7-3370-44c0-c738-2f8bcf5b3dd6__GCTI_FINDING',
  Reason: null,
  Name: 'SCC: Discovery: Service Account Self-Investigation with Resource Creation',
  DeviceVendor: 'Google Chronicle',
  DeviceProduct: 'RULE',
  StartTime: 1706866560000,
  EndTime: 1706868360000,
  Type: 0,
  Priority: 80,
  RuleGenerator:
    'SCC: Discovery: Service Account Self-Investigation with Resource Creation',
  SourceGroupingIdentifier: null,
  PlaybookTriggerKeywords: [],
  Extensions: [
    {
      Key: 'alert_type',
      Value: 'RULE',
    },
    {
      Key: 'rule_id',
      Value: 'ur_c512c6b6-56fa-41d5-aeae-b01b2d52cfe8',
    },
    {
      Key: 'product_name',
      Value:
        'Security Command Center, Google Cloud Platform, Google Cloud SQL, Google Cloud Platform, Google Cloud Platform, Google Cloud Platform, Google Cloud Platform, BigQuery, Google Cloud Storage, BigQuery, Google Cloud IAM',
    },
    {
      Key: 'chronicle_alert_type',
      Value: 'GCTI_FINDING',
    },
    {
      Key: 'ui_base_link',
      Value: 'https://gglwl.backstory.chronicle.security',
    },
    {
      Key: 'RiskScore',
      Value: '90',
    },
    {
      Key: 'WindowStartTime',
      Value: '2024-02-02T09:36:00Z',
    },
    {
      Key: 'WindowEndTime',
      Value: '2024-02-02T10:06:00Z',
    },
    {
      Key: 'Severity',
      Value: 'Medium',
    },
  ],
  Attachments: [],
  IsTrimmed: false,
  DataType: 1,
  SourceType: 1,
  SourceSystemUrl: 'https://gglwl.backstory.chronicle.security',
  SourceRuleIdentifier: 'ur_c512c6b6-56fa-41d5-aeae-b01b2d52cfe8',
  SiemAlertId: 'de_bd51e7b7-3370-44c0-c738-2f8bcf5b3dd6',
  __CorrelationId: 'bd11f7a2418d4f3a872a70c7047c35ab',
};

export default TestDataPlaceholder;
