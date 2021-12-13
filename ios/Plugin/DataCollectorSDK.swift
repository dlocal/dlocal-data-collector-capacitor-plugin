import Foundation

@objc public class DataCollectorSDK: NSObject {
    @objc public func echo(_ value: String) -> String {
        print(value)
        return value
    }
}
