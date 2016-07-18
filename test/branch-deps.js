// jscs:disable
// This file was autogenerated by calcdeps.py
goog.addDependency("../../../../../test/web-config.js", ['config'], []);
goog.addDependency("../../../../../src/0_jsonparse.js", ['safejson'], ['goog.json']);
goog.addDependency("../../../../../src/0_queue.js", ['task_queue'], []);
goog.addDependency("../../../../../src/1_utils.js", ['utils'], ['goog.json', 'config', 'safejson']);
goog.addDependency("../../../../../src/2_resources.js", ['resources'], ['utils', 'config']);
goog.addDependency("../../../../../src/2_session.js", ['session'], ['goog.json', 'utils', 'safejson', 'storage']);
goog.addDependency("../../../../../src/2_storage.js", ['storage'], ['goog.json', 'utils']);
goog.addDependency("../../../../../src/3_api.js", ['Server'], ['utils', 'goog.json', 'storage', 'safejson']);
goog.addDependency("../../../../../src/3_banner_utils.js", ['banner_utils'], ['storage', 'utils', 'safejson']);
goog.addDependency("../../../../../src/4_banner_css.js", ['banner_css'], ['banner_utils', 'utils']);
goog.addDependency("../../../../../src/4_banner_html.js", ['banner_html'], ['banner_utils', 'utils', 'session', 'storage']);
goog.addDependency("../../../../../src/5_banner.js", ['banner'], ['utils', 'banner_utils', 'banner_css', 'banner_html']);
goog.addDependency("../../../../../src/6_branch.js", ['Branch'], ['goog.json', 'utils', 'resources', 'Server', 'banner', 'task_queue', 'storage', 'session', 'config', 'safejson', 'branch_view']);
goog.addDependency("../../../../../src/7_initialization.js", ['branch_instance'], ['Branch', 'config']);
goog.addDependency("../../../../../src/branch_view.js", ['branch_view'], ['utils', 'banner_css', 'safejson']);
goog.addDependency("../../../../../src/extern.js", [], []);
goog.addDependency("../../../../../src/onpage.js", [], []);
goog.addDependency("../../../../../test/0_queue.js", [], ['task_queue']);
goog.addDependency("../../../../../test/1_utils.js", [], ['utils']);
goog.addDependency("../../../../../test/2_storage.js", [], ['storage']);
goog.addDependency("../../../../../test/3_api.js", [], ['utils', 'Server', 'resources', 'storage', 'config']);
goog.addDependency("../../../../../test/6_branch.js", [], ['utils', 'Branch', 'resources', 'config', 'storage', 'session', 'goog.json']);
goog.addDependency("../../../../../test/7_integration.js", [], ['config', 'goog.json']);
goog.addDependency("../../../../../test/blob-banner.js", [], []);
goog.addDependency("../../../../../test/blob-interstitial.js", [], []);
goog.addDependency("../../../../../test/saucelabs.js", [], []);
goog.addDependency("../../../../../test/test-utils.js", [], []);
goog.addDependency("../../../../../test/web-config.js", ['config'], []);
