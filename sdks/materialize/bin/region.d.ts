import * as pulumi from "@pulumi/pulumi";
export declare class Region extends pulumi.CustomResource {
    /**
     * Get an existing Region resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: RegionState, opts?: pulumi.CustomResourceOptions): Region;
    /**
     * Returns true if the given object is an instance of Region.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is Region;
    /**
     * The timestamp when the region was enabled.
     */
    readonly enabledAt: pulumi.Output<string>;
    /**
     * The HTTP address of the region.
     */
    readonly httpAddress: pulumi.Output<string>;
    readonly materializeRegionId: pulumi.Output<string>;
    /**
     * The ID of the region to manage. Example: aws/us-west-2
     */
    readonly regionId: pulumi.Output<string>;
    /**
     * The state of the region. True if enabled, false otherwise.
     */
    readonly regionState: pulumi.Output<boolean>;
    /**
     * Indicates if the region is resolvable.
     */
    readonly resolvable: pulumi.Output<boolean>;
    /**
     * The SQL address of the region.
     */
    readonly sqlAddress: pulumi.Output<string>;
    /**
     * Create a Region resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: RegionArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering Region resources.
 */
export interface RegionState {
    /**
     * The timestamp when the region was enabled.
     */
    enabledAt?: pulumi.Input<string>;
    /**
     * The HTTP address of the region.
     */
    httpAddress?: pulumi.Input<string>;
    materializeRegionId?: pulumi.Input<string>;
    /**
     * The ID of the region to manage. Example: aws/us-west-2
     */
    regionId?: pulumi.Input<string>;
    /**
     * The state of the region. True if enabled, false otherwise.
     */
    regionState?: pulumi.Input<boolean>;
    /**
     * Indicates if the region is resolvable.
     */
    resolvable?: pulumi.Input<boolean>;
    /**
     * The SQL address of the region.
     */
    sqlAddress?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a Region resource.
 */
export interface RegionArgs {
    materializeRegionId?: pulumi.Input<string>;
    /**
     * The ID of the region to manage. Example: aws/us-west-2
     */
    regionId: pulumi.Input<string>;
}
