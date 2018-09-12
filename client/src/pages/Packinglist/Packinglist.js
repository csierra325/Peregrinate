// import Jumbotron from "../../components/Jumbotron";
import NavTabs from "../../components/NavTabs";
import React from 'react';
import {
  FormGroup,
  Label,
  Input,
  Modal,
  ModalHeader,
  ModalBody
} from 'reactstrap';
import './Packing.css'

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      dropdownOpen: false,
      modal: true
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen,
      modal: !this.state.modal
    }));
  }

  render() {
    return (
      <div className="packWrap">
        <NavTabs />

        <div>
          <Modal
            isOpen={this.state.modal}
            toggle={this.toggle}
            className={this.props.className}
          >
            <ModalHeader toggle={this.toggle}>Welome to Your Packing List Page</ModalHeader>
            <ModalBody>
              We make packing for your trip easy. Look at our lists to save what you need for your trip!
            </ModalBody>
          </Modal>
        </div>

        <div className="BringWrap">
          <h1>What Should I Bring?</h1>
          <div className="packingHeaders">
            <FormGroup>
              <Label for="exampleSelectMulti" className="PackingTitles">
                Essentials
              </Label>
              <Input
                type="select"
                className="packlistForm"
                id="essentialSelectMulti"
                multiple
              >
                <option>Lightweight clothing that can be layered</option>
                <option>Long-sleeved shirts</option>
                <option>Sweaters or fleece jacket</option>
                <option>T-shirts and tank tops</option>
                <option>Pants and/or shorts</option>
                <option>Belt</option>
                <option>Socks – wool socks are best for hiking</option>
                <option>Comfortable walking shoes</option>
                <option>Rain jacket, windbreaker or umbrella</option>
                <option>Pajamas/sleepwear</option>
                <option>Underwear</option>
                <option>Sunglasses and glasses case</option>
                <option>Dresses and/or skirts</option>
                <option>Jewelry – organize in a mini cube or circlet</option>
                <option>Hat or sun visor</option>
                <option>Scarf or bandana</option>
                <option>Swimsuit or swim trunks</option>
                <option>Cell phone and charger</option>
                <option>Travel speakers</option>
                <option>Travel pillow, eye mask and ear plugs</option>
                <option>Electric converters and adapters</option>
                <option>Language App </option>
                <option>Toiletry Bag</option>
              </Input>
            </FormGroup>

            <FormGroup>
              <Label for="exampleSelectMulti" className="PackingTitles">
                Down To The Details
              </Label>
              <Input
                type="select"
                className="packlistForm"
                id="essentialSelectMulti"
                multiple
              >
                <option>Toothbrush, toothpaste, floss, mouthwash</option>
                <option>
                  Hair brush or comb, hair ties, barrettes/bobby pins
                </option>
                <option>Deodorant</option>
                <option>Shampoo and conditioner </option>
                <option>Sunscreen and face lotion with SPF</option>
                <option>Make up</option>
                <option>Face wash and/or makeup remover wipes</option>
                <option>Night time Moisturizer/Lotion</option>
                <option>Lip balm with SPF </option>
                <option>Feminine hygiene products</option>
                <option>contacts, solution, and contact case</option>
                <option>Glasses and sunglasses</option>
                <option>Prescription medication </option>
                <option>Cologne/perfume</option>
                <option>Hair products like hairspray</option>
                <option>detergent</option>
                <option>Shaving kit</option>
                <option>Facial tissues </option>
                <option>Travel Towel</option>
                <option>First aid kit</option>
                <option>Pain and fever relievers </option>
                <option>Thermometer</option>
                <option>Allergy medicines</option>
                <option>Hydrocortisone cream</option>
                <option>Sunburn relief</option>
                <option>Multivitamins</option>
                <option>Insect repellent</option>
                <option>Insect repellent</option>
                <option>Hand sanitizer</option>
                <option>Sleeping medicines</option>
                <option>Headphones</option>
                <option>Camera and Go Pro</option>
                <option>Travel pillow</option>
                <option>Travel journal </option>
                <option>Books</option>
                <option>Deck of cards </option>
                <option>Water bottle </option>
                <option>Guide books</option>
                <option>Passport/visa(s</option>
                <option>Personal ID</option>
                <option>Frequent flyer card(s)</option>
                <option>Cash and credit card(s) </option>
                <option>Health insurance cards</option>
                <option>Travel insurance </option>
                <option>Reservations and itineraries </option>
                <option>Transportation tickets</option>
                <option>Emergency contacts </option>
                <option>Luggage Travel Lock</option>
                <option>headlamp or mini flashlight</option>
              </Input>
            </FormGroup>

            <FormGroup>
              <Label for="exampleSelectMulti" className="PackingTitles">
                Home Prep
              </Label>
              <Input
                type="select"
                className="packlistForm"
                id="essentialSelectMulti"
                multiple
              >
                <option>Have Post office hold your mail</option>
                <option>Stop newspaper delivery</option>
                <option>Set up an email autoresponder</option>
                <option>Arrange for care of pets, lawn, and plants</option>
                <option>Pre-pay your bills</option>
                <option>Prearrange school absences</option>
                <option>Empty refrigerator </option>
                <option>Unplug appliances</option>
                <option>Turn off heater/air conditioner</option>
                <option>Turn down water heater</option>
                <option>Turn off washing machine taps</option>
                <option>Lock all doors and windows</option>
                <option>Set up timed light system</option>
                <option>Store valuables in a safe place</option>
                <option>Leave house key with a trusted friend</option>
                <option>Leave flight itineraries with a relative</option>
                <option>check-in online with airline</option>
              </Input>
            </FormGroup>
          </div>
        </div>
        <div className="linkBackground">
          <h2>Helpful Links</h2>
          <div className="helpfulLinks">
            <div className="helpfulTitles">
              Packing Lists by Location:
              <ul>
                <li>
                  <a href="https://www.eaglecreek.com/blog/what-pack-uruguay-5-step-solution">
                    What to Pack for Uruguay: The 5-Step Solution
                  </a>
                </li>
                <li>
                  <a href="https://www.eaglecreek.com/blog/what-pack-greenland-five-step-solution">
                    What To Pack For Greenland: The Five-Step Solution
                  </a>
                </li>
                <li>
                  <a href="Minimalist Travel: How to Pack Your Bag for Cuba ">
                    Minimalist Travel: How to Pack Your Bag for Cuba{" "}
                  </a>
                </li>
                <li>
                  <a href="https://www.eaglecreek.com/blog/what-pack-cambodia-5-step-solution">
                    What to Pack for Cambodia: The 5 Step Solution
                  </a>
                </li>
              </ul>
            </div>
            <div className="helpfulTitles">
              Packing Lists by Activity:
              <ul>
                <li>
                  <a href="https://www.eaglecreek.com/blog/8-items-pack-super-active-summer-vacation">
                    8 Items To Pack For a Super Active Summer Vacation
                  </a>
                </li>
                <li>
                  <a href="https://www.eaglecreek.com/blog/what-pack-your-first-ragnar-relay-race">
                    What to Pack for Your First Ragnar Relay Race
                  </a>
                </li>
                <li>
                  <a href="https://www.eaglecreek.com/blog/essential-packing-list-traveling-kitchen">
                    The Essential Packing List for a Traveling Kitchen
                  </a>
                </li>
                <li>
                  <a href="https://www.eaglecreek.com/blog/what-pack-weekend-sailing-trip">
                    What to Pack for a Weekend Sailing Trip
                  </a>
                </li>
              </ul>
            </div>

            <div className="helpfulTitles">
              More Travel Checklists
              <ul>
                <li>
                  <a href="https://www.eaglecreek.com/blog/packing-light-cold-weather-getaway">
                    Packing Light for a Cold Weather Getaway
                  </a>
                </li>
                <li>
                  <a href="https://www.eaglecreek.com/blog/no-sweat-how-pack-ultimate-gym-bag">
                    How To Pack the Ultimate Gym Bag
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
      </div>
    );
  }
}
