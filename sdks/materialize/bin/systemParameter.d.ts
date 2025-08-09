import * as pulumi from "@pulumi/pulumi";
export declare class SystemParameter extends pulumi.CustomResource {
    /**
     * Get an existing SystemParameter resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: SystemParameterState, opts?: pulumi.CustomResourceOptions): SystemParameter;
    /**
     * Returns true if the given object is an instance of SystemParameter.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is SystemParameter;
    /**
     * The name of the system parameter.
     */
    readonly name: pulumi.Output<string>;
    /**
     * The region to use for the resource connection. If not set, the default region is used.
     */
    readonly region: pulumi.Output<string>;
    readonly systemParameterId: pulumi.Output<string>;
    /**
     * The value to set for the system parameter.
     */
    readonly value: pulumi.Output<string>;
    /**
     * Create a SystemParameter resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: SystemParameterArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering SystemParameter resources.
 */
export interface SystemParameterState {
    /**
     * The name of the system parameter.
     */
    name?: pulumi.Input<string>;
    /**
     * The region to use for the resource connection. If not set, the default region is used.
     */
    region?: pulumi.Input<string>;
    systemParameterId?: pulumi.Input<string>;
    /**
     * The value to set for the system parameter.
     */
    value?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a SystemParameter resource.
 */
export interface SystemParameterArgs {
    /**
     * The name of the system parameter.
     */
    name?: pulumi.Input<string>;
    /**
     * The region to use for the resource connection. If not set, the default region is used.
     */
    region?: pulumi.Input<string>;
    systemParameterId?: pulumi.Input<string>;
    /**
     * The value to set for the system parameter.
     */
    value: pulumi.Input<string>;
}
