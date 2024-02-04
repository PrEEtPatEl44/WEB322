/*
Name - Sukhpreet Singh
Student ID - 140337221
Mail id - ssingh1336@myseneca.ca
*/

/* Citation and Sources...
Final Project Milestone 1
Module: Utils
Filename: Utils.cpp
Version 1.0
Author	Sukhpreet Singh
Revision History
-----------------------------------------------------------
Date      Reason
2023/11/8 Preliminary release
2023/11/8 Debugged DMA
-----------------------------------------------------------
I have done all the coding by myself and only copied the code
that my professor provided to complete my workshops and assignments.
-----------------------------------------------------------*/

#include "Menu.h"
#include "AidMan.h"

namespace sdds {
	AidMan::AidMan(const char* fileName) {
		if (fileName != nullptr) {
			this->fileName = new char[strlen(fileName)+1];
			strcpy(this->fileName, fileName);
		}
			this->mainMenu.setContent("List Items\tAdd Item\tRemove Item\tUpdate Quantity\tSort\tShip Items\tNew/Open Aid Database");		
	}

	unsigned int AidMan::menu() const {
		std::cout << "Aid Management System" << std::endl;
		std::cout << "Date: " << Date() << std::endl;
		if (this->fileName != nullptr) {
			std::cout << "Data file: " << this->fileName << std::endl << std::endl;
		}
		else {
			std::cout << "Data file: No file" << std::endl<<std::endl;
		}
		unsigned int val= this->mainMenu.run();
		return val;
	}

	AidMan::~AidMan() {
		delete[] this->fileName;
		this->fileName = nullptr;
		this->mainMenu.~Menu();
	}

	void AidMan::run() const{
		unsigned int opt; 
		do {
			char* temp;
			temp = this->mainMenu.getContent();
			int count=0;

			opt= this->menu();
			if (opt == 0) {
				std::cout << "Exiting Program!" << std::endl;
			}
			else {
				std::cout << std::endl << "****";
				for (int i = 0; i < (int)strlen(temp); i++) {
					if (count+1 == (int)opt) {
						while (temp[i] != '\t'&&i<(int)strlen(temp) ){
							std::cout << temp[i];
							i++;
						}
						i = strlen(temp);
					}

					if (temp[i] == '\t') {
						count++;
					}
				}
				std::cout << "****" << std::endl << std::endl;
			}
		} while (opt != 0);
	}
}
