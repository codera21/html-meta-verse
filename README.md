# html-meta-verse

Fetching meta data of Html from url

## Usage

```
npm install
npm run build
npm run meta -- --url=https://github.com/pinojs/pino --o=/tmp/test.json
```
#### This will output something like this

```
[{
    "key": "optimizely-datafile",
    "val": "{\"version\": \"4\", \"rollouts\": [], \"typedAudiences\": [], \"anonymizeIP\": true, \"projectId\": \"16737760170\", \"variables\": [], \"featureFlags\": [], \"experiments\": [{\"status\": \"Running\", \"audienceIds\": [], \"variations\": [{\"variables\": [], \"id\": \"20438636352\", \"key\": \"control\"}, {\"variables\": [], \"id\": \"20484957397\", \"key\": \"treatment\"}], \"id\": \"20479227424\", \"key\": \"growth_ghec_onboarding_experience\", \"layerId\": \"20467848595\", \"trafficAllocation\": [{\"entityId\": \"20484957397\", \"endOfRange\": 1000}, {\"entityId\": \"20484957397\", \"endOfRange\": 3000}, {\"entityId\": \"20484957397\", \"endOfRange\": 5000}, {\"entityId\": \"20484957397\", \"endOfRange\": 6000}, {\"entityId\": \"20484957397\", \"endOfRange\": 8000}, {\"entityId\": \"20484957397\", \"endOfRange\": 10000}], \"forcedVariations\": {\"85e2238ce2b9074907d7a3d91d6feeae\": \"control\"}}, {\"status\": \"Running\", \"audienceIds\": [], \"variations\": [{\"variables\": [], \"id\": \"20667381018\", \"key\": \"control\"}, {\"variables\": [], \"id\": \"20680930759\", \"key\": \"treatment\"}], \"id\": \"20652570897\", \"key\": \"project_genesis\", \"layerId\": \"20672300363\", \"trafficAllocation\": [{\"entityId\": \"20667381018\", \"endOfRange\": 5000}, {\"entityId\": \"20680930759\", \"endOfRange\": 10000}], \"forcedVariations\": {\"83356e17066d336d1803024138ecb683\": \"treatment\", \"18e31c8a9b2271332466133162a4aa0d\": \"treatment\", \"10f8ab3fbc5ebe989a36a05f79d48f32\": \"treatment\", \"1686089f6d540cd2deeaec60ee43ecf7\": \"treatment\"}}, {\"status\": \"Running\", \"audienceIds\": [], \"variations\": [{\"variables\": [], \"id\": \"20898546114\", \"key\": \"control\"}, {\"variables\": [], \"id\": \"20923036705\", \"key\": \"treatment_a\"}, {\"variables\": [], \"id\": \"20965581308\", \"key\": \"treatment_b\"}], \"id\": \"20902325119\", \"key\": \"contact_sales_page_optimizations\", \"layerId\": \"20969031091\", \"trafficAllocation\": [{\"entityId\": \"20965581308\", \"endOfRange\": 3330}, {\"entityId\": \"20898546114\", \"endOfRange\": 5000}, {\"entityId\": \"20898546114\", \"endOfRange\": 6670}, {\"entityId\": \"20923036705\", \"endOfRange\": 10000}], \"forcedVariations\": {}}], \"audiences\": [{\"conditions\": \"[\\\"or\\\", {\\\"match\\\": \\\"exact\\\", \\\"name\\\": \\\"$opt_dummy_attribute\\\", \\\"type\\\": \\\"custom_attribute\\\", \\\"value\\\": \\\"$opt_dummy_value\\\"}]\", \"id\": \"$opt_dummy_audience\", \"name\": \"Optimizely-Generated Audience for Backwards Compatibility\"}], \"groups\": [], \"sdkKey\": \"WTc6awnGuYDdG98CYRban\", \"environmentKey\": \"production\", \"attributes\": [{\"id\": \"16822470375\", \"key\": \"user_id\"}, {\"id\": \"17143601254\", \"key\": \"spammy\"}, {\"id\": \"18175660309\", \"key\": \"organization_plan\"}, {\"id\": \"18813001570\", \"key\": \"is_logged_in\"}, {\"id\": \"19073851829\", \"key\": \"geo\"}, {\"id\": \"20175462351\", \"key\": \"requestedCurrency\"}, {\"id\": \"20785470195\", \"key\": \"country_code\"}], \"botFiltering\": false, \"accountId\": \"16737760170\", \"events\": [{\"experimentIds\": [], \"id\": \"17911811441\", \"key\": \"hydro_click.dashboard.teacher_toolbox_cta\"}, {\"experimentIds\": [], \"id\": \"18124116703\", \"key\": \"submit.organizations.complete_sign_up\"}, {\"experimentIds\": [], \"id\": \"18145892387\", \"key\": \"no_metric.tracked_outside_of_optimizely\"}, {\"experimentIds\": [], \"id\": \"18178755568\", \"key\": \"click.org_onboarding_checklist.add_repo\"}, {\"experimentIds\": [], \"id\": \"18180553241\", \"key\": \"submit.repository_imports.create\"}, {\"experimentIds\": [], \"id\": \"18186103728\", \"key\": \"click.help.learn_more_about_repository_creation\"}, {\"experimentIds\": [], \"id\": \"18188530140\", \"key\": \"test_event\"}, {\"experimentIds\": [], \"id\": \"18191963644\", \"key\": \"click.empty_org_repo_cta.transfer_repository\"}, {\"experimentIds\": [], \"id\": \"18195612788\", \"key\": \"click.empty_org_repo_cta.import_repository\"}, {\"experimentIds\": [], \"id\": \"18210945499\", \"key\": \"click.org_onboarding_checklist.invite_members\"}, {\"experimentIds\": [], \"id\": \"18211063248\", \"key\": \"click.empty_org_repo_cta.create_repository\"}, {\"experimentIds\": [], \"id\": \"18215721889\", \"key\": \"click.org_onboarding_checklist.update_profile\"}, {\"experimentIds\": [], \"id\": \"18224360785\", \"key\": \"click.org_onboarding_checklist.dismiss\"}, {\"experimentIds\": [], \"id\": \"18234832286\", \"key\": \"submit.organization_activation.complete\"}, {\"experimentIds\": [], \"id\": \"18252392383\", \"key\": \"submit.org_repository.create\"}, {\"experimentIds\": [], \"id\": \"18257551537\", \"key\": \"submit.org_member_invitation.create\"}, {\"experimentIds\": [], \"id\": \"18259522260\", \"key\": \"submit.organization_profile.update\"}, {\"experimentIds\": [], \"id\": \"18564603625\", \"key\": \"view.classroom_select_organization\"}, {\"experimentIds\": [], \"id\": \"18568612016\", \"key\": \"click.classroom_sign_in_click\"}, {\"experimentIds\": [], \"id\": \"18572592540\", \"key\": \"view.classroom_name\"}, {\"experimentIds\": [], \"id\": \"18574203855\", \"key\": \"click.classroom_create_organization\"}, {\"experimentIds\": [], \"id\": \"18582053415\", \"key\": \"click.classroom_select_organization\"}, {\"experimentIds\": [], \"id\": \"18589463420\", \"key\": \"click.classroom_create_classroom\"}, {\"experimentIds\": [], \"id\": \"18591323364\", \"key\": \"click.classroom_create_first_classroom\"}, {\"experimentIds\": [], \"id\": \"18591652321\", \"key\": \"click.classroom_grant_access\"}, {\"experimentIds\": [], \"id\": \"18607131425\", \"key\": \"view.classroom_creation\"}, {\"experimentIds\": [\"20479227424\"], \"id\": \"18831680583\", \"key\": \"upgrade_account_plan\"}, {\"experimentIds\": [], \"id\": \"19064064515\", \"key\": \"click.signup\"}, {\"experimentIds\": [], \"id\": \"19075373687\", \"key\": \"click.view_account_billing_page\"}, {\"experimentIds\": [], \"id\": \"19077355841\", \"key\": \"click.dismiss_signup_prompt\"}, {\"experimentIds\": [], \"id\": \"19079713938\", \"key\": \"click.contact_sales\"}, {\"experimentIds\": [], \"id\": \"19120963070\", \"key\": \"click.compare_account_plans\"}, {\"experimentIds\": [], \"id\": \"19151690317\", \"key\": \"click.upgrade_account_cta\"}, {\"experimentIds\": [], \"id\": \"19424193129\", \"key\": \"click.open_account_switcher\"}, {\"experimentIds\": [], \"id\": \"19520330825\", \"key\": \"click.visit_account_profile\"}, {\"experimentIds\": [], \"id\": \"19540970635\", \"key\": \"click.switch_account_context\"}, {\"experimentIds\": [], \"id\": \"19730198868\", \"key\": \"submit.homepage_signup\"}, {\"experimentIds\": [], \"id\": \"19820830627\", \"key\": \"click.homepage_signup\"}, {\"experimentIds\": [], \"id\": \"19988571001\", \"key\": \"click.create_enterprise_trial\"}, {\"experimentIds\": [], \"id\": \"20036538294\", \"key\": \"click.create_organization_team\"}, {\"experimentIds\": [], \"id\": \"20040653299\", \"key\": \"click.input_enterprise_trial_form\"}, {\"experimentIds\": [], \"id\": \"20062030003\", \"key\": \"click.continue_with_team\"}, {\"experimentIds\": [], \"id\": \"20068947153\", \"key\": \"click.create_organization_free\"}, {\"experimentIds\": [], \"id\": \"20086636658\", \"key\": \"click.signup_continue.username\"}, {\"experimentIds\": [], \"id\": \"20091648988\", \"key\": \"click.signup_continue.create_account\"}, {\"experimentIds\": [], \"id\": \"20103637615\", \"key\": \"click.signup_continue.email\"}, {\"experimentIds\": [], \"id\": \"20111574253\", \"key\": \"click.signup_continue.password\"}, {\"experimentIds\": [], \"id\": \"20120044111\", \"key\": \"view.pricing_page\"}, {\"experimentIds\": [], \"id\": \"20152062109\", \"key\": \"submit.create_account\"}, {\"experimentIds\": [], \"id\": \"20165800992\", \"key\": \"submit.upgrade_payment_form\"}, {\"experimentIds\": [], \"id\": \"20171520319\", \"key\": \"submit.create_organization\"}, {\"experimentIds\": [], \"id\": \"20222645674\", \"key\": \"click.recommended_plan_in_signup.discuss_your_needs\"}, {\"experimentIds\": [], \"id\": \"20227443657\", \"key\": \"submit.verify_primary_user_email\"}, {\"experimentIds\": [], \"id\": \"20234607160\", \"key\": \"click.recommended_plan_in_signup.try_enterprise\"}, {\"experimentIds\": [], \"id\": \"20238175784\", \"key\": \"click.recommended_plan_in_signup.team\"}, {\"experimentIds\": [], \"id\": \"20239847212\", \"key\": \"click.recommended_plan_in_signup.continue_free\"}, {\"experimentIds\": [], \"id\": \"20251097193\", \"key\": \"recommended_plan\"}, {\"experimentIds\": [], \"id\": \"20438619534\", \"key\": \"click.pricing_calculator.1_member\"}, {\"experimentIds\": [], \"id\": \"20456699683\", \"key\": \"click.pricing_calculator.15_members\"}, {\"experimentIds\": [], \"id\": \"20467868331\", \"key\": \"click.pricing_calculator.10_members\"}, {\"experimentIds\": [], \"id\": \"20476267432\", \"key\": \"click.trial_days_remaining\"}, {\"experimentIds\": [\"20479227424\"], \"id\": \"20476357660\", \"key\": \"click.discover_feature\"}, {\"experimentIds\": [], \"id\": \"20479287901\", \"key\": \"click.pricing_calculator.custom_members\"}, {\"experimentIds\": [], \"id\": \"20481107083\", \"key\": \"click.recommended_plan_in_signup.apply_teacher_benefits\"}, {\"experimentIds\": [], \"id\": \"20483089392\", \"key\": \"click.pricing_calculator.5_members\"}, {\"experimentIds\": [\"20479227424\", \"20652570897\"], \"id\": \"20484283944\", \"key\": \"click.onboarding_task\"}, {\"experimentIds\": [], \"id\": \"20484996281\", \"key\": \"click.recommended_plan_in_signup.apply_student_benefits\"}, {\"experimentIds\": [\"20479227424\"], \"id\": \"20486713726\", \"key\": \"click.onboarding_task_breadcrumb\"}, {\"experimentIds\": [\"20479227424\"], \"id\": \"20490791319\", \"key\": \"click.upgrade_to_enterprise\"}, {\"experimentIds\": [\"20479227424\"], \"id\": \"20491786766\", \"key\": \"click.talk_to_us\"}, {\"experimentIds\": [\"20479227424\"], \"id\": \"20494144087\", \"key\": \"click.dismiss_enterprise_trial\"}, {\"experimentIds\": [\"20479227424\", \"20652570897\"], \"id\": \"20499722759\", \"key\": \"completed_all_tasks\"}, {\"experimentIds\": [\"20479227424\", \"20652570897\"], \"id\": \"20500710104\", \"key\": \"completed_onboarding_tasks\"}, {\"experimentIds\": [\"20479227424\"], \"id\": \"20513160672\", \"key\": \"click.read_doc\"}, {\"experimentIds\": [\"20652570897\"], \"id\": \"20516196762\", \"key\": \"actions_enabled\"}, {\"experimentIds\": [\"20479227424\"], \"id\": \"20518980986\", \"key\": \"click.dismiss_trial_banner\"}, {\"experimentIds\": [], \"id\": \"20535446721\", \"key\": \"click.issue_actions_prompt.dismiss_prompt\"}, {\"experimentIds\": [], \"id\": \"20557002247\", \"key\": \"click.issue_actions_prompt.setup_workflow\"}, {\"experimentIds\": [], \"id\": \"20595070227\", \"key\": \"click.pull_request_setup_workflow\"}, {\"experimentIds\": [], \"id\": \"20626600314\", \"key\": \"click.seats_input\"}, {\"experimentIds\": [], \"id\": \"20642310305\", \"key\": \"click.decrease_seats_number\"}, {\"experimentIds\": [], \"id\": \"20662990045\", \"key\": \"click.increase_seats_number\"}, {\"experimentIds\": [], \"id\": \"20679620969\", \"key\": \"click.public_product_roadmap\"}, {\"experimentIds\": [\"20479227424\"], \"id\": \"20761240940\", \"key\": \"click.dismiss_survey_banner\"}, {\"experimentIds\": [\"20479227424\"], \"id\": \"20767210721\", \"key\": \"click.take_survey\"}, {\"experimentIds\": [\"20652570897\"], \"id\": \"20795281201\", \"key\": \"click.archive_list\"}, {\"experimentIds\": [\"20902325119\"], \"id\": \"20966790249\", \"key\": \"contact_sales.submit\"}, {\"experimentIds\": [\"20902325119\"], \"id\": \"20996500333\", \"key\": \"contact_sales.existing_customer\"}, {\"experimentIds\": [\"20902325119\"], \"id\": \"20996890162\", \"key\": \"contact_sales.blank_message_field\"}, {\"experimentIds\": [\"20902325119\"], \"id\": \"21000470317\", \"key\": \"contact_sales.personal_email\"}, {\"experimentIds\": [\"20902325119\"], \"id\": \"21002790172\", \"key\": \"contact_sales.blank_phone_field\"}], \"revision\": \"1068\"}"
}, {
    "key": "viewport",
    "val": "width=device-width"
}, {
    "key": "description",
    "val": "🌲 super fast, all natural json logger. Contribute to pinojs/pino development by creating an account on GitHub."
}, {
    "key": "fb:app_id",
    "val": "1401488693436528"
}, {
    "key": "apple-itunes-app",
    "val": "app-id=1477376905"
}, {
    "key": "twitter:image:src",
    "val": "https://opengraph.githubassets.com/b91dbeedd7c34f904739c1f7c25d7c0019936caf33cbb08eda433202bba87940/pinojs/pino"
}, {
    "key": "twitter:site",
    "val": "@github"
}, {
    "key": "twitter:card",
    "val": "summary_large_image"
}, {
    "key": "twitter:title",
    "val": "GitHub - pinojs/pino: 🌲 super fast, all natural json logger"
}, {
    "key": "twitter:description",
    "val": "🌲 super fast, all natural json logger. Contribute to pinojs/pino development by creating an account on GitHub."
}, {
    "key": "og:image",
    "val": "https://opengraph.githubassets.com/b91dbeedd7c34f904739c1f7c25d7c0019936caf33cbb08eda433202bba87940/pinojs/pino"
}, {
    "key": "og:image:alt",
    "val": "🌲 super fast, all natural json logger. Contribute to pinojs/pino development by creating an account on GitHub."
}, {
    "key": "og:image:width",
    "val": "1200"
}, {
    "key": "og:image:height",
    "val": "600"
}, {
    "key": "og:site_name",
    "val": "GitHub"
}, {
    "key": "og:type",
    "val": "object"
}, {
    "key": "og:title",
    "val": "GitHub - pinojs/pino: 🌲 super fast, all natural json logger"
}, {
    "key": "og:url",
    "val": "https://github.com/pinojs/pino"
}, {
    "key": "og:description",
    "val": "🌲 super fast, all natural json logger. Contribute to pinojs/pino development by creating an account on GitHub."
}, {
    "key": "request-id",
    "val": "26DF:39B9:1316BED:170EEF2:6224B637"
}, {
    "key": "html-safe-nonce",
    "val": "9d257a7895b30c1ef5396a8bd32c503cf8ee3693f8c5fcf9b5e70627d93489e5"
}, {
    "key": "visitor-payload",
    "val": "eyJyZWZlcnJlciI6IiIsInJlcXVlc3RfaWQiOiIyNkRGOjM5Qjk6MTMxNkJFRDoxNzBFRUYyOjYyMjRCNjM3IiwidmlzaXRvcl9pZCI6IjczMjYwMDYzNDk3ODkwNzcwMyIsInJlZ2lvbl9lZGdlIjoic291dGhlYXN0YXNpYSIsInJlZ2lvbl9yZW5kZXIiOiJzb3V0aGVhc3Rhc2lhIn0="
}, {
    "key": "visitor-hmac",
    "val": "83fa9be77dd921cb6015a56fc3908df51c221fcfb607a870b45422ff486dd0dc"
}, {
    "key": "hovercard-subject-tag",
    "val": "repository:51840802"
}, {
    "key": "github-keyboard-shortcuts",
    "val": "repository"
}, {
    "key": "google-site-verification",
    "val": "c1kuD-K2HIVF635lypcsWPoD4kilo5-jA_wBFyT4uMY"
}, {
    "key": "google-site-verification",
    "val": "KT5gs8h0wvaagLKAVWq8bbeNwnZZK1r1XQysX3xurLU"
}, {
    "key": "google-site-verification",
    "val": "ZzhVyEFwb7w3e0-uOTltm8Jsck2F5StVihD0exw2fsA"
}, {
    "key": "google-site-verification",
    "val": "GXs5KoUUkNCoaAZn7wPN-t01Pywp9M3sEjnt_3_ZWPc"
}, {
    "key": "octolytics-url",
    "val": "https://collector.github.com/github/collect"
}, {
    "key": "analytics-location",
    "val": "/<user-name>/<repo-name>"
}, {
    "key": "hostname",
    "val": "github.com"
}, {
    "key": "expected-hostname",
    "val": "github.com"
}, {
    "key": "enabled-features",
    "val": "MARKETPLACE_PENDING_INSTALLATIONS"
}, {
    "key": "go-import",
    "val": "github.com/pinojs/pino git https://github.com/pinojs/pino.git"
}, {
    "key": "octolytics-dimension-user_id",
    "val": "23048140"
}, {
    "key": "octolytics-dimension-user_login",
    "val": "pinojs"
}, {
    "key": "octolytics-dimension-repository_id",
    "val": "51840802"
}, {
    "key": "octolytics-dimension-repository_nwo",
    "val": "pinojs/pino"
}, {
    "key": "octolytics-dimension-repository_public",
    "val": "true"
}, {
    "key": "octolytics-dimension-repository_is_fork",
    "val": "false"
}, {
    "key": "octolytics-dimension-repository_network_root_id",
    "val": "51840802"
}, {
    "key": "octolytics-dimension-repository_network_root_nwo",
    "val": "pinojs/pino"
}, {
    "key": "browser-stats-url",
    "val": "https://api.github.com/_private/browser/stats"
}, {
    "key": "browser-errors-url",
    "val": "https://api.github.com/_private/browser/errors"
}, {
    "key": "browser-optimizely-client-errors-url",
    "val": "https://api.github.com/_private/browser/optimizely_client/errors"
}, {
    "key": "theme-color",
    "val": "#1e2327"
}, {
    "key": "color-scheme",
    "val": "light dark"
}]
```