import Foundation
import Capacitor
import DLDataCollectorSDK

/**
 * Please read the Capacitor iOS Plugin Development Guide
 * here: https://capacitorjs.com/docs/plugins/ios
 */
@objc(DataCollectorSDKPlugin)
public class DataCollectorSDKPlugin: CAPPlugin {
    private let implementation = DataCollectorSDK()
    
    @objc func setUp(_ call: CAPPluginCall) {
        let env = call.getInt("env")
        var environment: DLEnvironment = .production
        
        if let env = env, let dlEnv = DLEnvironment(rawValue: env) {
            environment = dlEnv
        }
        
        guard let apiKey = call.getString("apiKey")else {
                  call.reject("Missing api key")
                  return
              }

        DLCollector.shared.setUp(DLSettings(apiKey: apiKey,
                                            env: environment,
                                            logLevel: .silent))
    }
    
    @objc func startSession(_ call: CAPPluginCall) {
        do {
            try DLCollector.shared.startSession(additionalData: nil)
            call.resolve()
        } catch {
            call.reject("Error starting session \(error.localizedDescription)")
        }
    }
    
    @objc func getSession(_ call: CAPPluginCall) {
        let id = DLCollector.shared.getSessionId()
        call.resolve(["sessionId": id as Any])
    }
}
